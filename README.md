# REAL-TIME-COLLABORATION-TOOL
"COMPANY": CODTECH IT SOLUTIONS
"NAME": RESHU SINGH
"INTERN ID": CT04DH1157
"DOMAIN": MERN STACK WEB DEVELOPEMENT
"DURATION": 4 WEEKS
"MENTOR": NEELA SANTOSH

This project is a real-time collaborative text editor that allows multiple users to simultaneously edit and view changes in a shared document. It uses the MERN stack—MongoDB, Express.js, React.js, and Node.js—for full-stack development, and leverages Socket.IO (a WebSocket abstraction) to enable real-time communication between connected clients. The goal of this project is to create a simple and efficient collaborative editing environment that updates the content across users instantly, without requiring manual refresh or save actions.

Key Technologies Used
React.js (Frontend):
The user interface is built using React, a popular JavaScript library for building responsive and dynamic web applications. React hooks like useState, useEffect, and useRef are used for state management and to handle real-time events smoothly.

Node.js and Express.js (Backend):
The backend server is developed using Node.js with the Express.js framework. It sets up a lightweight server that can handle HTTP requests as well as WebSocket communication. Express also handles CORS (Cross-Origin Resource Sharing) settings to allow the frontend and backend to interact during development.

Socket.IO (WebSocket Communication):
Socket.IO is used to create persistent, bidirectional connections between the server and all connected clients. It enables real-time features like broadcasting changes made by one user to all other users. Events such as send-changes and receive-changes are implemented to send and receive document updates.

MongoDB (Optional Future Enhancement):
Although not yet fully integrated, MongoDB is intended for storing and retrieving saved versions of documents. This can allow features like persistent document history, user-specific files, and auto-saving.

How It Works
When a user types in the editor, their changes are sent to the server using the send-changes event through a WebSocket connection. The server then broadcasts those changes to all other connected clients using the receive-changes event. This ensures that every user sees the same content in near real time, creating a live collaborative environment.

The front end includes a text area for editing, styled simply for clarity. As soon as one user types something, all other users' editors update within milliseconds to reflect the changes. This simulates a Google Docs-like collaborative experience, albeit in a simpler form.

The project currently supports basic text editing and broadcasting. Additional functionality like user authentication, document versioning, room-based editing, and a visual whiteboard mode can be added in future iterations.

Use Cases

Team collaboration on documents
Real-time note-taking in classrooms or meetings
Pair programming or code review sessions
Online content editing platforms

#OUTPUT
<img width="1412" height="793" alt="Image" src="https://github.com/user-attachments/assets/6bf11054-d58b-407f-9f9c-f373ff050252" />
