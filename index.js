// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) =>{
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (mulitiplier) => {
    return function (num) {
        return num* mulitiplier
    }
}

const fareDoubler =  createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(Drivers, functions){
    return functions(Drivers)
}