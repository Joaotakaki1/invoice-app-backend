import { Router } from "express";
import * as transactionController from '../controllers/transactionController'
const router: Router = Router()
router.get('/', transactionController.getAllTransactions);
router.post('/', transactionController.createTransaction);
export default router;