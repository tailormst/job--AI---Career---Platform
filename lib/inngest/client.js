import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: "jobai-career", // Unique app ID
    name: "jobAi-Career",
    credentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY,
        },
    },
});