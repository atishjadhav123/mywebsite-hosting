const router = require("express").Router()
const todoController = require("./../controllers/Todocontroller")

router.get("/", todoController.getTodo)
router.post("/", todoController.addTodo)
router.put("/", todoController.updateTodo)
router.delete("/", todoController.deleteTodo)

module.exports = router