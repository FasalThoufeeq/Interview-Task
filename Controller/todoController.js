import asycHandler from "express-async-handler";
import todoHelpers from "../Helpers/todoHelpers.js";

const TodoController = () => {
  const getTodos = asycHandler(async (req, res) => {
    try {
      const todos = await todoHelpers().getTodos();
      if (todos.length) {
        res.status(200).json({
          msg: "successfully fetched",
          todos,
        });
      } else {
        res.status(500).json({
          msg: "todos not found",
        });
      }
    } catch {
      res.status(500).json({
        msg: "Something went wrong",
      });
    }
  });

  const postTodos = asycHandler(async (req, res) => {
    const todoDetails = req.body;
    try {
      const todo = await todoHelpers().postTodo(todoDetails);
      if (todo) {
        res.status(200).json({
          msg: "successfully Saved",
        });
      } else {
        res.status(500).json({
          msg: "Somemthing went wrong to save",
        });
      }
    } catch {
      res.status(500).json({
        msg: "Something went wrong to save",
      });
    }
  });

  const updateTodos = asycHandler(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updatedTodo = await todoHelpers().updateTodo(id, name);
      if (updatedTodo) {
        res.status(200).json({
          msg: "successfully Updated",
          updatedTodo,
        });
      } else {
        res.status(500).json({
          msg: "id not mtch",
        });
      }
    } catch {
      res.status(500).json({
        msg: "Something went wrong to update",
      });
    }
  });

  const deleteTodos = asycHandler(async (req, res) => {
    const { id } = req.params;
    try {
      await todoHelpers().deleteTodo(id);
      res.status(200).json({
        msg: "successfully Deleted",
      });
    } catch {
      res.status(500).json({
        msg: "Something went wrong to delete",
      });
    }
  });
  return {
    getTodos,
    deleteTodos,
    updateTodos,
    postTodos,
  };
};

export default TodoController;
