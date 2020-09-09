// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    return [ drivers[0], drivers[1] ]
    
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = function(integer) {
 
  return function(number) {
        return integer * number
    }

}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
return func(drivers)
}