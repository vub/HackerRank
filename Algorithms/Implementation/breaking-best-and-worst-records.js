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
 * Complete the breakingRecords function below.
 */
function breakingRecords(score) {
    /*
     * Write your code here.
     */
    let minimum = score[0];
    let maximum = score[0];
    let min = 0;
    let max = 0;
    score.forEach((game_score, index) => {
        if (game_score < minimum) {
            min++;
            minimum = game_score;
        }
        if (game_score > maximum) {
            max++;
            maximum = game_score;
        }
    });
    return [max, min];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const score = readLine().split(' ').map(scoreTemp => parseInt(scoreTemp, 10));

    let result = breakingRecords(score);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
