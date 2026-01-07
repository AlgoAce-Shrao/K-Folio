import { Router } from 'express';
import { getProfile, updateProfile, deleteProfile } from '../controllers/userController';
import { authMiddleware } from '../middleware/auth';
import editusernamerouter from '../routes/editusername';
import editbiorouter from '../routes/editbio';
import editavatarrouter from '../routes/editavatar';

const router = Router();

router.get('/me', authMiddleware, getProfile);
router.patch('/me', authMiddleware, updateProfile);
router.delete('/me', authMiddleware, deleteProfile);
router.post('/editusername', editusernamerouter);
router.post('/editbio', editbiorouter);
router.post('/editavatar', editavatarrouter);

export default router;

