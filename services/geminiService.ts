
import { GoogleGenAI, Type } from "@google/genai";

export const getDataStrategy = async (industry: string, scale: string, focus: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Act as a world-class senior data architect and engineer specializing in high-growth B2C and eCommerce. 
    Provide a concise, highly professional data strategy recommendation for a company in ${industry}, with a scale of ${scale}, focusing specifically on ${focus}. 
    Focus on modern, scalable solutions (e.g., Data Mesh, Cloud DWH, AI-driven CRM). 
    The tone should be authoritative, strategic, and concise. Format as JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { 
            type: Type.STRING,
            description: "A 2-3 sentence high-level strategic overview."
          },
          keyActionables: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 3-4 specific architectural or operational steps."
          },
          recommendedStack: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of technologies (e.g., Snowflake, dbt, BigQuery, Terraform)."
          }
        },
        required: ["summary", "keyActionables", "recommendedStack"]
      }
    }
  });

  return JSON.parse(response.text);
};
