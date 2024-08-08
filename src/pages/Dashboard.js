// src/pages/Dashboard.js
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  fetchTasksRequest,
} from "../redux/actions/taskActions";
import {
  getAllTasks,
  getCompletedTasks,
  getPendingTasks,
} from "../redux/selectors/taskSelectors";
import TaskList from "../components/Tasks/TaskList";
import "./Dashboard.css";

const Dashboard = () => {
  const [taskName, setTaskName] = useState("");
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const allTasks = useSelector(getAllTasks);
  const completedTasks = useSelector(getCompletedTasks);
  const pendingTasks = useSelector(getPendingTasks);

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskName.trim()) {
      return;
    }
    dispatch(addTask({ name: taskName, completed: false }));
    setTaskName("");
  };

  const handleDeleteTask = useCallback(
    (taskId) => {
      dispatch(deleteTask(taskId));
    },
    [dispatch]
  );

  const handleToggleTask = useCallback(
    (taskId) => {
      dispatch(toggleTaskCompletion(taskId));
    },
    [dispatch]
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return completedTasks;
    if (filter === "pending") return pendingTasks;
    return allTasks;
  }, [filter, allTasks, completedTasks, pendingTasks]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Task Manager Dashboard</h1>
        <Link to="/" className="home-button">
          Home
        </Link>
      </header>
      <main className="dashboard-main">
        <section className="task-stats">
          <h2>Task Statistics</h2>
          <div className="stats">
            <div className="stat">
              <span>Total Tasks</span>
              <span>{allTasks.length}</span>
            </div>
            <div className="stat">
              <span>Completed Tasks</span>
              <span>{completedTasks.length}</span>
            </div>
            <div className="stat">
              <span>Pending Tasks</span>
              <span>{pendingTasks.length}</span>
            </div>
          </div>
        </section>
        <section className="add-task">
          <h2>Add a New Task</h2>
          <form onSubmit={handleAddTask}>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Task name"
              required
            />
            <button type="submit" className="add-task-button">
              Add Task
            </button>
          </form>
        </section>
        <section className="task-list">
          <h2>Your Tasks</h2>
          <div className="filter">
            <label htmlFor="filter">Filter Tasks: </label>
            <select id="filter" value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <TaskList
            tasks={filteredTasks}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
          />
        </section>
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2024 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
