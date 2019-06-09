const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
// connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// Set a static folder
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));
app.get('/register', (req, res) => res.render('register'));

app.get('/post', (req, res) => res.render('post'));

//Define Routes
// Pertain the /api/users to the / in routes/api/users
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
