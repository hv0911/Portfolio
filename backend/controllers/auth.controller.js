const { User } = require('../models/db.config')
const bcrypt = require('bcrypt');
const { generateToken } = require('../util/jwt.util');
const { sendMail } = require('../middlewares/sendMail.middleware');


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      attributes: ['id', 'email', 'password', 'full_name'], // Include only necessary attributes
      where: { email: email }
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    const passwordMatches = await bcrypt.compare(password, user.dataValues.password);

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: 'Invalid password'
      });
    }

    const token = generateToken(user.dataValues.email);

    const cookieOptions = {
      expires: new Date(Date.now() + 120000), // 2 minutes
      httpOnly: true
    };

    res.status(200).cookie('token', token, cookieOptions).json({
      success: true,
      message: `Hi ${user.dataValues.full_name.split(' ')[0]}`
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

exports.logout = (req, res) => {
  try {
    // Clear the token by setting an expired date in the past
    const cookieOptions = {
      expires: new Date(0),
      httpOnly: true
    };

    res.status(200).cookie('token', '', cookieOptions).json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};


exports.contactMe = async (req, res) => {

  try {

    const { name, email, message } = req.body;

    const userMessage = {
      name: name,
      email: email,
      message: `Hi I am ${name} and my email is ${email}. 
      ${message}
      `
    }

    await sendMail(userMessage);

    return res.status(200).json({
      success: true,
      message: "Message send Successfully!"
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      message: 'Internal server error'
    });
  }

}
