const express = require('express')
const app = express()
require("dotenv").config();
require("./db/conn");
const cors = require('cors')
app.use(express.json())
app.use(cors())

const Router = require("./Routes/todoRoute");
const PORT = process.env.PORT




app.use("/", Router);

app.listen(process.env.PORT || 4000, () =>{
    console.log(`port is starting on http://localhost:${PORT}`)
})
