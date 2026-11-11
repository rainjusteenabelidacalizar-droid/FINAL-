const express=require('express')
const router=express.Router();
const userController=require('../controllers/userController');


//endpoint
// app.get('/enrollment', getAllUsers);
// app.post('/enrollment', createUser);
router.get('/enrollment',userController.getAllUsers);
router.post('/enrollment',userController.createUser);
router.put('/enrollment',userController.updateUser);
//router.delete('/users',userController.deleteUser)
module.exports = router;
