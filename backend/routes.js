const express = require('express');
const router = express.Router();
const User = require("./Modal/Users");
const fs = require('fs');
const path = require('path')
const multer  = require('multer');
const bcrypt = require('bcryptjs/dist/bcrypt');
const jwt = require("jsonwebtoken");

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine })

router.get("/", (req, res) => {

    res.status(200).send("Welcome 🙌 ");
});

router.post('/register', upload.single('profile_image'), async function (req, res, next) {
    try{

        const {name, password, email, role, gender,dob,country, state,city,address,zip_code, phone_code,
        phone_number, bio,profile_image} = req.body
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);
        if(!name && password && email && role && dob && country && state && city && zip_code && phone_code 
            && phone_number && profile_image){
                res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne( {email});

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        // Create user in our database
        const user = await User.create({name, password, email, role, gender,dob,country, state,city,address,zip_code, phone_code,
            phone_number, bio,profile_image});
        
        const token = jwt.sign(
            { user_id: user._id, email },
            'abc',
            {
                expiresIn: "2h",
            }
        );

        // return new user
        res.status(201).json({'user': user.email, 'token': token});
    }catch(e)
    {
        res.status(400).send({'Error': e});
    }
})

module.exports = router;