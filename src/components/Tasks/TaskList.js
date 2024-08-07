// src/components/Tasks/TaskList.js
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
  );
};

export default TaskList;
