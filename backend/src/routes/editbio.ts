import {authMiddleware} from '../middleware/auth';
import { Router } from 'express';

import {updatebio} from '../controllers/editbiocontroller'; 
const editbiorouter = Router()
editbiorouter.post('/editbio', authMiddleware, updatebio);

export default editbiorouter
