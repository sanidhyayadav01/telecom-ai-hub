import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Learn", path: "/learn" },
    { name: "Quiz", path: "/quiz" },
    { name: "Messaging", path: "/messaging" },
    { name: "Complaint", path: "/complaint" },
  ];

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <div style={styles.topbar}>
        <button className="hamburger-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <h3 style={styles.logo} onClick={() => navigate("/")}>
          Telecom AI Hub
        </h3>
      </div>

      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={handleNavigate}
            style={{
              ...styles.link,
              background:
                location.pathname === item.path ? "#8b5cf6" : "transparent",
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Overlay */}
      {open && <div style={styles.overlay} onClick={() => setOpen(false)} />}
    </>
  );
}

const styles = {
  topbar: {
    height: "60px",
    background: "#0f1b33",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0 20px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 9999, // increased
    color: "white",
  },

  hamburger: {
    fontSize: "22px",
    background: "transparent",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  logo: {
    cursor: "pointer",
    margin: 0,
  },

  sidebar: {
    position: "fixed",
    top: "60px",
    left: 0,
    width: "240px",
    height: "100vh",
    background: "#111a2e",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    transition: "0.3s ease",
    zIndex: 200,
  },

  link: {
    color: "white",
    textDecoration: "none",
    padding: "12px",
    borderRadius: "8px",
    transition: "0.3s",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 150,
  },
};
