const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/name', (req, res) => res.send('Hello, User!'))

//create endpoints /student which will print student information
app.get('/student', (req, res) => {res.json({name: "John Doe", age: 20, grade: "A"})})

//create endpoint /uni which will print rku
app.get('/uni', (req, res) => {res.json('RKU -  University')})

//create endpoint which will accept your first name and last name and display your full name
app.get('/fullname/:fname/:lname', (req, res) => {
    var fname = req.params.fname;
    var lname = req.params.lname;
    res.send(fname + '' + lname)
})


app.get('/arithmatic/:inputa/:inputb', (req, res) => {
    var inputa = req.params.inputa;
    var inputb = req.params.inputb;
    res.send(inputa - inputb)

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



//create endpoint to take to 2 input from user to perform arithmatic operations

