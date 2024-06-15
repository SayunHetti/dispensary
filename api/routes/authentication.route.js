import express from 'express';
import {  register} from '../controllers/authentication.controller.js';

const router = express.Router();

router.post('/register', register);

// router.post('/signin', signin);signin

export default router;