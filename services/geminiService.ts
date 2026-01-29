import { GoogleGenAI } from "@google/genai";

// Fix: Follow guidelines for Initialization and API Key usage.
// Assume process.env.API_KEY is valid and accessible.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[] = []): Promise<string> => {
  try {
    // Using chat session for context awareness
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `Você é o "Assistente Virtual do João Paulo do Couto (CoutoDev)".
        O João é um desenvolvedor sênior especializado em Flutter, FlutterFlow, n8n e desenvolvimento web.
        Ele criou projetos como StrideUp Fit.
        Seu tom é profissional, tecnológico, mas muito pessoal e direto.
        Responda perguntas sobre os serviços dele (criação de apps, automações, sistemas).
        Se perguntarem sobre preços, diga que depende da complexidade, mas que o João foca em entregar alto valor e sugira agendar uma conversa.
        Responda sempre em Português do Brasil.
        Mantenha as respostas concisas.`,
      },
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua resposta.";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Ocorreu um erro temporário na minha conexão neural. Por favor, tente novamente mais tarde.";
  }
};