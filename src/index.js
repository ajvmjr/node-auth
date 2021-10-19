const express = require('express');

const userRoutes = require('./app/api/routes/user');
const authRoutes = require('./app/api/routes/auth');

const app = express();

app.use(express.json());
userRoutes(app);
authRoutes(app);

app.listen(3000, () => 'Server is on');
