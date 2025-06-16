const { average, standardDeviation } = require('./statistics');
const { graphGenerator } = require('./graphs');

const data = [10, 20, 30, 40, 50];

console.log('Average:', average(data));
console.log('Standard Deviation:', standardDeviation(data));

graphGenerator('graph.png', ['A', 'B', 'C', 'D', 'E'], data).then(() => {
    console.log('Graph generated');
});
