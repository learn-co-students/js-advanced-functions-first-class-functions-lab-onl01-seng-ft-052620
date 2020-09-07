const returnFirstTwoDrivers = function(drivers) {
    let result = []
    result.push(drivers[0])
    result.push(drivers[1])
    return result
}

const returnLastTwoDrivers = function(drivers) {
    let result = []
    result.push(drivers[drivers.length-2])
    result.push(drivers[drivers.length-1])

    return result
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num1) {
    return function() {
        return num1 * num1
    }
}

function fareDoubler(fare) {
    return fare*2
}

function fareTripler(fare) {
    return fare*3
}

const selectDifferentDrivers = function(arrayOfDrivers, driver) {
    return driver(arrayOfDrivers)
}