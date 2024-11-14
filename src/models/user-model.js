import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
      validate: {
        validator(v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
      },
    },
    password: {
      type: Schema.Types.String,
      required: true,
      },
    role: {
      type: Schema.Types.String,
      enum: ["USER", "ADMINISTRATOR"],
      default: "USER"
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

const User = model("User", userSchema);

export default User;