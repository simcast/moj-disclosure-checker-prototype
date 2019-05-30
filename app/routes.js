const express = require('express')
const router = express.Router()

// *********** VERSION 3 ***********

// CAUTION OR CONVICTION
router.post('/v3/caution/age', function (req, res) {

  let cautionedOrConvicted = req.session.data['cautioned-or-convicted']

  if (cautionedOrConvicted === 'Conviction') {
    res.redirect('/v3/conviction/type')
  } else {
    res.redirect('/v3/caution/age')
  }
})

// CAUTION ROUTES
router.post('/v3/caution/youth-type', function (req, res) {

  let ageAtCaution = req.session.data['age-at-caution']

  if (ageAtCaution === '18 or over') {
    res.redirect('/v3/caution/type')
  } else {
    res.redirect('/v3/caution/youth-type')
  }
})

router.post('/v3/caution/date', function (req, res) {

  let isCautionDateKnown = req.session.data['is-caution-date-known']
  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Youth caution')) {
    res.redirect('/v3/caution/exit/simple-unknown-date')
  } else if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Simple')) {
    res.redirect('/v3/caution/exit/simple-unknown-date')
  } else if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Youth conditional caution')) {
    res.redirect('/v3/caution/conditions-met')
  } else if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Conditional')) {
    res.redirect('/v3/caution/conditions-met')
  } else {
    res.redirect('/v3/caution/date')
  }
})

router.post('/v3/caution/conditions-end', function (req, res) {

  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if ((simpleOrConditionalCaution === 'Simple') || (simpleOrConditionalCaution === 'Youth caution')) {
    res.redirect('/v3/caution/exit/caution-with-date')
  } else {
    res.redirect('/v3/caution/conditions-end')
  }
})

router.post('/v3/caution/exit/caution-with-date', function (req, res) {

  let isCautionDateKnown = req.session.data['is-caution-date-known']
  let conditionsMet = req.session.data['conditions-met']

  if ((conditionsMet === 'Yes') && (isCautionDateKnown === 'no')) {
    res.redirect('/v3/caution/exit/conditional-unknown-date')
  } else if (conditionsMet === 'No') {
    res.redirect('/v3/caution/exit/conditional-broken')
  } else {
    res.redirect('/v3/caution/exit/caution-with-date')
  }
})

// CONVICTION ROUTES

//Conviction type

router.post('/v3/conviction/community', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Custodial sentence') {
    res.redirect('/v3/conviction/custodial')
  } else if (convictionType === 'Discharge') {
    res.redirect('/v3/conviction/discharge')
  } else if (convictionType === 'Financial penalty') {
    res.redirect('/v3/conviction/financial-penalty')
  } else if (convictionType === 'Motoring') {
    res.redirect('/v3/conviction/age')
  } else {
    res.redirect('/v3/conviction/community')
  }
})

//Motoring convictions

router.post('/v3/conviction/conviction-months-weeks', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Motoring') {
    res.redirect('/v3/conviction/exit/conviction-with-date')
  } else {
    res.redirect('/v3/conviction/conviction-months-weeks')
  }
})


//After conviction type
// router.post('/v3/conviction/date', function (req, res) {
//
//   let isConvictionDateKnown = req.session.data['is-conviction-date-known']
//   let convictionType = req.session.data['conviction-type']
//
//   if ((isConvictionDateKnown === 'no') && (convictionType === 'Custodial sentence')) {
//     res.redirect('/v3/conviction/conviction-months-weeks')
//   } else if (isConvictionDateKnown === 'no') {
//     res.redirect('/v3/conviction/exit/conviction-unknown-date')
//   } else {
//     res.redirect('/v3/conviction/date')
//   }
// })

router.post('/v3/conviction/exit/conviction-with-date', function (req, res) {

  let isConvictionDateKnown = req.session.data['is-conviction-date-known']
  let convictionType = req.session.data['conviction-type']

  if ((isConvictionDateKnown === 'no') && (convictionType === 'Custodial sentence')) {
    res.redirect('/v3/conviction/exit/conviction-unknown-date-custodial')
  } else if (isConvictionDateKnown === 'no') {
    res.redirect('/v3/conviction/exit/conviction-unknown-date')
  } else {
    res.redirect('/v3/conviction/exit/conviction-with-date')
  }
})

router.post('/v3/conviction/conviction-months-weeks', function (req, res) {

  let isConvictionDateKnown = req.session.data['is-conviction-date-known']

  if (isConvictionDateKnown === 'no') {
    res.redirect('/v3/conviction/exit/conviction-unknown-date')
  } else {
    res.redirect('/v3/conviction/conviction-months-weeks')
  }
})



// *********** VERSION 2 ***********

// CAUTION OR CONVICTION
router.post('/v2/caution/age', function (req, res) {

  let cautionedOrConvicted = req.session.data['cautioned-or-convicted']

  if (cautionedOrConvicted === 'Conviction') {
    res.redirect('/v2/conviction/type')
  } else {
    res.redirect('/v2/caution/age')
  }
})

// CAUTION ROUTES
router.post('/v2/caution/youth-type', function (req, res) {

  let ageAtCaution = req.session.data['age-at-caution']

  if (ageAtCaution === '18 or over') {
    res.redirect('/v2/caution/type')
  } else {
    res.redirect('/v2/caution/youth-type')
  }
})

router.post('/v2/caution/date', function (req, res) {

  let isCautionDateKnown = req.session.data['is-caution-date-known']
  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Youth caution')) {
    res.redirect('/v2/caution/exit/simple-unknown-date')
  } else if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Simple')) {
    res.redirect('/v2/caution/exit/simple-unknown-date')
  } else if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Youth conditional caution')) {
    res.redirect('/v2/caution/conditions-met')
  } else if ((isCautionDateKnown === 'no') && (simpleOrConditionalCaution === 'Conditional')) {
    res.redirect('/v2/caution/conditions-met')
  } else {
    res.redirect('/v2/caution/date')
  }
})

router.post('/v2/caution/conditions-end', function (req, res) {

  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if ((simpleOrConditionalCaution === 'Simple') || (simpleOrConditionalCaution === 'Youth caution')) {
    res.redirect('/v2/caution/exit/caution-with-date')
  } else {
    res.redirect('/v2/caution/conditions-end')
  }
})

router.post('/v2/caution/exit/caution-with-date', function (req, res) {

  let isCautionDateKnown = req.session.data['is-caution-date-known']
  let conditionsMet = req.session.data['conditions-met']

  if ((conditionsMet === 'Yes') && (isCautionDateKnown === 'no')) {
    res.redirect('/v2/caution/exit/conditional-unknown-date')
  } else if (conditionsMet === 'No') {
    res.redirect('/v2/caution/exit/conditional-broken')
  } else {
    res.redirect('/v2/caution/exit/caution-with-date')
  }
})

// CONVICTION ROUTES

//Conviction type

router.post('/v2/conviction/community', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Custodial sentence') {
    res.redirect('/v2/conviction/custodial')
  } else {
    res.redirect('/v2/conviction/community')
  }
})

//After conviction type
router.post('/v2/conviction/date', function (req, res) {

  let isConvictionDateKnown = req.session.data['is-conviction-date-known']
  let convictionType = req.session.data['conviction-type']

  if ((isConvictionDateKnown === 'no') && (convictionType === 'Custodial sentence')) {
    res.redirect('/v2/conviction/conviction-months-weeks')
  } else if (isConvictionDateKnown === 'no') {
    res.redirect('/v2/conviction/exit/conviction-unknown-date')
  } else {
    res.redirect('/v2/conviction/date')
  }
})

router.post('/v2/conviction/exit/conviction-with-date', function (req, res) {

  let isConvictionDateKnown = req.session.data['is-conviction-date-known']
  let convictionType = req.session.data['conviction-type']

  if ((isConvictionDateKnown === 'no') && (convictionType === 'Custodial sentence')) {
    res.redirect('/v2/conviction/exit/conviction-unknown-date-custodial')
  } else if (isConvictionDateKnown === 'no') {
    res.redirect('/v2/conviction/exit/conviction-unknown-date')
  } else {
    res.redirect('/v2/conviction/exit/conviction-with-date')
  }
})

router.post('/v2/conviction/conviction-months-weeks', function (req, res) {

  let isConvictionDateKnown = req.session.data['is-conviction-date-known']

  if (isConvictionDateKnown === 'no') {
    res.redirect('/v2/conviction/exit/conviction-unknown-date')
  } else {
    res.redirect('/v2/conviction/conviction-months-weeks')
  }
})

// Add your routes here - above the module.exports line

module.exports = router
