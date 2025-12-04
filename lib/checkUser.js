import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
    const user = await currentUser();
    if (!user) return null;

    try {
        const existingUser = await db.user.findUnique({
            where: { clerkUserId: user.id },
        });

        if (existingUser) {
            return existingUser;
        }

        // Use UPSERT to avoid duplicate emails
        const newUser = await db.user.upsert({
            where: { email: user.emailAddresses[0].emailAddress },
            update: {
                clerkUserId: user.id,
                name: `${user.firstName} ${user.lastName}`,
                imageUrl: user.imageUrl,
            },
            create: {
                clerkUserId: user.id,
                email: user.emailAddresses[0].emailAddress,
                name: `${user.firstName} ${user.lastName}`,
                imageUrl: user.imageUrl,
            },
        });

        return newUser;
    } catch (error) {
        console.log("checkUser error:", error.message);
        return null;
    }
};
