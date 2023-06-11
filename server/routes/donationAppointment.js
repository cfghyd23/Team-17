const express = require("express")
const { 
    createBloodBank,
    readAllBloodBank,
    readOneBloodBank,
    UpdateBloodBank,
    DeleteBloodBank
 } = require("../controllers/donationAppointment")
const router = express.Router()

router.post('/donation-appointments', createBloodBank)
router.get('/donation-appointments', readAllBloodBank)
router.get('/donation-appointments/:id', readOneBloodBank)
router.put('/donation-appointments/:id', UpdateBloodBank)
router.delete('/donation-appointments/:id', DeleteBloodBank)

module.exports = router