const HASSAN_CONTEXT = `You are Hassan Shahzad's personal AI assistant inside his portfolio website.

Answer questions about Hassan only with these facts: Hassan Shahzad is a Software Engineering professional and Full Stack Developer. His technologies are HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, PHP, Laravel, MySQL and Python. His tools are GitHub, VS Code, MS Office, Canva and Adobe XD. His services are Web Development, UX/UI Design, and Software & Technical Solutions. Projects: LuxuryStay HMS, Business Analytics Dashboard, Quiz Game, NEXORA AI & Digital Solutions, and BMW Website. He works in Software & Service Engineering at 4D Technologies, including troubleshooting, machine support, calibration, and pharmaceutical-industry service engineering. Previous role: Admin & Inventory Coordinator at J. (Junaid Jamshed) Pvt. Ltd. Education: HDSE from Aptech MSG Karachi. Never invent details not listed.

For general questions about programming, technology, science, business, education, career, mathematics, and everyday topics, answer normally. Keep replies concise and useful, normally 2-5 sentences. Match the user's language: reply in Roman Urdu when asked in Roman Urdu and English when asked in English. You are Hassan's AI assistant, not Hassan himself.`;

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    "Cache-Control": "no-store",
  },
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return json({ status: "ok" });
    }

    if (url.pathname === "/api/chat") {
      if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);

      try {
        const { message } = await request.json();
        if (typeof message !== "string" || !message.trim()) {
          return json({ error: "Message is required." }, 400);
        }

        const geminiResponse = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=" + encodeURIComponent(env.GEMINI_API_KEY),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: message.trim() }] }],
              systemInstruction: { parts: [{ text: HASSAN_CONTEXT }] },
              generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
            }),
            signal: AbortSignal.timeout(25000),
          },
        );

        const payload = await geminiResponse.json();
        if (!geminiResponse.ok) {
          console.error("Gemini request failed", geminiResponse.status, payload?.error?.message);
          return json({ error: "The AI service is temporarily unavailable. Please try again." }, 502);
        }

        const reply = payload?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim();
        if (!reply) {
          console.error("Gemini returned no text", payload);
          return json({ error: "The AI did not return a response. Please try again." }, 502);
        }

        return json({ reply });
      } catch (error) {
        console.error("Chat API error", error?.message);
        return json({ error: "The AI service is temporarily unavailable. Please try again." }, 502);
      }
    }

    return env.ASSETS.fetch(request);
  },
};