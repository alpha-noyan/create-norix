# 🚀 Create Norix

A CLI tool to quickly scaffold a production-ready Express.js backend with authentication, MongoDB, and a clean project structure.

## ✨ Features

* Express.js project scaffolding
* MongoDB integration with Mongoose
* JWT Authentication
* User authentication module

  * Register
  * Login
  * Forgot Password
  * Reset Password
* Password hashing with bcrypt
* Email support using Nodemailer
* Environment variable configuration
* MVC project structure
* Ready-to-use development setup
* Configurable project metadata

## 📦 Installation

npm install -g create-norix

Or use it directly:
npx create-norix my-app


## 🚀 Usage
Create a new project:
create-norix my-app

Go into the project:
cd my-app

Install dependencies:
npm install

Start the development server:
npm run dev

## 📁 Project Structure

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

## ⚙️ Environment Variables

Configure the following variables in your `.env` file.

env
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


## 🔐 Authentication APIs

The generated project includes:

* User Registration
* User Login
* Forgot Password
* Reset Password

These APIs are ready to use and can be extended according to your application's requirements.

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Nodemailer
* dotenv

## 📌 Requirements

* Node.js 18+
* npm
* MongoDB Atlas or Local MongoDB

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the project and submit a pull request.

## 📄 License

MIT License.

---

Built with ❤️ to help developers kickstart their backend projects faster.
