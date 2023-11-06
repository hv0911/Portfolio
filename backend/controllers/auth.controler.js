const { User } = require('../models/db.config')
const bcrypt = require('bcrypt');
const { generateToken } = require('../util/jwt.util');


// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         // let user = await User.findOne()
//         const user = await User.findOne({
//             attributes: ['id', 'email', 'password', 'full_name' /* other attributes */],
//             where: { email: email }
//         });
//         const valid = bcrypt.compareSync(password, user.dataValues.password);
//         if (!user || (user.email != email) || !valid) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Invalid User or Password"
//             })
//         }
//         let token = generateToken(user.dataValues.email);

//         let options = { expires: new Date(Date.now() + 2 * 60 * 1000), httpOnly: true }

//         res.status(201)
//             .cookie("token", token, options)
//             .json({
//                 success: true,
//                 message: "Hi " + user.dataValues.full_name.split(' ')[0]
//             })

//     } catch (error) {
//         console.log(error)
//         res.status(501).json({
//             success: false,
//             error: error
//         })
//     }
// }


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
  
      // Generate a token
      const token = generateToken(user.dataValues.email);
  
      // Set cookie options (you can customize these as needed)
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