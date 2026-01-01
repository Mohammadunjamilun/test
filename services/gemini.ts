import { GoogleGenAI } from "@google/genai";

const systemInstruction = `
You are a friendly and expert DevOps and Web Deployment assistant. 
The user has just generated a React application using an AI coding tool.
They want to know how to "let others visit it" (i.e., host/deploy it).
Your goal is to explain deployment concepts simply (e.g., Netlify, Vercel, GitHub Pages).
Keep answers concise, practical, and encouraging.
If they ask about the specific environment they are in, explain that this is a temporary preview and they need to export the code to host it permanently.
`;

export const askHostingAssistant = async (question: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using gemini-3-flash-preview as it is good for basic text tasks and Q&A
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while trying to answer your question. Please check if your API key is valid.";
  }
};