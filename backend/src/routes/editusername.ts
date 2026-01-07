
import {authMiddleware} from '../middleware/auth';
import { Router } from 'express';
import {updateusername} from "../controllers/editusernamecontroller";
const editusernamerouter = Router()
editusernamerouter.post('/editusername',authMiddleware,updateusername)

export default editusernamerouter