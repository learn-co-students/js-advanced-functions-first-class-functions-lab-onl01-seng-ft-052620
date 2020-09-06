// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
 
  return arr.slice(0,2)
}
function returnLastTwoDrivers(arr) {
 
  return arr.slice(2,4)
}

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
 return function (x){
   return fare * x
   
 }
}

const fareDoubler = createFareMultiplier(2) 
const fareTripler = createFareMultiplier(3) 


function selectDifferentDrivers(drivers, selectingDrivers){
  
  return selectingDrivers(drivers)

}