function bla() {

var convictDay = document.getElementById("day").value;
var convictMonth = document.getElementById("month").value;
var convictYear = document.getElementById("year").value;

//convert to number
convictDay = parseInt(convictDay);
convictMonth = parseInt(convictMonth) - 1;
convictYear = parseInt(convictYear);

//assemble convict date
var convictDate = new Date(convictYear,convictMonth,convictDay);

// calculation
var spentDate = new Date();

// motoring

spentDate = new Date(convictYear,convictMonth + 6,convictDay);

//tests
console.log(convictDay);
console.log(convictMonth);
console.log(convictYear);
// console.log(convictDate);

//display in correct format
var out = document.getElementById("convict-date");
out.innerHTML = convictDate;

var out = document.getElementById("spent-date");
out.innerHTML = spentDate;

}
