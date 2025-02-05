import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../reducers/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500 text-white";
      case "Medium":
        return "bg-yellow-500 text-white"; 
      case "Low":
        return "bg-green-500 text-white"; 
      default:
        return "";
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="task-list h-full overflow-y-auto mt-8 p-6 space-y-4">
      {sortedTasks.map((task, index) => (
        <div
          key={index}
          className={`task-item p-4 rounded-md flex justify-between items-center shadow-md ${getPriorityClass(
            task.priority
          )} transition-all duration-300 ease-in-out transform hover:scale-105`}
        >
          <span className="text-sm font-semibold">{task.text} - <strong>{task.priority}</strong></span>
          <button
            onClick={() => handleDeleteTask(index)}
            className="bg-white text-gray-800 p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
