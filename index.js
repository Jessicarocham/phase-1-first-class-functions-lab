const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers(driversArray1) {
  return driversArray1.slice(0, 2);
}
function returnLastTwoDrivers(driversArray2) {
  return driversArray2.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
  return function () {
    return 5 * 5;
  };
}

function fareDoubler() {
  const fare = 10;
  return fare * 2;
}

function fareTripler() {
  const fare = 12;
  return fare * 3;
}

function selectDifferentDrivers(drivers, randomDrivers) {
  return randomDrivers(drivers);
}
