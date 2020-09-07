// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {return [array[0], array[1]]}
const returnLastTwoDrivers = function(array) {return [array[array.length -2], array[array.length - 1]] }
// const returnLastTwoDrivers = function(array) {console.log('TEST', array[3])}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return integer * fare
    }
}

function fareDoubler(fare) {
    const doubled = createFareMultiplier(2)(fare)
    return doubled
}

function fareTripler(fare) {
    const tripled = createFareMultiplier(3)(fare)
    return tripled
}

function selectDifferentDrivers(array, chooser) {
    return chooser(array)
}