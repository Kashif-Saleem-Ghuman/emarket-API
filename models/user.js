import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String, // need to mention the type of data
      trim: true, // trim is used to remove the white spaces
      required: true, // required is used to make the field mandatory
    },
    email: {
      type: String,
      trim: true,
      requires: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6, // min is used to set the minimum length of the password
      max: 64, // max is used to set the maximum length of the password
    },
    picture: {
      type: String,
      default: "/avatar.png", // default is used to set the default value of the field
    },
    role: {
      type: [String],
      default: ["Subscriber"],
      enum: ["Subscriber", "Instructor", "Admin"], // enum is used to set the values of the field which means the field can only have these values
    },
    stripe_accountid: "",
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true } // timestamps is used to add the created at and updated at fields in the document
);

export default mongoose.model('User', userSchema)