const user = require("../models/user");

const register = async(req, res) => {
    try{
        const data = req.body;
        console.log('data: ', data);
        if(!data){
            return res.send("no data")
        };
        const newUser = new user(data);
        await newUser.save();
        return res.send("User created")
    }
    catch(err){
        console.log(err)
    }
};
const getUser = async(req, res) => {
    try{
        const data = await user.find();
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
};
const editUser = async(req, res) => {
    try{
        const id = req.params.id;
        const payload = req.ody.payload;
        console.log('payload: ', payload);
        if(!payload){
            return res.send("no data to edit")
        };
        const data = await user.findByIdAndUpdate(id, payload);
        await data.save();
        return res.send("User updated")
    }
    catch(err){
        console.log(err)
    }
};

const check = (req,res) => {
    console.log("check")
    res.send("check")
}


module.exports = {register, check, getUser, editUser};