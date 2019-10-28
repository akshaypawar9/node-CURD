const express = require('express');
const router = express.Router();

const employeeController=require('../controller/employeeController');

router.post('/createEmployee', employeeController.employeeAdd);
router.get('/getAll', employeeController.getAllEmployee);

module.exports = router;