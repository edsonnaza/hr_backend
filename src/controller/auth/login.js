const {User} =require('../../DB_connection');
const bcrypt = require('bcrypt');
 const login= async (req, res) =>{
    const { email, password } = req.query;
     
    if (!email || !password) {
      return res.status(400).json(`Please provide and email:${email} and password.`);
    }
  
    try {

      const user = await User.findOne({ where: { email }});
  
      if (!user) {
        return res.status(404).json(`Email not registered: ${email}!`);
      }
  
   
      
      const match = await bcrypt.compare(password, user.password);

      if(!match){
        return res.status(400).json('Invalid password');
      }

     

      return res.json({email:user.email,user_name:user.user_name,user_lastname:user.user_lastname, isLogin: true });
  
    } catch (error) {
      return res.status(500).json({ error: error.message });

    }
  }
  
  module.exports = { login };