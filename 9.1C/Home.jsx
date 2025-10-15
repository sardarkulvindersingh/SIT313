import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Home() {
  const nav = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      nav("/"); // redirect to login page
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div style={styles.homeContainer}>
      <header style={styles.homeHeader}>
        <h1 style={styles.logo}>DEV@Deakin</h1>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Log Out
        </button>
      </header>

      <main style={styles.homeContent}>
        <h2 style={styles.heading}>Welcome to DEV@Deakin</h2>
      </main>
    </div>
  );
}

const styles = {
  homeContainer: {
    fontFamily: "Poppins, sans-serif",
    minHeight: "100vh",
    backgroundColor: "#f5f7fa",
    color: "#333",
    margin: 0,
  },
  homeHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#007bff",
    color: "white",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  logoutBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  homeContent: {
    textAlign: "center",
    marginTop: "150px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "18px",
    color: "#555",
  },
};
