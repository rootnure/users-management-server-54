const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnur', email: 'sabnur@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
]

app.get('/', (req, res) => {
    res.send('users management server is running');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})