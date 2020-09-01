function returnFirstTwoDrivers(drivers){
  const answer = (drivers) => drivers.slice(0,2)
  return answer(drivers);
}

function returnLastTwoDrivers(drivers){
  const answer = (drivers) => drivers.slice(-2)
  return answer(drivers);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return (fare)=>{return fare*multiplier}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFn){
  return driverFn(drivers);
}