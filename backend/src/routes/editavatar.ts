import {authMiddleware} from '../middleware/auth';
import { Router } from 'express';
import upload from '../config/multer'
import {updateavatar} from '../controllers/editavatarcontroller';
const editavatarrouter = Router()
//remember to add name of input as "avatar" in frontend
editavatarrouter.post('/editavatar', authMiddleware,upload.single('avatar'), updateavatar);


export default editavatarrouter