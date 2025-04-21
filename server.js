const express = require("express")
require("dotenv").config()
const path = require("path")
const index = path.join(__dirname,"./index.html")
const app = express()

app.use(express.static("./"))
app.use("/", (req,res) => {
    res.sendFile(index)
})

app.listen(process.env.PORT, () => {
    console.log("app listening at http://localhost:"+process.env.PORT)
})