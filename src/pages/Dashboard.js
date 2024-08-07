// src/pages/Dashboard.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTaskCompletion, fetchTasksRequest } from '../redux/actions/taskActions';
import TaskList from '../components/Tasks/TaskList';
import './Dashboard.css';

const Dashboard = () => {
  const [taskName, setTaskName] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask({ name: taskName, completed: false }));
      setTaskName('');
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Task Manager Dashboard</h1>
        <button onClick={() => dispatch(fetchTasksRequest())}>Refresh Tasks</button>
      </header>
      <main className="dashboard-main">
        <section className="task-stats">
          <h2>Task Statistics</h2>
          <div className="stats">
            <div className="stat">
              <span>Total Tasks</span>
              <span>{tasks.length}</span>
            </div>
            <div className="stat">
              <span>Completed Tasks</span>
              <span>{tasks.filter(task => task.completed).length}</span>
            </div>
            <div className="stat">
              <span>Pending Tasks</span>
              <span>{tasks.filter(task => !task.completed).length}</span>
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
            <button type="submit">Add Task</button>
          </form>
        </section>
        <section className="task-list">
          <h2>Your Tasks</h2>
          <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={toggleTaskCompletion} />
        </section>
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2024 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
