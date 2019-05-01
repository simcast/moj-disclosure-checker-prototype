const express = require('express')
const router = express.Router()

// CAUTION OR CONVICTION
router.post('/v1/caution/age', function (req, res) {

  let cautionedOrConvicted = req.session.data['cautioned-or-convicted']

  if (cautionedOrConvicted === 'Conviction') {
    res.redirect('/v1/conviction/type')
  } else {
    res.redirect('/v1/caution/age')
  }
})

// CAUTION ROUTES
router.post('/v1/caution/youth-type', function (req, res) {

  let ageAtCaution = req.session.data['age-at-caution']

  if (ageAtCaution === '18 or over') {
    res.redirect('/v1/caution/type')
  } else {
    res.redirect('/v1/caution/youth-type')
  }
})

router.post('/v1/caution/date', function (req, res) {

  let isCautionDateKnown = req.session.data['is-caution-date-known']
  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if ((isCautionDateKnown === 'no') && (youthSimpleOrConditionalCaution === 'Simple')) {
    res.redirect('/v1/caution/exit/simple-unknown-date')
  } else if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Simple')) {
    res.redirect('/v1/caution/exit/simple-unknown-date')
  } else if ((isCautionDateKnown === 'no') && (youthSimpleOrConditionalCaution === 'Conditional')) {
    res.redirect('/v1/caution/conditions-met')
  } else if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Conditional')) {
    res.redirect('/v1/caution/conditions-met')
  } else {
    res.redirect('/v1/caution/date')
  }
})

router.post('/v1/caution/conditions-end', function (req, res) {

  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if ((youthSimpleOrConditionalCaution === 'Simple') || (simpleOrConditionalCaution === 'Simple')) {
    res.redirect('/v1/caution/exit/caution-with-date')
  } else {
    res.redirect('/v1/caution/conditions-end')
  }
})

router.post('/v1/caution/exit/caution-with-date', function (req, res) {

  let isCautionDateKnown = req.session.data['is-caution-date-known']
  let conditionsMet = req.session.data['conditions-met']

  if ((conditionsMet === 'Yes') && (isCautionDateKnown === 'no')) {
    res.redirect('/v1/caution/exit/conditional-unknown-date')
  } else if (conditionsMet === 'No') {
    res.redirect('/v1/caution/exit/conditional-broken')
  } else {
    res.redirect('/v1/caution/exit/caution-with-date')
  }
})

// CONVICTION ROUTES

// Add your routes here - above the module.exports line

module.exports = router
