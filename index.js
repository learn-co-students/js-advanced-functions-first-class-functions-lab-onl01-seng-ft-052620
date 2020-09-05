// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
  }

  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
  }

  const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ]

  const createFareMultiplier = (multiplier) => {
          return   function (value) {
          return value * multiplier
      }
  }
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
 
function selectDifferentDrivers (drivers, funct) {
    return funct(drivers)
}