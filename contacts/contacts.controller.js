const express = require('express');
const router = express.Router();
const contactService = require('./contact.service');

router.post('/add', add);
router.post('/subscribe', subscribe);
router.post('/addPhoneNumber', addPhoneNumber);

module.exports = router;

// sending contact form data via email
function add(req, res, next) {
    contactService.add(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

// subscribe to newsletter
function subscribe(req, res, next) {
	contactService.subscribe(req.body)
        .then(data => res.json(data))
        .catch(err => next(err));
}

function addPhoneNumber(req, res, next) {
	contactService.addPhoneNumber(req.body)
        .then(data => res.json(data))
        .catch(err => next(err));	
}


