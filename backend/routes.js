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

const upload = multer({ storage: fileStorageEngine }).fields([{name: 'profile_image'}, 
{name: 'education_document'}, {name: 'exp_document'}])

router.get("/", (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});
//create a user
router.post('/register', upload ,async function (req, res, next) {
    try{

        const {name, password, email, role, gender,dob,country, state,city,address,zip_code,
            phone_code,phone_number, bio} = req.body;
        const {education, institute, year,education_description} = req.body;;
        const {organization,designation,exp_year,exp_description} = req.body
        const {teaching_exp, language_preference,mode_of_teaching,fees_from,fees_to,fees_currency} = req.body
        
        const {profile_image, education_document,exp_document} = req.files;

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
        const user = await User.create({name, password: encryptedPassword, email, role, gender,dob,country, 
            state,city,address,zip_code, phone_code,phone_number, bio,profile_image,
            education,institute, year,education_description,education_document,
            organization,designation,exp_year,exp_description,exp_document,
            teaching_exp, language_preference,mode_of_teaching,fees_from,fees_to,fees_currency});
        
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN,
            {
                expiresIn: "2h",
            }
        );
        // return new user
        res.status(201).json({'name': user.email, 'role': user.role, 'token': token});
    }catch(e)
    {
        res.status(400).send({'Error': e});
    }
})
//get all the role based on teacher
router.get('/get_teacher_list', async(req, res)=>{
    try{
        const teacher = await User.find({role: 'teacher'});
        let arr = [];
        teacher.map((v)=>{
            arr.push({id: v._id, name: v.name, gender: v.gender,country: v.country,
            state: v.state, city:v.city, bio: v.bio, mode_of_teaching: v.mode_of_teaching,
            fees_from: v.fees_from, fees_to: v.fees_to,fees_currency: v.fees_currency, createdAt:v.createdAt,
            language_preference: v.language_preference, profile_image: v.profile_image[0].path
        })
        })
        res.status(200).json(arr);
    }catch(err){
        res.status(400).json(err);
    }
})
//check if the email exists or not
router.post('/check_email', async (req, res) => {
    const { email } = req.body;
    console.log('email', email);
    const oldUser = await User.findOne( {email});
    if (oldUser) {
        return res.status(400).send("Email already Exists");
    }
    res.status(201).json('email no occupied');
})

//give user rating
router.post('/rating', async (req, res) => {

})


module.exports = router;