import express from 'express';
import { test} from '../controllers/user.controller.js';
//import { verifyToken } from '../utils/verifyuser.js';
const router = express.Router();
router.get('/test', test);

//router.get('/getusers', verifyToken, getUsers);
export default router; 