import { Request, Response } from 'express'
import { UserRegistration } from '../../models'
import { route } from '.'

route.post('/', async (req: Request, res: Response) => {
  const user = req.user

  const post = await UserRegistration.create({ ...req.body, user: user._id })

  res.json({
    post,
    status: 'ok'
  })
})