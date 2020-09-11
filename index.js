// Code your solution in this file!
const returnFirstTwoDrivers = function (driversArray){
  return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = function (driversArray){
  return driversArray.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplyer){
  return function(fare){
    return multiplyer * fare;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (driversArray, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(driversArray);
};