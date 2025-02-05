import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route

import { useSelector } from "react-redux"; // Import useSelector for authentication state
import Signup from "./componets/Signup";
import TaskInput from "./componets/TaskInput";
import Auth from "./componets/Auth";
import TaskList from "./componets/TaskList";
import Login from "./componets/Login";

const App = () => {
  const [isSignup, setIsSignup] = useState(false); 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleSignupSuccess = () => {
    setIsSignup(false); 
  };

  return (
    <div>
    {isAuthenticated ? (
      <div>
        <h1 className="text-3xl items-center justify-center flex font-bold text-gray-700 mb-6">Welcome</h1>
        <Auth />
        <TaskInput />
        <TaskList />
        </div>
   
    ) : (
      <div>
        <h1 className="text-3xl items-center justify-center flex font-bold text-gray-700 mb-6">Todo APP</h1>
        {isSignup ? (
          <Signup onSignupSuccess={() => setIsSignup(false)} />
        ) : (
          <Login />
        )}
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </button>
      </div>
    )}
    </div>
 
  );
};

export default App;
