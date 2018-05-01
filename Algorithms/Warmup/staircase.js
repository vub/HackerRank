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
 * Complete the staircase function below.
 */
function staircase(n) {
    /*
     * Imparative solution.
     */

    
    // for (let i = 1; i <= n; i++) {
    //     console.log(' '.repeat(n - i) + '#'.repeat(i));
    // }

    /*
     * Recusive solution. 
     */
    
    let printCase = function(n, stair) {
        if (n < 0)
            return;
        console.log(' '.repeat(n) + '#'.repeat(stair));
        printCase(n-1, stair + 1);
    }
    
    printCase(n-1, 1);
    
    
    

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
