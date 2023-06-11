const mongoose = require("mongoose")
const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();

// DB Connection
mongoose.connect(process.env.DATABASE).then(() => {
  console.log("DB CONNECTED")
}).catch((e) => {
  console.log("UNABLE to connect to DB", e)
})

// Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const userRoutes = require("./routes/user")
const bloodBankRoutes = require("./routes/bloodbank")
const donationRoutes = require("./routes/donationAppointment")

app.use('/api', userRoutes) 
app.use('/api', bloodBankRoutes)
app.use('/api', donationRoutes)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`App is running at ${port}`)
})