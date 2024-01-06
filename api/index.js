require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT
const userRoute = require("./routes/user.routes.js")

//jab bhi db connect karo => try chatch is necessary and async await is req 

//mongoose.connect(`${MONGO_URL}`); error dega 


async function check() {
    try {
        const client = await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected")
        
    } catch(err) {
        console.log("Database connection error",err);
    }
}

check()


app.use('/user',userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/about', (req, res) => {
//     res.send('Why you are looking here?')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})