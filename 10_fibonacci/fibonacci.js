const fibonacci = function (n) {
    n = Number(n);
    if (n === 1 || n === 2) {
        return 1;
    } else if (n < 0){
        return "OOPS";
    } else {
        const nMinus1 = fibonacci(n - 1);
        const nMinus2 = fibonacci(n - 2);
        const result = nMinus1 + nMinus2;
        return result;
    }
};

// Do not edit below this line
module.exports = fibonacci;
