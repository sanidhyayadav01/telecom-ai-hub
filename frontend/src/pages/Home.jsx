import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "🎓 AI Telecom Tutor",
      desc: "Learn telecom concepts like 5G, LTE, IoT and networking through AI-powered explanations.",
      route: "/learn",
    },
    {
      title: "🧪 AI Quiz Generator",
      desc: "Generate telecom MCQs instantly for practice and interview preparation.",
      route: "/quiz",
    },
    {
      title: "💬 Smart Messaging",
      desc: "Rewrite telecom-related customer messages professionally.",
      route: "/messaging",
    },
    {
      title: "🛠 Complaint Analyzer",
      desc: "Detect complaint severity, urgency and customer sentiment using AI.",
      route: "/complaint",
    },
  ];

  return (
    <div>
      <Sidebar />
      <Navbar />

      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.hero}>
          <h1 style={styles.heading}>AI Powered Telecom Operations Platform</h1>

          <p style={styles.subheading}>
            An integrated platform combining telecom learning, customer support,
            complaint intelligence, and communication automation using Groq
            Llama 3.3.
          </p>

          <button
            className="hero-button"
            onClick={() => navigate("/dashboard")}
          >
            Explore Dashboard →
          </button>
        </div>

        {/* Stats Section */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <h2>12K+</h2>
            <p>AI Queries Solved</p>
          </div>

          <div style={styles.statCard}>
            <h2>8K+</h2>
            <p>Complaints Processed</p>
          </div>

          <div style={styles.statCard}>
            <h2>5K+</h2>
            <p>Quizzes Generated</p>
          </div>

          <div style={styles.statCard}>
            <h2>96%</h2>
            <p>User Satisfaction</p>
          </div>
        </div>

        {/* Features */}
        <h2 style={styles.sectionTitle}>Platform Features</h2>

        <div style={styles.featureGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              onClick={() => navigate(feature.route)}
            >
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div style={styles.aboutSection}>
          <h2>Why Telecom AI Hub?</h2>

          <p>
            Traditional telecom systems separate learning, support and customer
            communication workflows. Our platform integrates everything into one
            intelligent ecosystem powered by Generative AI.
          </p>

          <ul style={styles.list}>
            <li>✅ AI-based telecom education</li>
            <li>✅ Smart complaint prioritization</li>
            <li>✅ Automated communication assistance</li>
            <li>✅ Interview preparation through quizzes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    paddingTop: "90px",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    minHeight: "100vh",
    color: "white",
    background: "#0b1220",
  },

  hero: {
    textAlign: "center",
    marginBottom: "50px",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  subheading: {
    color: "#94a3b8",
    fontSize: "18px",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto",
  },

  // heroButton: {
  //   marginTop: "25px",
  //   padding: "14px 28px",
  //   background: "#8b5cf6",
  //   color: "white",
  //   border: "none",
  //   borderRadius: "10px",
  //   cursor: "pointer",
  //   fontSize: "16px",
  // },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },

  statCard: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
  },

  sectionTitle: {
    marginBottom: "20px",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },

  // featureCard: {
  //   background: "#1e293b",
  //   padding: "25px",
  //   borderRadius: "12px",
  //   cursor: "pointer",
  //   transition: "0.3s",
  // },

  aboutSection: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "40px",
  },

  list: {
    marginTop: "20px",
    lineHeight: "2",
  },
};
