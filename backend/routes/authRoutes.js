import express from 'express'
import loginValidation from '../middleware/validation/loginValidation.js'
import registerValidation from '../middleware/validation/registerValidation.js'
import { register,login } from '../controllers/authController.js'
const router = express.Router()
router.post('/register',registerValidation,register)
router.post('/login',loginValidation,login)
export default router