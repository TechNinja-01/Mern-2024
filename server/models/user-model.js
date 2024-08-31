const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
    },
    Phone: {
        type: String,
        require: true,
    },
    Password: {
        type: String,
        require: true,
    },
    IsAdmin: {
        type:Boolean,
        default:false,
    },

});

  const User = new mongoose.model("User", userSchema);

//   secure the password with bcrypt
userSchema.pre("save", async function(){
    const user = this;

    if(!user.isModified("Password")) {
        next();
    }

    try {
      const saltRound = await bcryt.gensalt(10);
      const hash_password = await bcryt.hash(user.password, saltRound);
      user.password = hash_password;
    } catch (error) {
        next(error);
    }

});
  
//   const testDocument = new ExampleModel({name: 'Harsh', age: 20});
//   testDocument.save().then(() => console.log('Document saved successfully'));

  module.exports= User;