# Wanderlust: Travel Listing Web Application

## Overview
Wanderlust is a full-stack travel listing web application that allows users to create, edit, delete, and review travel destinations.  
The application follows MVC architecture and implements RESTful routing with session-based authentication.

The project demonstrates backend development concepts including CRUD operations, cloud image storage, structured routing, and deployment.

---

## Developer
Yash Chaudhari

---

## Features

### Core Features
- User Registration and Login
- Create, Edit, and Delete Listings
- Add and Delete Reviews
- Image Upload for Listings
- Flash Messages and Error Handling

### Authentication & Authorization
- Session-based authentication
- Login required for creating listings
- Authorization checks for editing and deleting content

### Database & Cloud Integration
- MongoDB Atlas for cloud database management
- Mongoose schema design and validation
- Cloudinary integration for image storage

### UI & Styling
- Implemented UI components using Bootstrap
- Structured layout using EJS templates

### Deployment
- Deployed on Render
- Environment variables managed using `.env`

Live Website: https://wanderlust-by-yash.onrender.com  
GitHub Repository: https://github.com/YashChaudhari1123/MajorProject  

---

## Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Frontend
- EJS (Templating Engine)
- HTML
- CSS
- JavaScript
- Bootstrap

### Cloud Services
- Cloudinary

### Deployment
- Render

---

## Project Architecture

The project follows the MVC (Model-View-Controller) architecture:

- Models → Database schemas  
- Views → EJS templates  
- Controllers → Business logic  
- Routes → RESTful routing  

---

## Installation

### Prerequisites
- Node.js
- MongoDB Atlas account
- Cloudinary account

### Setup

1. Clone the repository
```
git clone https://github.com/YashChaudhari1123/MajorProject.git
cd MajorProject
```

2. Install dependencies
```
npm install
```

3. Create a `.env` file and add:
```
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
ATLAS_DB_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

4. Run the application
```
node app.js
```
or
```
nodemon app.js
```

Application runs at:
http://localhost:8080

---

## Learning Outcomes

- Built a full-stack application using Node.js and Express
- Designed RESTful APIs
- Implemented MVC architecture
- Integrated third-party cloud services (Cloudinary)
- Used Bootstrap for UI styling
- Deployed production-ready application on Render
