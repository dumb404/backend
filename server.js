
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const User = require('./models/user');
const Admin = require('./models/admin');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.post('/register-user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.send('User Registered Successfully');
    } catch (err) {
        res.status(500).send('Error registering user');
    }
});

app.post('/register-admin', async (req, res) => {
    try {
        const newAdmin = new Admin(req.body);
        await newAdmin.save();
        res.send('Admin Registered Successfully');
    } catch (err) {
        res.status(500).send('Error registering admin');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
