import React, { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/api/auth/signup", form);

      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">

      <div className="signup-card">
        <h2>Create your account</h2>
        <p>Start your investment journey today</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Signup"}
          </button>

        </form>

        <p className="switch-auth">
          Already have an account? 
          <span onClick={() => navigate("/login")}> Login</span>
        </p>

      </div>

    </div>
  );
}

export default Signup;
