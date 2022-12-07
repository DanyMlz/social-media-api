const { userModel } = require('../models/User');
const bcrypt = require('bcrypt');


const register = async (req, res) => {
    const { username, firstname, lastname, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        username,
        firstname,
        lastname,
        password : hashedPassword
    })

    try{

        await newUser.save();
        res.status(200).json({
            ok: true,
            newUser
        })


    }catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: err.message
        });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    try{

        const user = await userModel.findOne({username});

        if(user){
            const validity = await bcrypt.compare(password, user.password);

            validity ? res.status(200).json({
                ok: true,
                user
            }) : res.status(400).json({
                ok: false,
                msg: 'wrong password'
            })

        }else{
            res.status(404).json({
                ok: false,
                msg: 'user doesnt exists'
            })
        }


    }catch(err){
        console.log(err.message);
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}

module.exports = {
    register,
    login
};