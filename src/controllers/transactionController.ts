import { Request, Response } from 'express'
import * as transactionService from '../services/transactionService'

export const getAllTransactions = async (req: Request, res: Response): Promise<void> => {
  try {
    const transactions = await transactionService.getAllTransactions();
    res.json(transactions)
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch transactions with error ${error}` });
  }
}

export const createTransaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const transaction = await transactionService.createTransaction(req.body)
    res.json(transaction)
  } catch (error) {
    res.status(500).json({ error: `Failed to create a transaction with error ${error}` });
  }
}