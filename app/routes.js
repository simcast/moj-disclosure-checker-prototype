const express = require('express')
const router = express.Router()

// *********** VERSION 3 ***********

// CONVICTION CALCULATION

function convictCalc (req, res) {

  //conviction type
  let convictType = req.session.data['conviction-type']

  //age
  let age = req.session.data['age-at-conviction']

  //length of conviction
  let weeksOrMonths = req.session.data['conviction-weeks-months']
  let convictionLengthWeeks = req.session.data['conviction-weeks-number']
  let convictionLengthMonths = req.session.data['conviction-months-number']


  //get date input
  var convictDay = req.session.data['conviction-day']
  var convictMonth = req.session.data['conviction-month']
  var convictYear = req.session.data['conviction-year']

  //convert to number
  convictDay = parseInt(convictDay);
  convictMonth = parseInt(convictMonth)-1;
  convictYear = parseInt(convictYear);
  convictionLengthWeeks = parseInt(convictionLengthWeeks);
  convictionLengthMonths = parseInt(convictionLengthMonths);

  //assemble convict date
  var convictDate = new Date(convictYear,convictMonth,convictDay);

  //calculation
  var spentDate = new Date();

  if (convictType == "Community order") {
    if (age == "Under 18") {
        if (weeksOrMonths == "months") {
          spentDate = new Date(convictYear,convictMonth + convictionLengthMonths + 6,convictDay);
        } else if (weeksOrMonths == "weeks") {
          spentDate = new Date(convictYear,convictMonth + 6,convictDay + (convictionLengthWeeks * 7));
        }
      } else if (age == "18 or over") {
        if (weeksOrMonths == "months") {
          spentDate = new Date(convictYear + 1,convictMonth + convictionLengthMonths,convictDay);
        } else if (weeksOrMonths == "weeks") {
          spentDate = new Date(convictYear + 1,convictMonth,convictDay + (convictionLengthWeeks * 7));
        }
      }
  }

  //change format

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];


  const formattedConvictDate = convictDate.getDate() + ' ' + monthNames[convictDate.getMonth()] + ' ' + convictDate.getFullYear()

  const formattedSpentDate = spentDate.getDate() + ' ' + monthNames[spentDate.getMonth()] + ' ' + spentDate.getFullYear()

  //write to session data
  req.session.data['formatted-conviction-date'] = formattedConvictDate;
  req.session.data['formatted-spent-date'] = formattedSpentDate;

  //checks
  // console.log(convictMonth)
  // console.log(convictMonth + convictionLengthMonths + 6)
  // console.log(typeof convictionLengthMonths)
  // console.log(convictionLengthMonths)
  // console.log(convictType)
  // console.log(formattedConvictDate)
  // console.log(formattedSpentDate)


}

// CAUTION CALCULATION

function cautionCalc (req, res) {

  //conviction type
  let cautionType = req.session.data['simple-or-conditional-caution']

  //age
  let age = req.session.data['age-at-caution']

  //length of conviction
  // let weeksOrMonths = req.session.data['conviction-weeks-months']
  // let convictionLengthWeeks = req.session.data['conviction-weeks-number']
  // let convictionLengthMonths = req.session.data['conviction-months-number']


  //get date inputs
  var cautionDay = req.session.data['caution-day']
  var cautionMonth = req.session.data['caution-month']
  var cautionYear = req.session.data['caution-year']

  var conditionsEndDay = req.session.data['conditions-end-day']
  var conditionsEndMonth = req.session.data['conditions-end-month']
  var conditionsEndYear = req.session.data['conditions-end-year']

  //convert to number
  cautionDay = parseInt(cautionDay);
  cautionMonth = parseInt(cautionMonth)-1;
  cautionYear = parseInt(cautionYear);
  conditionsEndDay = parseInt(conditionsEndDay);
  conditionsEndMonth = parseInt(conditionsEndMonth)-1;
  conditionsEndYear = parseInt(conditionsEndYear);
  // convictionLengthWeeks = parseInt(convictionLengthWeeks);
  // convictionLengthMonths = parseInt(convictionLengthMonths);

  //assemble convict date
  var cautionDate = new Date(cautionYear,cautionMonth,cautionDay);

  //calculation
  var spentDate = new Date();

  if (cautionType == "conditional-caution" || cautionType == "youth-conditional-caution") {
    spentDate = new Date(conditionsEndYear,conditionsEndMonth + 3,conditionsEndDay);
  } else if (cautionType == "simple-caution" || cautionType == "youth-simple-caution") {
    spentDate = new Date(cautionYear,cautionMonth,cautionDay);
  }

  //change format

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];


  const formattedCautionDate = cautionDate.getDate() + ' ' + monthNames[cautionDate.getMonth()] + ' ' + cautionDate.getFullYear()

  const formattedSpentDate = spentDate.getDate() + ' ' + monthNames[spentDate.getMonth()] + ' ' + spentDate.getFullYear()

  //write to session data
  req.session.data['formatted-caution-date'] = formattedCautionDate;
  req.session.data['formatted-spent-date'] = formattedSpentDate;

  //checks
  // console.log(cautionMonth)
  // console.log(convictMonth + convictionLengthMonths + 6)
  // console.log(typeof convictionLengthMonths)
  // console.log(convictionLengthMonths)
  console.log(typeof conditionsEndDay)
  console.log(typeof conditionsEndMonth)
  console.log(typeof conditionsEndYear)
  console.log(cautionType)
  console.log(cautionDate)
  console.log(formattedCautionDate)
  console.log(formattedSpentDate)


}

// CAUTION OR CONVICTION
router.post('/v3/caution/age', function (req, res) {

  let cautionedOrConvicted = req.session.data['cautioned-or-convicted']

  if (cautionedOrConvicted === 'Conviction') {
    res.redirect('/v3/conviction/age')
  } else {
    res.redirect('/v3/caution/age')
  }
})

// CAUTION ROUTES

// Sendint to type vs. youth type
// router.post('/v3/caution/youth-type', function (req, res) {
//
//   let ageAtCaution = req.session.data['age-at-caution']
//
//   if (ageAtCaution === '18 or over') {
//     res.redirect('/v3/caution/type')
//   } else {
//     res.redirect('/v3/caution/youth-type')
//   }
// })

router.post('/v3/caution/youth-type', function (req, res) {

  let ageAtCaution = req.session.data['age-at-caution']

  if (ageAtCaution === '18 or over') {
    res.redirect('/v3/exit-over-18')
  } else {
    res.redirect('/v3/caution/youth-type')
  }
})

router.post('/v3/caution/date', function (req, res) {

  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if (simpleOrConditionalCaution === 'Youth conditional caution' || simpleOrConditionalCaution === 'Conditional') {
    res.redirect('/v3/caution/conditions-met')
  } else {
    res.redirect('/v3/caution/date')
  }
})

router.post('/v3/caution/conditions-end', function (req, res) {

  let conditionsMet = req.session.data['conditions-met']

  if (conditionsMet === 'No') {
    res.redirect('/v3/caution/exit/conditional-broken')
  } else {
    res.redirect('/v3/caution/conditions-end')
  }

})

router.post('/v3/caution/exit/caution-with-date', function (req, res) {

  cautionCalc (req, res);

  res.redirect('/v3/caution/exit/caution-with-date')

  // let isCautionDateKnown = req.session.data['is-caution-date-known']
  // let conditionsMet = req.session.data['conditions-met']
  //
  // if ((conditionsMet === 'Yes') && (isCautionDateKnown === 'no')) {
  //   res.redirect('/v3/caution/exit/conditional-unknown-date')
  // } else if (conditionsMet === 'No') {
  //   res.redirect('/v3/caution/exit/conditional-broken')
  // } else {
  //   res.redirect('/v3/caution/exit/caution-with-date')
  // }
})

// CONVICTION ROUTES

//Over 18 exit

router.post('/v3/conviction/type', function (req, res) {

  let ageAtConviction = req.session.data['age-at-conviction']

  if (ageAtConviction === '18 or over') {
    res.redirect('/v3/exit-over-18')
  } else {
    res.redirect('/v3/conviction/type')
  }
})


//Conviction type

router.post('/v3/conviction/community', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Custodial sentence') {
    res.redirect('/v3/conviction/custodial')
  } else if (convictionType === 'Discharge') {
    res.redirect('/v3/conviction/discharge')
  } else if (convictionType === 'Financial penalty') {
    res.redirect('/v3/conviction/financial-penalty')
  } else if (convictionType === 'Motoring endorsement') {
    res.redirect('/v3/conviction/date')
  } else {
    res.redirect('/v3/conviction/community')
  }
})

//Motoring convictions

router.post('/v3/conviction/conviction-months-weeks', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Motoring endorsement') {
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

// router.post('/v3/conviction/exit/conviction-with-date', function (req, res) {
//
//   convictCalc (req, res);
//
//   let isConvictionDateKnown = req.session.data['is-conviction-date-known']
//   let convictionType = req.session.data['conviction-type']
//
//   if ((isConvictionDateKnown === 'no') && (convictionType === 'Custodial sentence')) {
//     res.redirect('/v3/conviction/exit/conviction-unknown-date-custodial')
//   } else if (isConvictionDateKnown === 'no') {
//     res.redirect('/v3/conviction/exit/conviction-unknown-date')
//   } else {
//     res.redirect('/v3/conviction/exit/conviction-with-date')
//   }
//
// })


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
