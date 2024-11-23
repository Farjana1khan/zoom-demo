import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Name:", name, "Email:", email, "Password:", password);
    alert("Signed up successfully!");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
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
