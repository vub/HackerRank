'use strict';

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
 * Complete the plusMinus function below.
 */
function plusMinus(arr) {
    /*
     * Write your code here.
     */
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    arr.forEach((number) => {
        if ( number == 0 ) {
            zero++;
        } else {
            if ( number > 0 ) {
                positive++;
            } else {
                negative++;
            }
        }
    })
    console.log( parseFloat(positive / arr.length).toFixed(6));
    console.log( parseFloat(negative / arr.length).toFixed(6));
    console.log( parseFloat(zero / arr.length).toFixed(6));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
