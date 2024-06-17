# TourApp

## Overview

TourApp is a web application designed to help users discover and book exciting travel destinations. The application consists of two main parts: the frontend, built with React, and the backend, built with Node.js and MongoDB.

## Frontend

### Structure

The frontend is built using React. The main components are located in the `components` folder, and the assets (such as images) are stored in the `assets` folder.

### Folder Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Offer.jsx
│   │   └── Popular.jsx
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── main.css
├── package.json
└── README.md
```

### Components

- **Home.jsx**: The landing page of the application.
- **Navbar.jsx**: The navigation bar at the top of the page.
- **Offer.jsx**: Displays current travel offers.
- **Popular.jsx**: Shows popular travel destinations.
- **Footer.jsx**: The footer of the page.
- **Blog.jsx**: Section for travel blogs.
- **About.jsx**: Information about the application.

### Setup

1. **Install dependencies**:
    ```sh
    npm install
    ```

2. **Run the application**:
    ```sh
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Backend

### Structure

The backend is built using Node.js and MongoDB. The main files are `db.js`, `user.js`, and `app.js`. Configuration variables are stored in the `.env` file.

### Folder Structure

```
backend/
├── config/
│   └── db.js
├── models/
│   └── user.js
├── routes/
│   └── user.js
├── app.js
├── .env
├── package.json
└── README.md
```

### Files

- **db.js**: Contains the MongoDB connection setup.
- **user.js**: Defines the user model schema.
- **app.js**: Main entry point for the backend server, setting up routes and middleware.
- **.env**: Environment variables for sensitive data like database URI and server port.

### Setup

1. **Install dependencies**:
    ```sh
    npm install
    ```

2. **Setup environment variables**:
   Create a `.env` file in the root of the `backend` folder with the following variables:
    ```
    MONGODB_URI=your_mongodb_uri
    PORT=5000
    ```

3. **Run the server**:
    ```sh
    npm start
    ```

The backend server will be available at `http://localhost:5000`.

## Summary

TourApp combines a React-based frontend with a Node.js and MongoDB backend to create a seamless travel discovery experience. Follow the setup instructions for both the frontend and backend to get the application up and running.
