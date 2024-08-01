import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // email: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true, versionKey: false },
);

 export const UsersCollection = model('user', usersSchema);

