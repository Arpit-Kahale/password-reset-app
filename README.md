# Password Reset App (MERN Stack)

## Live Demo
Frontend: https://password-reset-app-virid.vercel.app  
Backend: https://password-reset-app-ak8k.onrender.com  

## About
This is a full-stack Password Reset Authentication System built using the MERN stack. It supports user registration, login,
JWT authentication, and secure password reset via email link.

## Features
- User Registration
- User Login (JWT Authentication)
- Forgot Password (Email Reset Link)
- Reset Password with Token
- Password Hashing (bcrypt)
- Protected API Routes
- CORS configured for production
- Fully deployed frontend + backend

## Tech Stack
Frontend: React.js, Axios, React Router  
Backend: Node.js, Express.js  
Database: MongoDB (Mongoose)  
Auth: JWT, bcrypt  
Email: Nodemailer  

## Flow
Register → Login → Forgot Password → Email Link → Reset Password → Login Again

## API Endpoints
POST /api/users/register  
POST /api/users/login  
POST /api/users/forgot-password  
POST /api/users/reset-password/:token  

## Environment Variables
MONGO_URI=your_mongo_uri  
JWT_SECRET=your_secret  
EMAIL=your_email  
PASS=your_email_app_password  
CLIENT_URL=https://password-reset-app-virid.vercel.app  

## Deployment
Frontend: Vercel  
Backend: Render  
Database: MongoDB Atlas  

## Author
Arpit Kahale
