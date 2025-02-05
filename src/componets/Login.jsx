import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "../reducers/tasksSlice"; // Assuming you already have 'authenticate' action in your Redux slice

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple check for username and password (replace with actual authentication logic)
    if (username === "user" && password === "password") {
      dispatch(authenticate()); // Dispatch the authenticate action from Redux slice
    } else {
      alert("Invalid username or password");
    }
  };

  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default Login;
