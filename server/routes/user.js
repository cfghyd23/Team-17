const express = require("express")
const { signup, signin, signout, appointments, toggleVolunteer } = require("../controllers/user")
const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.get("/signout", signout)
router.post("/appointments", appointments)
router.put("/toggleVolunteer:id", toggleVolunteer)

module.exports = router