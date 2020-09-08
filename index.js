// Code your solution in this file!
 // .first(2) should give you the first 2 same with .last(2) i think. 

 const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
 }
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

createFareMultiplier = (int) => (fare) => int * fare;
//createFareMultiplier requires two parameters, but not all at once. It's a function asking for just "int", that returns a function asking for "fare"

function fareDoubler(num){
    return (createFareMultiplier(2)(num));
}
// SO fareDoubler is obviously doubling the fare so we can take createFareMultiplier and give it the first parameter of '2' and have the argument passed in to fareDoubler be the second argument needed for the createFareMultiplier.
function fareTripler(num){
    return (createFareMultiplier(3)(num));
}
//same with tripler.

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}
