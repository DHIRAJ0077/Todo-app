import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, logout } from "../reducers/tasksSlice"; // Adjust the import path if necessary

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.tasks.isAuthenticated);  // Access authentication state from tasksSlice

  const handleLogin = () => dispatch(authenticate());
  const handleLogout = () => dispatch(logout());

  return (
    <div className="auth">
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Auth;
