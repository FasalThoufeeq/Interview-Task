import express from "express";
import TodoController from "../Controller/todoController.js";

const Routes = () => {
  const router = express.Router();
  const controller = TodoController();
  router
    .route("/")
    .get(controller.getTodos)
    .post(controller.postTodos);

  router
    .route("/:id")
    .put(controller.updateTodos)
    .delete(controller.deleteTodos);

  return router;
};

export default Routes;
