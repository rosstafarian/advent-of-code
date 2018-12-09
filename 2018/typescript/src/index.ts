import { calculateFrequency, findDuplicateFrequency } from './day-01/day1';
import { parseData } from './helpers';

console.log('Day 1.1 Solution');
let startTime = new Date();
console.log(calculateFrequency(parseData('data/day1.ross.txt')));
let endTime = new Date();
let timeElapsed = endTime.getTime() - startTime.getTime();
console.log(`Star found in ${timeElapsed}ms.`);

console.log('Day 2.2 Solution');
startTime = new Date();
console.log(findDuplicateFrequency(parseData('data/day1.ross.txt')));
endTime = new Date();
timeElapsed = endTime.getTime() - startTime.getTime();
console.log(`Star found in ${timeElapsed}ms.`);
