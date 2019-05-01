/* global $ */

// var months = [ "January", "February", "March", "April", "May", "June",
//                "July", "August", "September", "October", "November", "December" ];

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Converting month number to Name

function convertCautionMonthToString() {

  var d = req.session.data['caution-month'];

  d = d.getMonth();

}

// function getMonthFromString(mon){
//
//    var d = Date.parse(mon + "1, 2012");
//    if(!isNaN(d)){
//       return new Date(d).getMonth() + 1;
//    }
//    return -1;
//  }
