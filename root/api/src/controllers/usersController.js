const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../models/User');
// Depends on if i want the user to be able to delete their profile - should i have this function?
// const Journal = require('../models/Journal');
// const Calendar = require('../models/Calendar');


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

        await user.save()

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

// Delete user - DELETE
// exports.delete_user = async (req, res) => {
//     try {
//         // remove journal
//         await Journal.findByIdAndRemove({ user: req.user.id });
//         // remove calendar
//         await Calendar.findByIdAndRemove({ user: req.user.id });
//         // remove user
//         await User.findOneAndRemove({ _id: req.user.id });

//         res.json({ msg: 'User deleted' })
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send('Server error');
//     }
// };
    
