const express = require("express");
const cors = require("cors")
const port = 5000
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.post("/", (req, res)=>{
    const {courseOne, courseTwo, courseThree} = req.body
    console.log(`Your first course is ${courseOne} your second course ${courseTwo} and your final course is ${courseThree}`)
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
