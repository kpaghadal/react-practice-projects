const express = require('express')
const birds = require('./birds')
const student = require('./student')
const app = express()
const port = 3000
app.use(express.json())
app.use('/b', birds)
app.use('/s', student)
app.all('/', (req, res) => res.send('from all'))//for all types of methods its running


app.get('/', (req, res) => res.send('Hello World!')) 
app.get('/food{s}', (req, res) => res.send('food or foods'))

app.post('/', (req, res) => res.send('from post'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//add student with fname and last name
app.post('/addstudent', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    res.send(`welcome ${fname} ${lname}`)
})


app.post('/birth', (req, res) => {
    const birth = req.body.birth;
    res.send(`my birth ${birth}`)
})


//1.create end point which can food and foods
//2.create end points for students 1>stuent details 2>student uni 3> student branch
//3.create a end points using post method student first name and last name
//4.create end point to except date of birth of use in dd-mm-yy formate 
//    if age of user is more then 18 then print messege u are eligible for admission else u are not eligible