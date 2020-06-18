const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../models/User');
const Dashboard = require('../models/Dashboard');

// Register User - POST
exports.register = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        user = new User({
            name,
            email,
            password
        });
        // 10 is the 'rounds'
        const salt = await bcrypt.genSalt(10);
        
        // Encrypt password - bcrypt
        // This takes in a plain text password
        user.password = await bcrypt.hash(password, salt);
        
        // Automatically creating dashboard for user on creation
        const dashboard = new Dashboard({
            user: user.id
        });
        
        await user.save();
        await dashboard.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtToken'),
            { expiresIn: 3600 },
            (err, token) => {
                if(err) throw err;
                res.json({ token })
            }
        );
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
};
