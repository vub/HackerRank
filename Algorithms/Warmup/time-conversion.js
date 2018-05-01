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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let parseTime = function (s) {
        let sArr = s.split(':');
        let hours = parseInt(sArr[0]);
        hours = hours == 12 ? 0 : hours;
        let minutes = parseInt(sArr[1]);
        let seconds = parseInt(sArr[2].slice(0,2));
        let noon = sArr[2].slice(2,5) == 'PM' ? 43200 : 0;
        return hours * 60 * 60 + minutes * 60 + seconds + noon;
    }
    
    let formatNumber = function (number) {
        return ("0" + number).slice(-2);
    }
        
    let countMilitaryTime = function (total) {
        // return total;
        let seconds = total % 60;
        total = total - seconds;
        let minutes = total % 3600 / 60;
        total = total - minutes * 60;
        let hours = total / 3600;
        return formatNumber(hours) + ':' + formatNumber(minutes) + ':' + formatNumber(seconds);
    }
    

     
    return countMilitaryTime(parseTime(s));

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
