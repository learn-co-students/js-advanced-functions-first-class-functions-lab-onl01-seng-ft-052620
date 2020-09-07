// Code your solution in this file!
//should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function(drivers) {return drivers.slice(0,2)}

// should return an array of the last two drivers
const returnLastTwoDrivers = function(drivers) {return drivers.slice(-2)}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare){return fare * integer}
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, something) {
    return something(drivers)
}