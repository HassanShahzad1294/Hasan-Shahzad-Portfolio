import { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Hassan's AI assistant. Ask me anything about Hassan, programming, web development, technology, or general knowledge.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();

    const userMessage = input.trim();

    if (!userMessage || loading) return;

    const newUserMessage = {
      role: "user",
      content: userMessage,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setLoading(true);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiBaseUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.details || data.error || "AI request failed"
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error("CHAT ERROR:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting to the AI right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* FLOATING CHAT BUTTON */}
      <button
        className={`chatbot-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open AI Assistant"
      >
        {open ? "×" : "✦"}
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div className="chatbot-window">

          {/* HEADER */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <span className="chatbot-status"></span>

              <div>
                <strong>Hassan's AI</strong>
                <small>AI Assistant</small>
              </div>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
              type="button"
            >
              ×
            </button>
          </div>

          {/* MESSAGES */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`chat-message ${message.role}`}
              >
                <div className="chat-bubble">
                  {message.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="chat-message assistant">
                <div className="chat-bubble typing">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}
          <form
            className="chatbot-input-area"
            onSubmit={sendMessage}
          >
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />

            <button type="submit" disabled={loading}>
              {loading ? "..." : "↑"}
            </button>
          </form>

        </div>
      )}
    </>
  );
}

export default Chatbot;