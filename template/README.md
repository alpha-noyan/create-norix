# My App

## Getting Started

npm install
npm run dev

## Environment Variables

PORT=__PORT__
NODE_ENV=development
DB_STRING=__DB_URI__
DB_PASSWORD=__DB_PASSWORD__
DB_NAME=__DB_NAME__
JWT_SECRET=__JWT_SECRET__
JWT_EXPIRES_IN=7d
FRONTEND_URL=__FRONTEND_URL__
JWT_RESET_PASSWORD_EXPIRES_IN=10m
EMAIL_USER=__EMAIL_USER__
EMAIL_PASS=__EMAIL_PASS__

## Folder Structure

my-app/
│
├── config/
├── controllers/
├── models/
├── routes/
├── utils/
├── .env
|-- mainRoutes.js
|-- .env.example
|-- .gitignore
├── app.js
├── package.json
└── README.md

## Available APIs

- Register
- Login
- Forgot Password
- Reset Password