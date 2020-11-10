const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteriesTotal(runningTotal, element){
    return element + runningTotal;
}

// Code your solution here
let totalBatteries = batteryBatches.reduce(batteriesTotal, 0);

