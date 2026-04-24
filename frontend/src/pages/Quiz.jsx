import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import QuizCard from "../components/QuizCard";
import Loader from "../components/Loader";

export default function Quiz() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateQuiz = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic first");
      return;
    }

    setLoading(true);
    setError("");
    setQuiz([]);

    try {
      const res = await axios.post(
        "https://telecom-ai-backend.onrender.com/api/quiz/generate",
        {
          topic: topic,
        }
      );

      if (res.data.quiz) {
        setQuiz(res.data.quiz);
      } else {
        setError("Quiz generation failed.");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong while generating quiz.");
    }

    setLoading(false);
  };

  return (
    <div>
      <Sidebar />
      <Navbar />

      <div style={styles.container}>
        <h1>🧪 AI Quiz Generator</h1>

        <p style={styles.subtitle}>
          Generate telecom MCQs instantly using Groq Llama 3.3
        </p>

        <div style={styles.inputSection}>
          <input
            placeholder="Enter topic (e.g. 5G, LTE, Networking)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => {
  if (e.key === "Enter") {
    generateQuiz();
  }
}}
            style={styles.input}
          />

          <button
            onClick={generateQuiz}
            style={styles.button}
          >
            Generate Quiz
          </button>
        </div>

        {loading && <Loader />}

        {error && (
          <div style={styles.errorBox}>
            {error}
          </div>
        )}

        {quiz.length > 0 && (
          <div style={styles.quizContainer}>
            {quiz.map((q, i) => (
              <QuizCard
                key={i}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
            ))}
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

  inputSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "25px",
  },

  input: {
    flex: 1,
    minWidth: "250px",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },

  button: {
    padding: "14px 22px",
    background: "#8b5cf6",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  quizContainer: {
    marginTop: "30px",
  },

  errorBox: {
    background: "#dc2626",
    padding: "14px",
    borderRadius: "10px",
    marginTop: "20px",
  },
};