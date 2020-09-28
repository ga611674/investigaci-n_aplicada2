const { Router, request } = require('express');
const router = Router();

const pets = require('../animals.json');

console.log(pets);

router.get('/', (req, res) => {
    res.json(pets);
});

module.exports = router;