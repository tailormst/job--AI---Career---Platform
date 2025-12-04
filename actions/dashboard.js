"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("GEMINI_KEY_LENGTH:", process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.length : "KEY_NOT_FOUND");

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
});

// ⭐ Generate AI Insights
export const generateAIInsights = async (industry) => {
    try{
        const prompt = `
            Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format.
            
            IMPORTANT: All salary figures MUST be provided in **Indian Rupees (INR)**. Use the full numerical value without 'Lakh' or 'Crore' text.

            {
                "salaryRanges": [
                    { 
                        "role": "string", 
                        "min": number, // MUST be full INR value (e.g., 600000)
                        "max": number, // MUST be full INR value (e.g., 1200000)
                        "median": number, // MUST be full INR value (e.g., 900000)
                        "location": "string" 
                    }
                ],
                "growthRate": number,
                "demandLevel": "HIGH" | "MEDIUM" | "LOW",
                "topSkills": ["skill1", "skill2"],
                "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
                "keyTrends": ["trend1", "trend2"],
                "recommendedSkills": ["skill1", "skill2"]
            }

            IMPORTANT:
            - Return ONLY pure JSON output
            - No markdown, no comments, no extra notes
            - Include at least 5 skills, 5 trends, 5 roles
        `;
        
        const result = await model.generateContent(prompt);
        const text = result.response.text();

        const cleaned = text.replace(/```json|```/g, "").trim();

        return JSON.parse(cleaned);

    } catch (error) {
        console.error("❌ Gemini AI Error:", error);
        throw new Error("Gemini failed to generate insights");
    }
};

// ⭐ Get Insights for User
export async function getIndustryInsights() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
        include: {
            industryInsight: true,
        },
    });

    if (!user) throw new Error("User not found");

    // If no insights exist, generate new ones
    if (!user.industryInsight) {
        const insights = await generateAIInsights(user.industry);

        return await db.industryInsight.create({
            data: {
                industry: user.industry,
                ...insights,
                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
        });
    }

    return user.industryInsight;
}