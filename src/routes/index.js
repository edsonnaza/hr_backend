const {Router} = require('express');
const {login} = require('../controller/auth/login');
const {addNewUser} = require('../controller/auth/addNewUser');
const {User} = require('../DB_connection');
const { getAllUsers } = require('../controller/auth/getAllUsers');
 
const router = Router();

router.get('/', function(req,res){
    res.send('Wellcome to Human Resources World Managment');
});

// Login Route
router.get('/login',login);
router.post('/user', addNewUser);
router.get('/user/pagination',getAllUsers);



module.exports = router;