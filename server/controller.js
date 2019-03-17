// Controller here
const todoList = ['one', 'two', 'three'];


const controller = {
    get: (req, res, next) => {
        res.status(200).send(todoList);
    },
    post: (req, res, next) => {
        const {todo} = req.body;
        todoList.push(todo);
        res.status(201).send(todoList);
    },
    delete: (req, res, next) => {
        const {index} = req.query;
        todoList.splice(index, 1);
        res.status(202).send(todoList);
    }
}

module.exports = controller;