import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";
import Loader from "../components/Loader";

export default function Complaint() {
  const [complaint, setComplaint] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const submitComplaint = async () => {
    if (!complaint.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(
        "https://telecom-ai-backend.onrender.com/api/complaint/submit",
        {
          text: complaint
        }
      );

      setResponse(res.data.analysis);

    } catch (error) {
      setResponse("Something went wrong while submitting complaint.");
    }

    setLoading(false);
  };

  const formatResponse = (text) => {
    const lines = text.split("\n").filter(line => line.trim() !== "");

    return lines.map((line, index) => {
      const parts = line.split(":");

      if (parts.length >= 2) {
        return (
          <div key={index} style={styles.resultRow}>
            <strong style={styles.label}>
              {parts[0]}:
            </strong>
            <span style={styles.value}>
              {parts.slice(1).join(":")}
            </span>
          </div>
        );
      }

      return (
        <p key={index}>{line}</p>
      );
    });
  };

  return (
    <div>
      <Sidebar />
      <Navbar />

      <div style={styles.container}>
        <h2>🛠 AI Complaint Analyzer</h2>

        <textarea
          placeholder="Describe your telecom issue..."
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          onKeyDown={(e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    submitComplaint();
  }
}}
          style={styles.textarea}
        />

        <button onClick={submitComplaint} style={styles.button}>
          Submit Complaint
        </button>

        {loading && <Loader />}

        {response && (
          <div style={styles.resultBox}>
            <h3>Analysis Report</h3>
            {formatResponse(response)}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
container: {
  paddingTop: "90px",
  paddingLeft: "20px",
  paddingRight: "20px",
  minHeight: "100vh",
  background: "#0b1220",
  color: "white",
  width: "90%",
  maxWidth: "900px",
  margin: "0 auto"
},

  textarea: {
    width: "100%",
    height: "150px",
    padding: "12px",
    borderRadius: "10px",
    marginTop: "20px",
    border: "none",
    outline: "none"
  },

  button: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#8b5cf6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  resultBox: {
    marginTop: "30px",
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px"
  },

  resultRow: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },

  label: {
    color: "#8b5cf6",
    fontSize: "16px"
  },

  value: {
    color: "#e2e8f0",
    fontSize: "15px",
    lineHeight: "1.6"
  }
};