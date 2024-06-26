const express = require("express");
const app = express();

app.set("view engine", "ejs");

const todos = [
    { todoId: "1", todoTask: "Code" },
    { todoId: "2", todoTask: "Sleep" },
    { todoId: "3", todoTask: "Coffee" }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { data: todos });
});

app.post("/", (req, res) => {
    const inputTodoId = (todos.length + 1).toString();
    const inputTodoTask = req.body.todoTask;

    todos.push({ todoId: inputTodoId, todoTask: inputTodoTask });

    res.render("index", { data: todos });
});

app.post("/delete", (req, res) => {
    const requestedTodoId = req.body.todoId;
    const index = todos.findIndex(todo => todo.todoId === requestedTodoId);

    if (index !== -1) {
        todos.splice(index, 1);
    }
    res.redirect("/");
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => {
        console.log("App is running on port 3000");
    });
}
