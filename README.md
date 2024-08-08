# Task Manager

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Redux State Management](#redux-state-management)
  - [Actions](#actions)
  - [Reducers](#reducers)
  - [Sagas](#sagas)
  - [Selectors](#selectors)
- [Components](#components)
  - [Auth](#auth)
  - [Tasks](#tasks)
- [Styling](#styling)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Task Manager is a robust and intuitive web application designed to help users efficiently manage their tasks. The application supports user authentication, task creation, task completion toggling, task deletion, and task filtering. It leverages modern web development technologies to provide a smooth and responsive user experience.

## Features

- **User Authentication**: Register and log in securely.
- **Task Management**: Create, update, delete, and view tasks.
- **Task Filtering**: Filter tasks by completion status (all, completed, pending).
- **Real-Time Updates**: Real-time updates using web sockets.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Tech Stack

- **Frontend**:
  - React
  - Redux
  - Redux Saga
  - React Router
- **Backend**:
  - JSON Server (for mock backend)
- **Styling**:
  - CSS Modules
  - Global Styles

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Git installed on your machine.

## Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:fordefam12/task-manager.git
   cd task-manager
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Start the JSON server:

bash
Copy code
npx json-server --watch db.json --port 5000
Usage
After starting the development server and JSON server, you can access the application at http://localhost:3000. You can register a new account, log in, and start managing your tasks.

Project Structure
The project structure is organized as follows:

java
Copy code
task-manager/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   ├── Tasks/
│   │   │   ├── TaskList.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   ├── redux/
│   │   ├── actions/
│   │   │   ├── authActions.js
│   │   │   ├── taskActions.js
│   │   ├── reducers/
│   │   │   ├── authReducer.js
│   │   │   ├── taskReducer.js
│   │   │   ├── index.js
│   │   ├── sagas/
│   │   │   ├── taskSagas.js
│   │   │   ├── index.js
│   │   ├── selectors/
│   │   │   ├── taskSelectors.js
│   │   ├── store.js
│   ├── services/
│   ├── App.js
│   ├── index.js
│   ├── GlobalStyles.js
│   ├── theme.js
├── package.json
├── .env
Redux State Management
Actions
authActions.js
loginUser: Action to handle user login.
registerUser: Action to handle user registration.
taskActions.js
fetchTasksRequest: Action to fetch tasks.
fetchTasksSuccess: Action to handle successful task fetch.
fetchTasksError: Action to handle task fetch error.
toggleTaskCompletion: Action to toggle task completion.
addTask: Action to add a new task.
deleteTask: Action to delete a task.
Reducers
authReducer.js
Handles authentication-related state:

LOGIN_USER: Sets the user state on login.
REGISTER_USER: Sets the user state on registration.
taskReducer.js
Handles task-related state:

FETCH_TASKS_REQUEST: Sets loading state.
FETCH_TASKS_SUCCESS: Sets the tasks state.
FETCH_TASKS_ERROR: Sets the error state.
TOGGLE_TASK_COMPLETION: Toggles the completion status of a task.
ADD_TASK: Adds a new task to the state.
DELETE_TASK: Removes a task from the state.
Sagas
taskSagas.js
fetchTasks: Saga to fetch tasks from the server.
toggleTaskCompletion: Saga to handle task completion toggle.
addTask: Saga to handle adding a new task.
deleteTask: Saga to handle deleting a task.
Selectors
taskSelectors.js
getAllTasks: Selector to get all tasks.
getCompletedTasks: Selector to get completed tasks.
getPendingTasks: Selector to get pending tasks.
Components
Auth
Login.js
Handles the login form and dispatches login actions.

Register.js
Handles the registration form and dispatches register actions.

Tasks
TaskList.js
Displays a list of tasks and handles task completion and deletion.

Styling
CSS Modules: Used for component-specific styles.
GlobalStyles: Used for global styles applied across the application.
Theme: Defines theme variables such as colors and fonts.
API Endpoints
The application uses a mock backend provided by JSON Server. The following endpoints are available:

GET /tasks: Fetch all tasks.
POST /tasks: Add a new task.
PUT /tasks/:id: Update a task.
DELETE /tasks/:id: Delete a task.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Create a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any inquiries or issues, please contact:

Name: Your Name
Email: your.email@example.com
GitHub: Your GitHub Profile
vbnet
