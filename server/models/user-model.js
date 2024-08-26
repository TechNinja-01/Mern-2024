const mongoose = require("mongoose");
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

})

  const User = new mongoose.model("User", userSchema);
  
//   const testDocument = new ExampleModel({name: 'Harsh', age: 20});
//   testDocument.save().then(() => console.log('Document saved successfully'));

  module.exports= User;