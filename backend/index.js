const express = require('express');
const cors = require('cors');
const connectDB = require('./database/index');
const { registerUser, login} = require('./handlers/handler');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json())


app.post('/register',registerUser)
app.post('/login',login)
connectDB()
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})


