/* global $ */

// var express = require('express')
// var parseurl = require('parseurl')
// var session = require('express-session')
// var app = express()

// const express = require('express')
// const router = express.Router()

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// function getMonthFromString(mon){
//
//    var d = Date.parse(mon + "1, 2012");
//    if(!isNaN(d)){
//       return new Date(d).getMonth() + 1;
//    }
//    return -1;
//  }

// module.exports = app
