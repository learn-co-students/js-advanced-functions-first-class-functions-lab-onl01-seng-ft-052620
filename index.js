const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers(drivers){
   return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(2,5)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integers){
    return function(integer) {
        return integer * integers
    }
}

const fareDoubler = function(fare) {
 return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, selectMethod) {
    return selectMethod(drivers)
}
