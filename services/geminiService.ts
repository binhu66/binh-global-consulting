import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const getSystemInstruction = (lang: string) => `
You are the "Binh Global AI", an expert virtual consultant for Binh Global, a senior Canadian consulting firm.
Your goal is to assist businesses with global expansion, specifically bridging the Canadian, US, and Southeast Asian markets.

IMPORTANT: You must respond in ${lang === 'zh' ? 'Chinese (Simplified)' : lang === 'fr' ? 'French' : 'English'}. 
Your tone must be professional, strategic, and concise.

Key Expertise Areas:
1. Market Entry Strategy (Legal structures, partnerships).
2. Tax Compliance & Fiscal Strategy (VAT, cross-border taxation).
3. Logistics & Supply Chain (Warehousing, shipping routes).
4. AI Expansion (Using AI for market analysis).

Tone: Professional, strategic, concise, and helpful. Use business terminology but remain accessible.
Do not make up facts about real-world laws if you are unsure; advise consulting a human expert for legal specifics.
Always keep responses under 150 words unless asked for a detailed report.
`;

class GeminiService {
  private ai: GoogleGenAI | null = null;
  private modelId: string = "gemini-1.5-flash";

  constructor() {
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== 'undefined') {
      this.ai = new GoogleGenAI({ apiKey });
    } else {
      console.warn("Gemini API Key is missing. Chat features will be disabled.");
    }
  }

  async *streamChat(history: ChatMessage[], newMessage: string, language: string) {
    if (!this.ai) {
      throw new Error("AI Service not initialized. Check API Key.");
    }
    try {
      const chat = (this.ai as any).chats.create({
        model: this.modelId,
        config: {
          systemInstruction: getSystemInstruction(language),
          temperature: 0.7,
        },
      });

      const responseStream = await chat.sendMessageStream({
        message: newMessage
      });

      for await (const chunk of responseStream) {
        if (chunk.text) {
          yield chunk.text;
        }
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();