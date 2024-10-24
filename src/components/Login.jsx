import React, { useState } from "react";

const Login = ({ setIsRegistered }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored username and password
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Simple validation
    if (username === "" || password === "") {
      setError("Username and password are required.");
    } else if (username !== storedUsername || password !== storedPassword) {
      setError("Invalid username or password.");
    } else {
      setError("");
      alert("Login successful!");
      // Reset form fields
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="btn">
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <span onClick={() => setIsRegistered(false)} style={{ color: "blue", cursor: "pointer" }}>
            Click here
          </span>{" "}
          to create one.
        </p>
      </form>
    </div>
  );
};

export default Login;
