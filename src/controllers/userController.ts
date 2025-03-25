import { Request, Response } from "express";
import * as userService from '../services/userService'

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...userWithoutHash } = user
    res.status(201).json(userWithoutHash)
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Invalid data' })
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserByEmail(req.params.email)
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordHash, ...userWithoutHash } = user
      res.json(userWithoutHash);
    } else {
      res.status(404).json({ error: 'User not found' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch user' })
  }
}