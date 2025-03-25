import {PrismaClient, Transaction} from '@prisma/client';
const prisma = new PrismaClient()

export const getAllTransactions = async ():Promise<Transaction[]> => prisma.transaction.findMany({ include : {category: true}});
export const createTransaction = async (data: Omit<Transaction, 'id'>): Promise<Transaction> => prisma.transaction.create({ data });
export const updateTransaction = async (id: number, data:Partial<Transaction>): Promise<Transaction> => prisma.transaction.update({ where: { id }, data });