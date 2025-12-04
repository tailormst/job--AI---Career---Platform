"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

// ⭐ Helper: Ensure user exists
async function getOrCreateUser(clerkUserId, email = null, name = null) {
    let user = await db.user.findUnique({
        where: { clerkUserId },
    });

    if (!user) {
        user = await db.user.create({
            data: {
                clerkUserId,
                email: email || "",
                name: name || "",
                industry: null,
                skills: [],
            },
        });
    }

    return user;
}

// ⭐ Update User
export async function updateUser(data) {
    const { userId, sessionClaims } = await auth();
    if (!userId) throw new Error("Unauthorized");

    // Clerk info
    const email = sessionClaims?.email || "";
    const name = sessionClaims?.name || "";

    // Ensure user exists
    const user = await getOrCreateUser(userId, email, name);

    // ⭐ FIX: Move slow AI generation OUTSIDE the Prisma Transaction
    let insightDataToCreate = null;
    let existingInsight = await db.industryInsight.findUnique({
        where: { industry: data.industry },
    });

    if (!existingInsight) {
        // This is the SLOW operation (takes > 5s).
        // It MUST be done before the transaction starts.
        const insights = await generateAIInsights(data.industry);

        insightDataToCreate = {
            industry: data.industry,
            ...insights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        };
    }

    try {
        const result = await db.$transaction(async (tx) => {
            let industryInsight;
            
            // 1. If insights were generated above, create the record inside the transaction
            if (insightDataToCreate) {
                industryInsight = await tx.industryInsight.create({
                    data: insightDataToCreate,
                });
            } else {
                // Otherwise, use the pre-fetched existing one
                industryInsight = existingInsight;
            }

            // 2. Update user (This is a fast operation)
            const updatedUser = await tx.user.update({
                where: { id: user.id },
                data: {
                    industry: data.industry,
                    experience: data.experience,
                    bio: data.bio,
                    skills: data.skills,
                },
            });

            return { updatedUser, industryInsight };
        });

        revalidatePath("/");
        return { success: true, ...result };
    } catch (error) {
        console.error("❌ Error updating user:", error);
        throw new Error("Failed to update profile");
    }
}

// ⭐ Onboarding Status
export async function getUserOnboardingStatus() {
    const { userId, sessionClaims } = await auth();
    if (!userId) throw new Error("Unauthorized");

    // Ensure user exists
    const email = sessionClaims?.email || "";
    const name = sessionClaims?.name || "";
    const user = await getOrCreateUser(userId, email, name);

    return {
        isOnboarded: !!user.industry,
    };
}