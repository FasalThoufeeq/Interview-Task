import mongoose, { Schema, model } from "mongoose";

const TodoSchema = new Schema(
  {
    todoName: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
const Todo = model("Todo", TodoSchema);
export default Todo;
