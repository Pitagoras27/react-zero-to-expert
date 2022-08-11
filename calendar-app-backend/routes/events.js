/**
 *  Routes for routes: host + /api/events
 */

const { Router } = require('express');
const { getEvents, addEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJwt } = require('../middlewares/validateJwt');

const router = Router();

router.use(validateJwt);

router.get('/', getEvents );

router.post('/', addEvent );

router.put('/:id', updateEvent );

router.delete('/:id', deleteEvent );

module.exports = router;