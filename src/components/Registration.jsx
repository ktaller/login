import React, { useState } from "react";

const Registration = ({ setIsRegistered }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/\d/.test(password)) {
      setError("Password must contain at least one digit.");
      return;
    }

    // Save username and password to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful! You can now log in.");
    setIsRegistered(true);
    setError("");
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
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
          Register
        </button>
        <p>
          Already have an account?{" "}
          <span onClick={() => setIsRegistered(true)} style={{ color: "blue", cursor: "pointer" }}>
            Click here
          </span>{" "}
          to log in.
        </p>
      </form>
    </div>
  );
};

export default Registration;
