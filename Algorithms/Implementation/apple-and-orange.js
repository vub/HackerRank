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
 * Complete the countApplesAndOranges function below.
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    /*
     * Write your code here.
     */
    console.log(apples.filter(x => (x >= (s - a) && x <= (t - a))).length);
    console.log(oranges.filter(x => (x <= 0 && x <= (t - b)) && x >= (s - b)).length);
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apple = readLine().split(' ').map(appleTemp => parseInt(appleTemp, 10));

    const orange = readLine().split(' ').map(orangeTemp => parseInt(orangeTemp, 10));

    countApplesAndOranges(s, t, a, b, apple, orange);
}
