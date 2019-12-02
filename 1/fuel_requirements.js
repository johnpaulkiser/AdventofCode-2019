/*

Fuel required to launch a given module is based on its mass. 
Specifically, to find the fuel required for a module, 
take its mass, divide by three, round down, and subtract 2.

*/


//handle input



// part1
function part1(){
    const fs = require('fs');

    const inputData = fs.readFileSync('input', 'utf8').split("\n");
    let totalfuel = 0;
    for (const mass of inputData) {
        totalFuel += Math.floor(parseInt(mass)/3) - 2; 
    }
    return totalfuel;
}


function part2(){

    const fs = require('fs');
    const inputData = fs.readFileSync('input', 'utf8').split("\n");

    let totalfuel = 0;
    for (const mass of inputData) {
        totalfuel += getRecursiveFuel(mass);
    }

    function getRecursiveFuel(mass){
        if(mass < 6) return 0;
        else {
            let newMass = Math.floor(parseInt(mass)/3) - 2;
            return getRecursiveFuel(newMass) + newMass; 
        }
    }
    return totalfuel;
}

console.log(part2());





