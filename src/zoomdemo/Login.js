import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
    alert("Logged in successfully!");
    navigate("/signup");
  };

  return (
    <div style={styles.container}>
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
    </div>
  );
}

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" },
  box: { padding: "20px", backgroundColor: "#4CAF50", borderRadius: "10px" },
  text: { color: "#fff", marginBottom: "20px" },
  input: { margin: "10px 0", padding: "10px", width: "100%" },
  button: { backgroundColor: "#007BFF", color: "#fff", padding: "10px", width: "100%", marginBottom: "10px" },
  linkButton: { backgroundColor: "#6C757D", color: "#fff", padding: "10px", width: "100%" },
};
