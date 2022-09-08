const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')

const app = express()
const port = process.env.PORT || 9999

app.use(cors())
app.use(bodyParser.json())

const fileName = './todos.json';

app.get('/api/todos', (req, res) => {
    const { offset = 0, limit = 10 } = req.query
    const todos = JSON.parse(fs.readFileSync(fileName));
    
    const todosSliced = todos.slice(offset, offset + limit)

    res.status(200).send({ data: todosSliced, total: todos.length, offset: Number(offset), limit: Number(limit) })
})

app.post('/api/todos', (req, res) => {
    const todos = JSON.parse(fs.readFileSync(fileName));
    const { title, description, priority } = req.body
    const newTask = {
        id: uuidv4(),
        title,
        description,
        priority,
        completed: false,
        expired_at: Date.now() + (1000 * 60 * 60 * 24)
    }

    todos.push(newTask)
    const updatedJson = JSON.stringify(todos, null, 4)

    fs.writeFile(
        fileName,
        updatedJson,
        function (err) {
            if (err) {
                res.status(500).send()
                return console.error(err);
            }
            console.log(updatedJson);
            console.log('updated ' + fileName);

            res.status(201).send(newTask)
        }
    );
})

app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params
    const todos = JSON.parse(fs.readFileSync(fileName));
    const index = todos.findIndex(t => t.id === id)

    if (index === -1) {
        res.status(500).send()
        return
    }

    todos.splice(index, 1)

    const updatedJson = JSON.stringify(todos, null, 4)

    fs.writeFile(
        fileName,
        updatedJson,
        function (err) {
            if (err) {
                res.status(500).send()
                return console.error(err);
            }
            console.log(updatedJson);
            console.log('updated ' + fileName);

            res.status(200).send()
        }
    );
})

app.patch('/api/todos/:id', (req, res) => {
    const { id } = req.params
    const todos = JSON.parse(fs.readFileSync(fileName));
    const index = todos.findIndex(t => t.id === id)

    if (index === -1) {
        res.status(500).send()
        return
    }

    todos[index] = {
        ...todos[index],
        ...req.body
    }

    const updatedJson = JSON.stringify(todos, null, 4)

    fs.writeFile(
        fileName,
        updatedJson,
        function (err) {
            if (err) {
                res.status(500).send()
                return console.error(err);
            }
            console.log(updatedJson);
            console.log('updated ' + fileName);

            res.status(200).send({ status: 'success', data: todos[index] })
        }
    );
})

app.get('/health', (req, res) => {
    return res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
