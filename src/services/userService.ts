import * as bc from 'bcrypt'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const createUser = async (data: {name:string; email: string; password: string}) => {
  const hashedPassword = await bc.hash(data.password, 10)
  return await prisma.user.create({ data: {...data, passwordHash: hashedPassword} })
}

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({where: { id }})
}

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({where: {email}})
}