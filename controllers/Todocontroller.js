const asyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.addTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo Create Success" })
})
exports.getTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "Todo Fetch Success" })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo Update Success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    await Todo.findOneAndDelete(req.params.id)
    res.json({ message: "Todo Delete Success" })
})