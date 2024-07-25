import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const  Register = async(req, res) => {
    try{
        const {name, email , password} = req.body.userData;
        if(!name || !email || !password){
            return res.json({success : false , error : "All fields are mandatory!!"});
        }

        const isEmailExist = await User.findOne({email : email}); 
        //                             1email :static || 2email:"akshay@gmail.com"

        if(isEmailExist){
            return res.json({success : false , error : "Email already exists, please use another one"});
        }

        const encryptedPassword = await bcrypt.hash(password ,10);

        const newUser = User({
            name : name,
            email : email,
            password : encryptedPassword
        });
        const responseFromDB = await newUser.save();

        return res.json({
            isEmailExist,
            encryptedPassword,
            success : true, 
            responseFromDB , 
            message : "Registration successful !"
        });
    }catch(error){
        console.log(error, "Error");
        return res.json({error : error , success : false})
    }
};

export const  Login = (req, res) => {
    res.send('Login completed');
};




