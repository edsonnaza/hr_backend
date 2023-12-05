const {Router} = require('express');
const {login} = require('../controller/auth/login');
const {postUser} = require('../controller/auth/postUser');
const {User} = require('../DB_connection');
 
const router = Router();

router.get('/', function(req,res){
    res.send('Hello Human Resources World Managment');
});

module.exports = router;