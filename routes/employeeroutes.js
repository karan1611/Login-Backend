const express = require ('express')

const router = express.Router()
//Router is a middleware and routing System

const employeeControler      = require('../controllers/employeeControler')
const authenticate           = require('../middlewear/authenticate')

router.get('/',authenticate,employeeControler.index)
router.post('/show',employeeControler.show)
router.post('/store',employeeControler.store)
router.post('/update',employeeControler.update)
router.post('/delete',employeeControler.destroy)

module.exports = router
