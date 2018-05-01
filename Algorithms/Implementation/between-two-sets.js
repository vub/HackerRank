'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the getTotalX function below.
 */
function getTotalX(a, b) {
    /*
     * Write your code here.
     */
    let minB = Math.min(...b);
    const factors = number => Array
        .from(Array(number + 1), (v, i) => i)
        .filter(i => number % i === 0);
    
    let factorsB = factors(minB).filter((i) => {
        let check = true;
        b.forEach((j) => {
            if ((j % i) != 0) {
                check = false;
            }
        })
        return check;
    })
    
    let result = factorsB.filter((i) => {
        let check = true;
        a.forEach((j) => {
            if ((i % j) != 0) {
                check = false;
            }
        })
        return check;
    }).length;

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    ws.write(total + "\n");

    ws.end();
}
