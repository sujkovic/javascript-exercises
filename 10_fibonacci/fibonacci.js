const fibonacci = function(num) {
    if (num < 0) {return 'OOPS'}
    let fibNum = 1;
    let fibNums = [fibNum, fibNum];
    for (let i = 1; i < num -1; i++) {
        fibNum = fibNums[i] + fibNums[i-1];
        fibNums.push(fibNum);
    }
    return fibNum;
};

// Do not edit below this line
module.exports = fibonacci;
