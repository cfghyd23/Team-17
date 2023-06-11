const express = require("express")
const { 
    createNGO,
    readAllNGO,
    readOneNGO,
    UpdateNGO,
    DeleteNGO 
} = require("../controllers/bloodbank")
const router = express.Router()

router.post('/ngo', createNGO)
router.get('/ngo', readAllNGO)
router.get('/ngo/:id', readOneNGO)
router.put('/ngo/:id', UpdateNGO)
router.delete('/ngo/:id', DeleteNGO)

module.exports = router