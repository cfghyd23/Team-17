const express = require("express")
const { 
    createBloodBank,
    readAllBloodBank,
    readOneBloodBank,
    UpdateBloodBank,
    DeleteBloodBank 
} = require("../controllers/bloodbank")
const router = express.Router()

router.post('/bloodbanks', createBloodBank)
router.get('/bloodbanks', readAllBloodBank)
router.get('/bloodbanks/:id', readOneBloodBank)
router.put('/bloodbanks/:id', UpdateBloodBank)
router.delete('/bloodbanks/:id', DeleteBloodBank)

module.exports = router