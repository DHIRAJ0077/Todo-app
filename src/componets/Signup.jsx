import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../reducers/tasksSlice";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

   
    alert("Signup successful!");

    dispatch(authenticate());

  
    navigate("/login"); 
  };

  return (
    <div className="signup min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-2 text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2 text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
