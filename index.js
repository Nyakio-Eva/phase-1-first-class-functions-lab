const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
  };
const drivers=['Antonia' , 'Nuru' , 'Amari', 'Mo'];
//console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
//console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
//console.log(selectingDrivers[0]);

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    };
}
const fareDoubler = createFareMultiplier(2);
//console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
//console.log(fareTripler(12));

function selectDifferentDrivers(drivers, selectingDrivers){
    if(returnFirstTwoDrivers === selectingDrivers){
        return drivers.slice(0,2);
    }
    else if(returnLastTwoDrivers === selectingDrivers){
        return drivers.slice(-2);
    }
}
console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers));
