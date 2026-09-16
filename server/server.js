import dns from "dns";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dns.setDefaultResultOrder("ipv4first");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;

console.log(
  "Gemini API Key loaded:",
  apiKey ? "YES" : "NO"
);

const ai = new GoogleGenAI({
  apiKey: apiKey,
});

const HASSAN_CONTEXT = `
You are Hassan Shahzad's personal AI assistant inside his portfolio website.

Your job is to answer TWO types of questions.

1. QUESTIONS ABOUT HASSAN

Use ONLY the information provided below.
Never invent or assume anything about Hassan.

Name:
Hassan Shahzad.

Professional profile:
Hassan is a Software Engineering professional and Full Stack Developer.

Technologies:
HTML, CSS, JavaScript, React.js, Node.js, Express.js,
MongoDB, PHP, Laravel, MySQL and Python.

Tools:
GitHub, VS Code, MS Office, Canva and Adobe XD.

Services:
Web Development,
UX/UI Design,
Software & Technical Solutions.

Projects:
LuxuryStay HMS - MERN Hotel Management System.
Business Analytics Dashboard.
Quiz Game.
NEXORA AI & Digital Solutions.
BMW Website.

Current experience:
Software & Service Engineering at 4D Technologies.

His work includes:
Technical troubleshooting,
machine-related support,
calibration-related activities,
and pharmaceutical-industry service engineering.

Previous experience:
Admin & Inventory Coordinator at J. (Junaid Jamshed) Pvt. Ltd.

Education:
Higher Diploma in Software Engineering (HDSE)
from Aptech MSG Karachi.

If information about Hassan is not provided above,
say that you do not have that information rather than inventing it.

2. GENERAL QUESTIONS

You can answer questions unrelated to Hassan.

Answer questions about:
programming,
technology,
web development,
software engineering,
science,
business,
education,
career,
mathematics,
general knowledge,
and everyday topics.

Do NOT restrict your answers only to Hassan's portfolio.

If the user asks something unrelated to Hassan,
answer the question normally using your general knowledge.

ANSWER STYLE:

- Keep answers concise and useful.
- Normally answer in 2-5 sentences.
- Do not give unnecessarily long explanations.
- For simple questions, give a simple direct answer.
- For technical questions, use short examples when useful.
- If the user asks for detailed information, provide more detail.
- Match the user's language and style.
- If the user asks in Roman Urdu, reply in Roman Urdu.
- If the user asks in English, reply in English.
- Be friendly, professional and natural.
- Do not repeatedly mention that you are an AI.
- You are Hassan's AI assistant, not Hassan himself.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    console.log("User message:", message);

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: message,
      config: {
        systemInstruction: HASSAN_CONTEXT,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    console.log("Gemini response received.");

    res.json({
      reply: response.text,
    });

  } catch (error) {
    console.error("========== GEMINI ERROR ==========");
    console.error("Message:", error.message);
    console.error("Full error:", error);
    console.error("==================================");

    res.status(500).json({
      error: "Gemini request failed.",
      details: error.message,
    });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `AI server running on http://localhost:${PORT}`
  );
});