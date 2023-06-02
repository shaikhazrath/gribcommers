import User from "../model/UserModel.js";
import  jwt  from "jsonwebtoken";

const generateToken = (userId,role) => {
  return jwt.sign({ userId, role }, process.env.JWT, { expiresIn: '1h' });
};


export const SignUp = (req, res) => {
  const { name, email, password, role } = req.body;
    // Check if any of the required values are missing
    if (!name || !email || !password || !role) {
      const response = {
        success: false,
        message: 'Missing required fields',
      };
      return res.status(400).json(response);
    }
  

  // Check if the user already exists with the provided email
  User.findOne({ email })
    .then((user) => {
      if (user) {
        // User already exists
        const response = {
          success: false,
          message: 'A user with this email already exists',
        };
        return res.status(409).json(response);
      }
      // Check if the userType is valid (either 'vendor' or 'customer')
      if (role !== 'vendor' && role !== 'customer') {
        const response = {
          success: false,
          message: 'Invalid userType. Only "vendor" or "customer" are allowed.',
        };
        return res.status(400).json(response);
      }
      // Create a new user with the provided userType
      const newUser = new User({
        name,
        email,
        password,
        role
      });

      newUser
        .save()
        .then((savedUser) => {
          const token = generateToken(savedUser._id,savedUser.role);

          const response = {
            success: true,
            message: 'User signup successful',
            data: {
              user: savedUser,
              token,
            },
          };

          res.status(200).json(response);
        })
        .catch((error) => {
          console.error('Error saving user:', error);
          const response = {
            success: false,
            message: 'An error occurred while saving the user',
          };
          res.status(500).json(response);
        });
    })
    .catch((error) => {
      console.error('Error checking existing user:', error);
      const response = {
        success: false,
        message: 'An error occurred while checking existing user',
      };
      res.status(500).json(response);
    });
};


  export const SignIn = (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user exists in the database
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          // User does not exist
          const response = {
            success: false,
            message: 'Invalid email or password',
          };
          return res.status(401).json(response);
        }
  
        // Compare the provided password with the stored password
        if (password !== user.password) {
          // Incorrect password
          const response = {
            success: false,
            message: 'Invalid email or password',
          };
          return res.status(401).json(response);
        }
  
        const token = generateToken(user._id);
        const response = {
          success: true,
          message: 'User sign-in successful',
          data: {
            user,
            token
          },
        };
       res.status(200).json(response);
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        const response = {
          success: false,
          message: 'An error occurred while signing in',
        };
        res.status(500).json(response);
      });
  };

  export const logout = (req, res) => {
    // Clear the authentication cookie
    res.clearCookie('token');
  
    // Redirect or send a response indicating successful logout
    res.json({ success: true, message: 'Logout successful' });
  };