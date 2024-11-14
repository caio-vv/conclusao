import { Schema, model } from "mongoose"; // importando o mongoose

const postSchema = new Schema( // criando o schema
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    text: {
      type: Schema.Types.String,
      required: true,
    },
    course:{
      type: [Schema.Types.String],
      enum: ["ADM", "ADS", "PSICOLOGIA", "MEDICINA", "TODOS"],
      default: "TODOS",
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema); // criando o model
 
export default Post; // exportando o model