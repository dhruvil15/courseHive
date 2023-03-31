import { ObjectId, Schema, model } from 'mongoose'

export type UserTypeForRegistration = {
  _id: ObjectId
  name: string
  email: string
  institutionName: string
  password: string
}

export const UserRegistrationSchema = new Schema<UserTypeForRegistration>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    institutionName: { type: String, required: true},
    password: { type: String, required: true }
  },
  { timestamps: true }
)

export const UserRegistration = model<UserTypeForRegistration>('UserRegistration', UserRegistrationSchema)
