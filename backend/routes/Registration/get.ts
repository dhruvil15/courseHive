import { Request, Response } from 'express'
import { UserRegistration } from '../../models'
import { route } from '.'

route.get('/:email', async (req: Request, res: Response) => {
  const userEmail = req.params

  if(!userEmail) throw new Error("Please provide a valid email")
  const user = await UserRegistration.findOne({userEmail})

  res.json({
    user,
    status: 'ok'
  })
})