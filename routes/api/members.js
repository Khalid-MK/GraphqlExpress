const express = require('express')
const router = express.Router();
const members = require('../../members')

// Get all members
router.get('/', (req, res) => {
    res.json(members)
})

// Get single member
router.get('/:id', (req, res) => {
    let member = members.find(member => member.id === parseInt(req.params.id))
    member ? res.json({ isFound: true, data: member }) : res.status(400).json({ isFound: false, data: null })
})

module.exports = router;