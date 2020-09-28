// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
    if (driversArray.length >= 2) {
        return driversArray.slice(0,2);
    }
    return driversArray
}

const returnLastTwoDrivers = function(driversArray){
    if (driversArray.length >= 2){
        return driversArray.slice(-2)
    }
    return driversArray
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareMultiplier){
    return function(fare){
        return fare * fareMultiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, driversFunction){
    return driversFunction(drivers)
}