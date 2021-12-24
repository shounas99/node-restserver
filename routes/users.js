//Desestructurar router
const {Router} = require('express');
const { usersGet, 
    usersPut, 
    usersPost, 
    usersDelete, 
    usersPatch } = require('../controllers/users_controller');
const router = Router();

//get
router.get('/', usersGet);
//put :is -> porque espero el id
router.put('/:id', usersPut);
//post
router.post('/', usersPost);
//patch
router.patch('/', usersPatch);
//delete
router.delete('/', usersDelete);

module.exports= router;