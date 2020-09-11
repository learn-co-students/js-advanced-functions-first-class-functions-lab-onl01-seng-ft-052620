const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return fare*integer
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(array, fn) {
    return fn(array)
}