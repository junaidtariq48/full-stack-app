import express from 'express';
import itemController from '../controllers/itemController';

const router = express.Router();

router.get('/', itemController.getItems);
router.post('/add', itemController.addItem);
router.delete('/delete/:id', itemController.deleteItem)

export default router;
