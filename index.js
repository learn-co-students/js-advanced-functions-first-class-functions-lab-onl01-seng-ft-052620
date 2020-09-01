const returnFirstTwoDrivers = function(arr){ return arr.slice(0, 2)}

const returnLastTwoDrivers = function(arr){ return arr.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
   return function(fare){return fare * number}
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(array, func){
    return func(array)
}

