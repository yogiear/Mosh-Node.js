// // // // // function sayHello(name) {
// // // // //     console.log('Hello ' + name);
// // // // // }

// // // // // sayHello('Brother');

// // // // var text = '';
// // // // console.log(global.text);

// // // console.log(module);

// // // const logger = require('./logger');
// // const log = require('./logger');

// // // logger.log('message');
// // log('message');

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

const os = require('node:os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);