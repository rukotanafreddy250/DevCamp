const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.status(400).json({
        "success": false,
        msg: "Show all bootcamp"
    });
});

router.put('/:id', (req, res) =>{
    res.status(400).json({
        "success": false,
        msg: `Get A BootComp ${req.params.id}`
    });
});


router.post('/', (req, res) =>{
    res.status(400).json({
        "success": false,
        msg: "Create New BootCamp"
    });
});


router.delete('/:id', (req, res) =>{
    res.status(400).json({
        "success": false,
        msg: `Delete BootCamp ${req.params.id}`
    });
});


module.exports = router;