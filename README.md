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

# Task Manager

<p align='center'>
<a href=src/images/qr-code (20).png><img src='./assets/https://github.com/fordefam12/task-manager'height='20%' width="20%"></a>
</p>
## Description

 Task Manager is a powerful and user-friendly web application designed to help individuals and teams efficiently manage their tasks and projects. It offers a comprehensive set of features including user authentication, task creation, updating, deletion, and filtering by completion status. The application is built using modern web technologies such as React for the frontend, Redux for state management, and Redux Saga for handling asynchronous operations. It provides a smooth and responsive user experience, making it easy for users to stay organized and keep track of their tasks in real-time.

## Table of Contents
*[Title](#title)

*[Description](#description)
    
*[Installation](#installation)
    
*[Usage](#usage)
    
*[License](#license)
    
*[Contributors](#contributor)
    
*[Tests](#test)
    
*[Questions](#questions)

*[URL](#URL)
    

## Installation

npm start

## Usage

Task Manager is a powerful and user-friendly web application designed to help individuals and teams efficiently manage their tasks and projects

## Contributors
N/A

## License
[![License: The_Unlicense](https://img.shields.io/badge/License-The_Unlicense-brightgreen.svg)](https://opensource.org/licenses/The_Unlicense)




## badges

![JavaScript:](https://img.shields.io/badge/JavaScript-71%%25-blue)
             ![HTML:](https://img.shields.io/badge/HTML-4.6%%25-red)
             ![CSS:](https://img.shields.io/badge/CSS-24.4%%25-purple)

<p align='center'>
<a href='https://github.com/https://github.com/fordefam12/Task Manager'><img src='./'c:/Users/forde/Downloads/qr-code (20).png'' width="60%"></a>
</p>
<p align='center'>
<a><img src="https://github-readme-stats.vercel.app/api?username=https://github.com/fordefam12&show_icons=true&theme=transparent" alt="https://github.com/fordefam12's github stats"></a>
<a><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=https://github.com/fordefam12&layout=compact" height ="20%" width= "27%"></a>
</p>


## Tests
N/A


## Questions
Any questions about this project please send me a message on *https://github.com/https://github.com/fordefam12 or email me at [Fordefam12@gmail.com]

## URL
  
<p align='center'>
<a href='https://serene-sea-98817-31cd6b171e7f.herokuapp.com/'>
CLICK QR CODE for deploy link
// <img src='./src/images/qr-code'c: './src/images/qr-code' (20).png' width="25%"></a>
</p>

## Screenshots

