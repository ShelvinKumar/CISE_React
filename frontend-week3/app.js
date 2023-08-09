const express = require('express');
const connectDB = require('./Config/db');
const path = require("path")
procress.env['NODE_CONFIG_DIR'] = path.join(path.resolve("./"),"config/")

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));