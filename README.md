Project Name: React Assessment App

This project is a React application with a Node.js backend that handles API requests for assessment tasks.

Frontend (React Application)

The React application consists of several components:

App.js: The main application component that sets up routing using BrowserRouter and Switch. It defines protected routes using the ProtectedRoute component.
components/AssessmentTasks.js: This component allows users to create new assessment tasks. It uses the useForm hook from react-hook-form for form validation and useState hook to manage the list of tasks. Data is submitted to the Node.js server using fetch API.
components/Header.js: This component renders the header section of the application, including website logo, navigation links, and a logout button. It utilizes icons from react-icons library.
components/Home.js: This component displays the home page content, including a welcome message, description, and a button to navigate to assessment tasks. It checks for a JWT token in cookies and redirects to the login page if not found.
components/LoginForm.js: This component handles user login functionality. It allows users to enter their username and password and submits data to the external API (https://apis.ccbp.in/login). Upon successful login, it stores the JWT token in cookies and redirects to the home page.
components/NotFound.js: This component renders a "Not Found" page when a user tries to access a non-existent route.
components/ProtectedRoute.js: This component is a custom route wrapper that checks for the presence of a JWT token in cookies. If the token is not found, it redirects the user to the login page.
Backend (Node.js Server)

The Node.js server is built with Express.js and handles API requests related to assessment tasks.

Server.js: This file defines the server logic. It sets up the port and middleware for parsing JSON bodies. It uses an in-memory array to store tasks.
API Endpoints:
GET /assessment: This endpoint retrieves all assessment tasks from the in-memory array and sends them back as a JSON response.
POST /assessment: This endpoint allows creating a new assessment task. It receives a JSON body with Name, taskType, and status properties. It validates the required fields and adds the new task to the in-memory array. Upon successful creation, it sends a success message with the newly created task details.
External API:

The login functionality uses an external API at https://apis.ccbp.in/login. This API is not included in this project and needs to be integrated separately as per their documentation.

Running the Application:

Clone the project repository.
Install dependencies: npm install
Start the server: npm start
Access the application in your browser at http://localhost:3000
Note:

This is a basic example and can be extended to include features like user authentication with the external API, storing tasks in a database instead of in-memory, adding functionalities to edit or delete tasks, etc.