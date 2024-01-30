const {User} =require('../../DB_connection');
const bcrypt = require('bcrypt');

const addNewUser = async (req, res)=> {
    const { email, password,user_name, user_lastname } = req.body;
   // return res.send(email);
  
    if (!email || !password || !user_name || !user_lastname) {
      return res.status(400).send(`Empty's fields, email: ${req.body.email} or password:${password} or name:${user_name} or lastname:${user_lastname}`); 
    }
  
    try {
      const saltRounds =10;
      const hashedPassword = await bcrypt.hash(password,saltRounds);
      if(!hashedPassword) res.status(500).res(`Error with hashed password ${hashedPassword}`);

      const user = await User.create({
        id:null,
        email, 
        user_name,
        user_lastname,
        password: hashedPassword
      });
  
      return res.status(201).json(user);
  
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  
  module.exports = { addNewUser };
