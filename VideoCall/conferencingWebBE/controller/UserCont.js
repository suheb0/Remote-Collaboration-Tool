const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const LoginData = require('../models/LoginData')
require('dotenv').config()
const client = new OAuth2Client(process.env.CLIENT_ID);
const Clientid = "500980884746-pmbtka925mio2j246jp81j60ihmd91il.apps.googleusercontent.com"
// CLIENT_ID = '500980884746-pmbtka925mio2j246jp81j60ihmd91il.apps.googleusercontent.com';
const jwtSecret = 'nLz6zNf6YQ5L6EdfF8J7Dd6wD4G8k8Z9d2iQ1fT9U6U='

const AuthUser = async (req, res) =>{
     
        const { token } = req.body;
           console.log("token",token)
           const decoded = jwt.decode(token);
           console.log("Decoded Token:", decoded);
          { console.log("Decoded Token:", decoded);}
           
           
      
        try {
          // Verify the Google token
          const ticket = await client.verifyIdToken({
            idToken:token,
            audience: Clientid,
          });
          



          const payload = ticket.getPayload();
          const userId = payload.sub;
          const existingUser = await LoginData.findOne({ userId });

          if (!existingUser) {
            // If the user doesn't exist, create a new user
            const newLogin = new LoginData({
              userId: payload.sub, // Google User ID
              email: payload.email,
              name: payload.name,
            //   picture: payload.picture,
            });
            await newLogin.save(); // Save the new user to the database
            } else {
            // If the user exists, you can update their info if needed
            existingUser.email = payload.email;
            existingUser.name = payload.name;
            existingUser.picture = payload.picture;
            existingUser.updatedAt = new Date();

            await existingUser.save(); // Update the existing user in the database
            }


      
          // Generate a JWT token
          const jwtToken = jwt.sign({ userId }, jwtSecret, { expiresIn: '1h' });
      
          res.json({ token: jwtToken });}
         catch (error) {
          console.error('Error verifying Google token:', error);
          res.status(401).json({ error: 'Invalid token' });
        }
      
    }

// const UserData = async(req,res)=>{

// }
module.exports = {AuthUser}