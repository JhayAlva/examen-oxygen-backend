var express=require('express');
var router=express.Router();
var apiController=require('../../controllers/apiController');
router.post('/AgregarConversion',apiController.AgregarConversion);
router.get('/recuperarOperaciones',apiController.recuperarOperaciones);
router.post('/eliminarOperacion', apiController.borrarOperacion);
module.exports=router;