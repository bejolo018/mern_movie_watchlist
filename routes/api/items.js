const express = require('express');
const router = express.Router();
const auth = require('../../routes/middleware/auth')

//Item model
const Item = require('../../models/Item')

//@route GET api/items
//@desc Get ALl Items
router.get('/', auth, (req, res) =>{
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

//@route POST api/items
//@desc Create A Item
router.post('/', auth, (req, res) =>{
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc Deletes A Item
router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router;