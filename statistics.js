function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function standardDeviation(arr) {
    const mean = average(arr);
    const squaresSum = arr.reduce((acc, val) => acc + (val - media) ** 2, 0);
    return Math.sqrt(squaresSum / arr.length);
}

module.exports = { average, standardDeviation };
