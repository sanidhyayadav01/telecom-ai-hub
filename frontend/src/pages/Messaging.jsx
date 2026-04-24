import { useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export default function Messaging() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const rewriteMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(
        "https://telecom-ai-backend.onrender.com/api/messaging/rewrite",
        {
          text: message
        }
      );

      setResponse(res.data.response);
    } catch (error) {
      setResponse("Failed to rewrite message.");
    }

    setLoading(false);
  };

  const templates = [
    "My internet has been down since morning.",
    "I was charged extra on my monthly bill.",
    "Please activate my SIM card quickly.",
    "Network signal is very weak in my area."
  ];

  return (
    <div>
      <Sidebar />

      <div style={styles.container}>
        <h1>💬 Smart Messaging Assistant</h1>

        <p style={styles.subtitle}>
          Rewrite telecom customer messages into professional communication.
        </p>

        {/* Template Buttons */}
        <div style={styles.templateContainer}>
          {templates.map((temp, index) => (
            <button
              key={index}
              style={styles.templateBtn}
              onClick={() => setMessage(temp)}
            >
              {temp}
            </button>
          ))}
        </div>

        {/* Input */}
        <textarea
          placeholder="Write your telecom message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    rewriteMessage();
  }
}}
          style={styles.textarea}
        />

        <button
          style={styles.mainButton}
          onClick={rewriteMessage}
        >
          Rewrite Message
        </button>

        {/* Output */}
        {response && (
          <div style={styles.responseBox}>
            <h3>Professional Version</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    paddingTop: "100px",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "90%",
    maxWidth: "900px",
    margin: "0 auto",
    minHeight: "100vh",
    background: "#0b1220",
    color: "white",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "25px",
  },

  templateContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },

  templateBtn: {
    padding: "10px 14px",
    background: "#1e293b",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  textarea: {
    width: "100%",
    height: "160px",
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    marginBottom: "20px",
  },

  mainButton: {
    padding: "12px 20px",
    background: "#8b5cf6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  responseBox: {
    marginTop: "30px",
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    lineHeight: "1.8",
  },
};