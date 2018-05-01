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
 * Complete the diagonalDifference function below.
 */
function diagonalDifference(a) {
    /*
     * Write your code here.
     */
    let total = 0;
    let n = a.length;
    for ( let i = 0; i < n; i++ ) {
        total += (a[i][i] - a[i][n - 1 - i]);
    }
    return Math.abs(total);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let a = Array(n);

    for (let aRowItr = 0; aRowItr < n; aRowItr++) {
        a[aRowItr] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    let result = diagonalDifference(a);

    ws.write(result + "\n");

    ws.end();
}
