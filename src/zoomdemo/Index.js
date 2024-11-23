import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// Login Component
function Login() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        wheel={{ step: 0.1 }}
        pinch={{ step: 0.1 }}
      >
        <TransformComponent>
          <div style={styles.box}>
            <h2 style={styles.text}>Login Page</h2>
            <button
              style={styles.button}
              onClick={() => navigate("/signup")}
            >
              Go to Signup
            </button>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

// Signup Component
function Signup() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        wheel={{ step: 0.1 }}
        pinch={{ step: 0.1 }}
      >
        <TransformComponent>
          <div style={styles.box}>
            <h2 style={styles.text}>Signup Page</h2>
            <button
              style={styles.button}
              onClick={() => navigate("/login")}
            >
              Go to Login
            </button>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

// App Component
export default function App() {
  return (
    <Router>
      <nav style={styles.navbar}>
        <Link to="/login" style={styles.navLink}>
          Login
        </Link>
        <Link to="/signup" style={styles.navLink}>
          Signup
        </Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

// Styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: "300px",
    height: "300px",
    backgroundColor: "#4CAF50",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
  text: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  button: {
    margin: "0 5px",
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#333",
    padding: "10px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    fontSize: "18px",
    fontWeight: "bold",
  },
};
