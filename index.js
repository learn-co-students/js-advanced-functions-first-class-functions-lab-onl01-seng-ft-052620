// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
    const f = function(){
        return [drivers[0], drivers[1]]
    }
    return f()
}

function returnLastTwoDrivers(drivers){
    const f = function(){
        return [drivers[drivers.length-2], drivers[drivers.length-1]]
    }
    return f()
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
        return num*fare
    }
}

function fareDoubler(fare){
    const f = createFareMultiplier
    return f(2)(fare)
}

function fareTripler(fare){
    const f = createFareMultiplier
    return f(3)(fare)
}

function selectDifferentDrivers(drivers, f){
    return f(drivers)
}
