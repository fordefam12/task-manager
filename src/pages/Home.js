// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/Tasks/TaskList'; // Assuming you have this component
import './Home.css'; // Assuming you have some CSS for styling

const Home = () => {
  // Mock tasks for demonstration purposes
  const tasks = [
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
    { id: 3, name: 'Task 3', completed: false },
  ];

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Task Manager</h1>
        <nav>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main className="home-main">
        <section className="home-welcome">
          <h2>Your Tasks</h2>
          <TaskList tasks={tasks} />
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
