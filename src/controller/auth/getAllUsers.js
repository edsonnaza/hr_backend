const {User} =require('../../DB_connection');

const getAllUsers = async (req, res) => {
  
    const users = await User.findAll(req.query);
    
     res.json(users.length ? users : 'No users found');
  };

  module.exports = { getAllUsers };