
const fs = require('fs');

let inputData = fs.readFileSync('input', 'utf8').split(",").map(Number);

for(let i = 0; i < 100; i++){
    for(let j = 0; j < 100; j++){
        let newArray = [...inputData];
        newArray[1] = i;
        newArray[2] = j;
        let answer = runProgram(newArray)
        // console.log(answer);
        if (answer === 19690720){
            console.log(100 * i + j);
            return;
        }
        // console.log(i, j);
    }
}

function runProgram(program){
    for(let i = 0; i < program.length; i = 4 + i){
    
        // check for addition opcode 1
        if(program[i] === 1){
            program[program[i+3]] = program[program[i+1]] + program[program[i+2]];
        }
        else if (program[i] === 2)
            program[program[i+3]] = program[program[i+1]] * program[program[i+2]];
        else if (program[i] === 99)
            return program[0];
        
    }
}