import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../reducers/tasksSlice";
import { useNavigate } from "react-router-dom";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate(); 

  const handleAddTask = () => {
    if (task.trim()) {
      const taskExists = tasks.some(
        (existingTask) => existingTask.text.toLowerCase() === task.toLowerCase()
      );
      if (taskExists) {
        alert("Task already exists!");
      } else {
        dispatch(addTask({ text: task, priority }));
        setTask("");
        setPriority("Medium");
      }
    }
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

  return (
    <div className="task-input bg-white p-6 rounded-lg shadow-xl max-w-lg mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-semibold text-center text-blue-700">Add a New Task</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task here"
          className="p-3 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-gray-200"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-3 rounded-md bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-gray-200"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button
          onClick={handleAddTask}
          className="py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add Task
        </button>

        {/* Login Button */}
        <button
          onClick={handleLoginRedirect}
          className="py-3 bg-gray-600 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
