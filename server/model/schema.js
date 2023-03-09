const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  liked: {
    type: Number,
  },
  post: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  cnfpassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("USER", userSchema);

module.exports = User;

// {
//   "name":"yana",
//     "email":"pendelton@gmail.com",
//     "phone": 7823567309,
//     "liked": 23,
//     "password": "2mhdvbhd23",
//     "cnfpassword":"2mhdvbhd23"
// }