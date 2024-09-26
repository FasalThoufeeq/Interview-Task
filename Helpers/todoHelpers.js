import Todo from "../Model/TodoModel.js";

const todoHelpers = () => {
  const getTodos = async () => {
    const todos = await Todo.find();
    return todos;
  };

  const postTodo = async (todoDetails) => {
    const newTodo = new Todo(todoDetails);
    const savedTodo = await newTodo.save();
    return savedTodo;
  };

  const updateTodo = async (id, newName) => {
    const updatedTodo = await Todo.updateOne(
      { _id: id },
      { $set: { todoName: newName } }
    );
    return updatedTodo;
  };

  const deleteTodo = async (id) => {
    await Todo.deleteOne({ _id: id });
    return;
  };
  return { deleteTodo, getTodos, updateTodo, postTodo };
};

export default todoHelpers