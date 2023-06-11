const User = require("../models/user")
var jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({
      name,
      isVolunteer,
      email,
      password,
      mobileNumber,
      bloodGroup,
      height,
      weight,
      place,
      appointments: [], // Setting appointments default to an empty array
    });
    
    const savedUser = await newUser.save();

    res.status(201).json({ message: "Signup successful", user: savedUser });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Signup failed" });
  }
};

exports.signin = (req, res) => {
  const {email, password} = req.body

  User.findOne({email}, (err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "Email was not found"
      })
    }

    if(!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match"
      })
    }

    // Create token
    const token = jwt.sign({_id: user._id}, process.env.SECRET)

    // Put token in cookie
    res.cookie('token', token, {expire: new Date() + 1})

    // Send response
    const {_id, name, email} = user
    return res.json({
      token,
      user: {
        _id,
        name,
        email
      }
    })
    
  })
}

exports.signout = (req, res) => {
  res.clearCookie("token")
  return res.json({
    message: "User siginout successful"
  })
}

exports.toggleVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.isVolunteer = !user.isVolunteer; // Toggle the isVolunteer status
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.appointments = async (req, res) => {
  const { userId, donorId, date, status } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const appointment = { donorId, date, status };
    user.appointments.push(appointment);

    await user.save();

    res.status(200).json({ message: 'Appointment added successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.changeVolunteer