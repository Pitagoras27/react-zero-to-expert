/**
 *  Routes for routes: host + /api/events
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, addEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { fieldsValidators } = require('../middlewares/fields-validators');
const { isDate } = require('../helpers/isDate');
const { validateJwt } = require('../middlewares/validateJwt');

const router = Router();

router.use(validateJwt);

router.get('/', getEvents );

router.post(
  '/',
  [
    check('title', 'Title is mandatory').not().isEmpty(),
    check('start', 'Initial Date is mandatory').custom( isDate ),
    check('end', 'End Date is mandatory').custom( isDate ),
    fieldsValidators
  ],
  addEvent
);

router.put('/:id', updateEvent );

router.delete('/:id', deleteEvent );

module.exports = router;