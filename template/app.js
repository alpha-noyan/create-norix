const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const mainRoutes = require('./mainRoutes');
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(express.json());

connectDB();

app.use('/api', mainRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});