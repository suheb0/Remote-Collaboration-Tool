const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const connectDB = require('./db/connect')

const userRoute = require('./router/userRoute')
require('dotenv').config()

const app = express();
const port = 5000;

// Replace with your Google OAuth Client ID
// const JWT_SECRET = 'nLz6zNf6YQ5L6EdfF8J7Dd6wD4G8k8Z9d2iQ1fT9U6U='; // Use a strong secret key



app.use(cors());
app.use(bodyParser.json());

app.use('/',userRoute);

app.listen(port, async () => {
  await connectDB(process.env.MONGO_URL)
  console.log(`Server running at http://localhost:${port}`);
});
