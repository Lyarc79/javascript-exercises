const sumAll = function(x, y) {
    let finalSum = 0;
    if (x > y){
        [x, y] = [y, x];
    } else if (x < 0 || y < 0 || typeof x == !'number' || typeof y !== 'number'){
        return "ERROR";
    }
    for (let i = x; i <= y; i++){
        finalSum += i;
    }
    return finalSum;
}

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
