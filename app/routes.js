const express = require('express')
const router = express.Router()

// *********** Prototype 2 ***********

// Caution or convicted

router.post('/prototype-2/how-old-were-you-answer", function (req, res) {

  var cautionedConvicted = req.session.data['caution-conviction']

  if (cautionedConvicted== "Convicted"){
    res.redirect('/prototype-2/how-old-were-you')
  }
  else {
    res.redirect('/prototype-1/start-page')
  }

})

// *********** Prototype 1 ***********

//Add another sentence

router.post('/Prototype-1/add-a-conviction-or-caution-answer', function (req, res) {

  // Make a variable and give it the value from 'changed-name'
  var anotherSentence = req.session.data['changed-name']

  // Check whether the variable matches a condition
  if (anotherSentence == "No"){
    // Send user to next page
    res.redirect('/Prototype-1/add-a-conviction-or-caution')
  }
  else {
    // Send user to another page
    res.redirect('/Prototype-1/start-page')
  }

})

//Add another caution



// *********** VERSION 4 ***********


// Multiples

router.post('/multiple-journey/multiple-3/full/1-single', function (req, res) {

  let multiSentences = req.session.data['multi-sentences']

  if (multiSentences === 'Multiple sentences') {
    res.redirect('/multiple-journey/multiple-3/full/type-2')
  } else {
    res.redirect('/multiple-journey/multiple-3/full/1-single')
  }
})

// MOTORING OPTIONS

router.post('/motoring/mvp/date', function (req, res) {

  let endorseYesNo = req.session.data['endorse-yes-no']

  if (endorseYesNo === 'Endorsement not given') {
    res.redirect('/motoring/mvp/no-endorsement')
  } else {
    res.redirect('/motoring/mvp/date')
  }
})

// MOTORING v3
router.post('/motoring/v3/conviction-months-weeks', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Penalty points' || convictionName === 'Fine' || convictionName === 'Fixed penalty notice') {
    res.redirect('/motoring/v3/conviction-with-date')
  } else {
    res.redirect('/motoring/v3/conviction-months-weeks')
  }
})

router.post('/motoring/v3/date', function (req, res) {

  let endorseYesNo = req.session.data['endorse-yes-no']
  let convictionName = req.session.data['conviction-name']

  if (endorseYesNo === 'Endorsement not given' && convictionName === 'Fixed penalty notice'){
    res.redirect('/motoring/v3/fpn-no-conviction')
  } else {
    res.redirect('/motoring/v3/date')
  }
})

router.post('/motoring/v3/conviction-length', function (req, res) {

  let convictionMeasure = req.session.data['conviction-measure']

  if (convictionMeasure === 'Penalty points') {
    res.redirect('/motoring/v3/conviction-with-date')
  } else {
    res.redirect('/motoring/v3/conviction-length')
  }
})

// MOTORING v5

router.post('/motoring/v5/lifetime-ban', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Disqualification') {
    res.redirect('/motoring/v5/lifetime-ban')
  } else {
    res.redirect('/motoring/v5/endorsement')
  }
})

router.post('/motoring/v5/endorsement', function (req, res) {

  let convictionName = req.session.data['conviction-name']
  let lifeBanYesNo = req.session.data['life-ban-yes-no']

  if (convictionName === 'Disqualification' && lifeBanYesNo === 'Lifetime ban given') {
    res.redirect('/motoring/v5/conviction-with-date')
  } else {
    res.redirect('/motoring/v5/endorsement')
  }
})

router.post('/motoring/v5/date-end', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Penalty points' || convictionName === 'Fine' || convictionName === 'Fixed penalty notice') {
    res.redirect('/motoring/v5/conviction-with-date')
  } else {
    res.redirect('/motoring/v5/date-end')
  }
})

router.post('/motoring/v5/date', function (req, res) {

  let endorseYesNo = req.session.data['endorse-yes-no']
  let convictionName = req.session.data['conviction-name']
  let lifeBanYesNo = req.session.data['life-ban-yes-no']

  if (endorseYesNo === 'Endorsement not given' && convictionName === 'Fixed penalty notice'){
    res.redirect('/motoring/v5/fpn-no-conviction')
  } else if (convictionName === 'Disqualification' && lifeBanYesNo === 'Lifetime ban given') {
    res.redirect('/motoring/v5/conviction-with-date')
  } else {
    res.redirect('/motoring/v5/date')
  }
})

router.post('/motoring/v5/conviction-length', function (req, res) {

  let convictionMeasure = req.session.data['conviction-measure']

  if (convictionMeasure === 'Penalty points') {
    res.redirect('/motoring/v5/conviction-with-date')
  } else {
    res.redirect('/motoring/v5/conviction-length')
  }
})

// MOTORING v6

router.post('/motoring/v6/specific-length', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Disqualification') {
    res.redirect('/motoring/v6/specific-length')
  } else {
    res.redirect('/motoring/v6/endorsement')
  }
})

router.post('/motoring/v6/lifetime-ban', function (req, res) {

  let specDisqual = req.session.data['specific-disqual-y-n']

  if (specDisqual === 'Yes') {
    res.redirect('/motoring/v6/endorsement')
  } else {
    res.redirect('/motoring/v6/lifetime-ban')
  }
})

router.post('/motoring/v6/endorsement', function (req, res) {

  let convictionName = req.session.data['conviction-name']
  let lifeBanYesNo = req.session.data['life-ban-yes-no']

  if (convictionName === 'Disqualification' && lifeBanYesNo === 'Lifetime ban given') {
    res.redirect('/motoring/v6/conviction-with-date')
  } else {
    res.redirect('/motoring/v6/endorsement')
  }
})

router.post('/motoring/v6/date-end', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Penalty points' || convictionName === 'Fine' || convictionName === 'Fixed penalty notice') {
    res.redirect('/motoring/v6/conviction-with-date')
  } else {
    res.redirect('/motoring/v6/date-end')
  }
})

router.post('/motoring/v6/date', function (req, res) {

  let endorseYesNo = req.session.data['endorse-yes-no']
  let convictionName = req.session.data['conviction-name']
  let lifeBanYesNo = req.session.data['life-ban-yes-no']

  if (endorseYesNo === 'Endorsement not given' && convictionName === 'Fixed penalty notice'){
    res.redirect('/motoring/v6/fpn-no-conviction')
  } else if (convictionName === 'Disqualification' && lifeBanYesNo === 'Lifetime ban given') {
    res.redirect('/motoring/v6/conviction-with-date')
  } else {
    res.redirect('/motoring/v6/date')
  }
})

router.post('/motoring/v6/conviction-length', function (req, res) {

  let convictionMeasure = req.session.data['conviction-measure']

  if (convictionMeasure === 'Penalty points') {
    res.redirect('/motoring/v6/conviction-with-date')
  } else {
    res.redirect('/motoring/v6/conviction-length')
  }
})

// MULTIPLE CONVICTIONS EXAMPLE ****************************//

// CAUTION OR CONVICTION
router.post('/multiple-journey/caution/age', function (req, res) {

  let cautionedOrConvicted = req.session.data['cautioned-or-convicted']

  if (cautionedOrConvicted === 'Conviction') {
    res.redirect('/multiple-journey/conviction/age')
  } else {
    res.redirect('/multiple-journey/caution/age')
  }
})

// CAUTION ROUTES

router.post('/multiple-journey/caution/youth-type', function (req, res) {

  let ageAtCaution = req.session.data['age-at-caution']

  if (ageAtCaution === '18 or over') {
    res.redirect('/multiple-journey/caution/type')
  } else {
    res.redirect('/multiple-journey/caution/youth-type')
  }
})

router.post('/multiple-journey/caution/conditions-end', function (req, res) {

  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if (simpleOrConditionalCaution === 'Youth caution' || simpleOrConditionalCaution === 'Simple') {
    res.redirect('/multiple-journey/caution/exit/caution-with-date')
  } else {
    res.redirect('/multiple-journey/caution/conditions-end')
  }
})

router.post('/multiple-journey/caution/conditions-end', function (req, res) {

  let conditionsMet = req.session.data['conditions-met']

  if (conditionsMet === 'No') {
    res.redirect('/multiple-journey/caution/exit/conditional-broken')
  } else {
    res.redirect('/multiple-journey/caution/conditions-end')
  }

})

router.post('/multiple-journey/caution/exit/caution-with-date', function (req, res) {

  cautionCalc (req, res);

  res.redirect('/multiple-journey/caution/exit/caution-with-date')

})

// CONVICTION ROUTES

//Over 18 exit

router.post('/multiple-journey/conviction/type', function (req, res) {

  let ageAtConviction = req.session.data['age-at-conviction']

  if (ageAtConviction === '18 or over') {
    res.redirect('/multiple-journey/conviction/over-18/type')
  } else {
    res.redirect('/multiple-journey/conviction/type')
  }
})


//Conviction type

//youth

router.post('/multiple-journey/conviction/community', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Custodial sentence') {
    res.redirect('/multiple-journey/conviction/custodial')
  } else if (convictionType === 'Discharge') {
    res.redirect('/multiple-journey/conviction/discharge')
  } else if (convictionType === 'Financial penalty') {
    res.redirect('/multiple-journey/conviction/financial-penalty')
  } else if (convictionType === 'Motoring endorsement') {
    res.redirect('/multiple-journey/conviction/date')
  } else if (convictionType === 'Hospital and guardianship orders') {
    res.redirect('/multiple-journey/conviction/hospital-guardianship-order')
  } else {
    res.redirect('/multiple-journey/conviction/community')
  }
})

//adult

router.post('/multiple-journey/conviction/over-18/community', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Custodial sentence') {
    res.redirect('/multiple-journey/conviction/over-18/custodial')
  } else if (convictionType === 'Discharge') {
    res.redirect('/multiple-journey/conviction/over-18/discharge')
  } else if (convictionType === 'Prison sentence') {
    res.redirect('/multiple-journey/conviction/over-18/custodial')
  } else if (convictionType === 'Financial penalty') {
    res.redirect('/multiple-journey/conviction/over-18/financial-penalty')
  } else if (convictionType === 'Motoring endorsement') {
    res.redirect('/multiple-journey/conviction/over-18/date')
  } else if (convictionType === 'Hospital and guardianship orders') {
    res.redirect('/multiple-journey/conviction/over-18/hospital-guardianship-order')
  } else if (convictionType === 'Prevention and reparation orders') {
    res.redirect('/multiple-journey/conviction/over-18/prevention-reparation-order')
  } else if (convictionType === 'Military convictions') {
    res.redirect('/multiple-journey/conviction/over-18/military')
  } else {
    res.redirect('/multiple-journey/conviction/over-18/community')
  }
})

//Motoring convictions

router.post('/multiple-journey/conviction/conviction-months-weeks', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Motoring endorsement') {
    res.redirect('/multiple-journey/conviction/exit/conviction-with-date')
  } else {
    res.redirect('/multiple-journey/conviction/conviction-months-weeks')
  }
})

//Financial penalties

router.post('/multiple-journey/conviction/date', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Compensation to a victim') {
    res.redirect('/multiple-journey/conviction/compensation-paid')
  } else {
    res.redirect('/multiple-journey/conviction/date')
  }
})

router.post('/multiple-journey/conviction/compensation-paid-date', function (req, res) {

  let compensationPaid = req.session.data['compensation-paid']

  if (compensationPaid === 'No') {
    res.redirect('/multiple-journey/conviction/exit/compensation-unpaid')
  } else {
    res.redirect('/multiple-journey/conviction/compensation-paid-date')
  }
})

//Custodial sentences

router.post('/multiple-journey/conviction/conviction-length', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Detention') {
    res.redirect('/multiple-journey/conviction/conviction-length-custodial-detention')
  } else if (convictionName === 'Detention and training order (DTO)') {
    res.redirect('/multiple-journey/conviction/conviction-length-custodial-dto')
  } else {
    res.redirect('/multiple-journey/conviction/conviction-length')
  }
})

router.post('/multiple-journey/conviction/conviction-months-weeks', function (req, res) {

  let isConvictionDateKnown = req.session.data['is-conviction-date-known']

  if (isConvictionDateKnown === 'no') {
    res.redirect('/multiple-journey/conviction/exit/conviction-unknown-date')
  } else {
    res.redirect('/multiple-journey/conviction/conviction-months-weeks')
  }
})

// CAUTION OR CONVICTION
router.post('/v4/caution/age', function (req, res) {

  let cautionedOrConvicted = req.session.data['cautioned-or-convicted']

  if (cautionedOrConvicted === 'Conviction') {
    res.redirect('/v4/conviction/age')
  } else {
    res.redirect('/v4/caution/age')
  }
})

// CAUTION ROUTES

router.post('/v4/caution/youth-type', function (req, res) {

  let ageAtCaution = req.session.data['age-at-caution']

  if (ageAtCaution === '18 or over') {
    res.redirect('/v4/caution/type')
  } else {
    res.redirect('/v4/caution/youth-type')
  }
})

router.post('/v4/caution/conditions-end', function (req, res) {

  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if (simpleOrConditionalCaution === 'Youth caution' || simpleOrConditionalCaution === 'Simple') {
    res.redirect('/v4/caution/exit/caution-with-date')
  } else {
    res.redirect('/v4/caution/conditions-end')
  }
})

router.post('/v4/caution/conditions-end', function (req, res) {

  let conditionsMet = req.session.data['conditions-met']

  if (conditionsMet === 'No') {
    res.redirect('/v4/caution/exit/conditional-broken')
  } else {
    res.redirect('/v4/caution/conditions-end')
  }

})

router.post('/v4/caution/exit/caution-with-date', function (req, res) {

  cautionCalc (req, res);

  res.redirect('/v4/caution/exit/caution-with-date')

})

// CONVICTION ROUTES

//Over 18 exit

router.post('/v4/conviction/type', function (req, res) {

  let ageAtConviction = req.session.data['age-at-conviction']

  if (ageAtConviction === '18 or over') {
    res.redirect('/v4/conviction/over-18/type')
  } else {
    res.redirect('/v4/conviction/type')
  }
})


//Conviction type

//youth

router.post('/v4/conviction/community', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Custodial sentence') {
    res.redirect('/v4/conviction/custodial')
  } else if (convictionType === 'Discharge') {
    res.redirect('/v4/conviction/discharge')
  } else if (convictionType === 'Financial penalty') {
    res.redirect('/v4/conviction/financial-penalty')
  } else if (convictionType === 'Motoring endorsement') {
    res.redirect('/v4/conviction/date')
  } else if (convictionType === 'Hospital and guardianship orders') {
    res.redirect('/v4/conviction/hospital-guardianship-order')
  } else {
    res.redirect('/v4/conviction/community')
  }
})

//adult

router.post('/v4/conviction/over-18/community', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Custodial sentence') {
    res.redirect('/v4/conviction/over-18/custodial')
  } else if (convictionType === 'Discharge') {
    res.redirect('/v4/conviction/over-18/discharge')
  } else if (convictionType === 'Prison sentence') {
    res.redirect('/v4/conviction/over-18/custodial')
  } else if (convictionType === 'Financial penalty') {
    res.redirect('/v4/conviction/over-18/financial-penalty')
  } else if (convictionType === 'Motoring endorsement') {
    res.redirect('/v4/conviction/over-18/date')
  } else if (convictionType === 'Hospital and guardianship orders') {
    res.redirect('/v4/conviction/over-18/hospital-guardianship-order')
  } else if (convictionType === 'Prevention and reparation orders') {
    res.redirect('/v4/conviction/over-18/prevention-reparation-order')
  } else if (convictionType === 'Military convictions') {
    res.redirect('/v4/conviction/over-18/military')
  } else {
    res.redirect('/v4/conviction/over-18/community')
  }
})

//Motoring convictions

router.post('/v4/conviction/conviction-months-weeks', function (req, res) {

  let convictionType = req.session.data['conviction-type']

  if (convictionType === 'Motoring endorsement') {
    res.redirect('/v4/conviction/exit/conviction-with-date')
  } else {
    res.redirect('/v4/conviction/conviction-months-weeks')
  }
})

//Financial penalties

router.post('/v4/conviction/date', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Compensation to a victim') {
    res.redirect('/v4/conviction/compensation-paid')
  } else {
    res.redirect('/v4/conviction/date')
  }
})

router.post('/v4/conviction/compensation-paid-date', function (req, res) {

  let compensationPaid = req.session.data['compensation-paid']

  if (compensationPaid === 'No') {
    res.redirect('/v4/conviction/exit/compensation-unpaid')
  } else {
    res.redirect('/v4/conviction/compensation-paid-date')
  }
})

//Custodial sentences

router.post('/v4/conviction/conviction-length', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Detention') {
    res.redirect('/v4/conviction/conviction-length-custodial-detention')
  } else if (convictionName === 'Detention and training order (DTO)') {
    res.redirect('/v4/conviction/conviction-length-custodial-dto')
  } else {
    res.redirect('/v4/conviction/conviction-length')
  }
})

router.post('/v4/conviction/conviction-months-weeks', function (req, res) {

  let isConvictionDateKnown = req.session.data['is-conviction-date-known']

  if (isConvictionDateKnown === 'no') {
    res.redirect('/v4/conviction/exit/conviction-unknown-date')
  } else {
    res.redirect('/v4/conviction/conviction-months-weeks')
  }
})


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

  if (convictType == "Youth rehabilitation order") {
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

router.post('/v3/caution/conditions-end', function (req, res) {

  let youthSimpleOrConditionalCaution = req.session.data['youth-simple-or-conditional-caution']
  let simpleOrConditionalCaution = req.session.data['simple-or-conditional-caution']

  if (simpleOrConditionalCaution === 'Youth caution' || simpleOrConditionalCaution === 'Simple') {
    res.redirect('/v3/caution/exit/caution-with-date')
  } else {
    res.redirect('/v3/caution/conditions-end')
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
  } else if (convictionType === 'Hospital and guardianship orders') {
    res.redirect('/v3/conviction/hospital-guardianship-order')
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

//Financial penalties

router.post('/v3/conviction/date', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Compensation to a victim') {
    res.redirect('/v3/conviction/compensation-paid')
  } else {
    res.redirect('/v3/conviction/date')
  }
})

router.post('/v3/conviction/compensation-paid-date', function (req, res) {

  let compensationPaid = req.session.data['compensation-paid']

  if (compensationPaid === 'No') {
    res.redirect('/v3/conviction/exit/compensation-unpaid')
  } else {
    res.redirect('/v3/conviction/compensation-paid-date')
  }
})

//Custodial sentences

router.post('/v3/conviction/conviction-length', function (req, res) {

  let convictionName = req.session.data['conviction-name']

  if (convictionName === 'Detention') {
    res.redirect('/v3/conviction/conviction-length-custodial-detention')
  } else if (convictionName === 'Detention and training order (DTO)') {
    res.redirect('/v3/conviction/conviction-length-custodial-dto')
  } else {
    res.redirect('/v3/conviction/conviction-length')
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
