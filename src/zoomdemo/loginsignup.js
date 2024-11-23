import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// Login Component
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your login logic here
    alert("Logged in successfully!");
    navigate("/signup");
  };

  return (
    <div style={styles.container}>
      <TransformWrapper initialScale={1} minScale={0.5} maxScale={3} wheel={{ step: 0.1 }} pinch={{ step: 0.1 }}>
        <TransformComponent>
          <div style={styles.box}>
            <h2 style={styles.text}>Login</h2>
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button style={styles.button} onClick={handleLogin}>
              Login
            </button>
            <button style={styles.linkButton} onClick={() => navigate("/signup")}>
              Don't have an account? Signup
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your signup logic here
    alert("Signed up successfully!");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <TransformWrapper initialScale={1} minScale={0.5} maxScale={3} wheel={{ step: 0.1 }} pinch={{ step: 0.1 }}>
        <TransformComponent>
          <div style={styles.box}>
            <h2 style={styles.text}>Signup</h2>
            <input
              type="text"
              placeholder="Name"
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button style={styles.button} onClick={handleSignup}>
              Signup
            </button>
            <button style={styles.linkButton} onClick={() => navigate("/login")}>
              Already have an account? Login
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
      <Route path="/" element={<Login />} />
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
    height: "70vh",
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: "300px",
    padding: "20px",
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
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  linkButton: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#6C757D",
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
