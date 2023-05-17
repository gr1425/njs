const {Router}= require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/users');

const router=Router();

router.get('/',usuariosGet)
router.post('/',usuariosPost)
router.put('/:id',usuariosPut)
router.delete('/:id',usuariosDelete)
router.patch('/:id',usuariosPatch)

module.exports=router;
