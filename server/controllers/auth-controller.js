const User = require("../models/user-model");

const home = async (req, res) => {
    try {
      res.status(200).json({ msg: "Welcome to our home page" });
    } catch (error) {
      console.log(error);
    }
  };
  
  const register = async (req, res) => {
    try {
      // const data = req.body;
      console.log(req.body);
      const { username, email, phone, password } = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (userExist) {
        return res.status(400).json({ msg: "Email already exists" });
      }
      
      
      const userCreated = await User.create({ username, email, phone, password: hash_password });
      
  
    
      res.status(201).json({ msg: userCreated });
      
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error:" + error.message });
    }
  };
  
  module.exports = { home, register };

