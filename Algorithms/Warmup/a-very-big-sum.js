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
 * Complete the aVeryBigSum function below.
 */
function aVeryBigSum(n, ar) {
    /*
     * Write your code here.
     */
    let total = 0;
    for ( let i = 0; i < n; i++ ) {
        total += ar[i];
    }
    return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = aVeryBigSum(n, ar);

    ws.write(result + "\n");

    ws.end();
}
