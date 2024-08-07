// src/components/Tasks/TaskList.js
<<<<<<< HEAD
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskCompletion, deleteTask } from '../../redux/actions/taskActions';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleToggleCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleCompletion(task.id)}
          />
          <span>{task.name}</span>
          <button onClick={() => handleDelete(task.id)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
=======
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/actions/taskActions';
import socket from '../../services/socket';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());

    socket.on('taskAdded', () => {
      dispatch(fetchTasks());
    });

    return () => {
      socket.off('taskAdded');
    };
  }, [dispatch]);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
>>>>>>> a23812e (Normalize all line endings)
  );
};

export default TaskList;
