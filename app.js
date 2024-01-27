const logger = require('./logger');

logger.logging('message');

// // // // const path = require('path');

// // // // var pathObj = path.parse(__filename);

// // // // console.log(pathObj);

// // // const os = require('node:os');

// // // var totalMemory = os.totalmem();
// // // var freeMemory = os.freemem();

// // // console.log('Total Memory: ' + totalMemory);
// // // console.log(`Total Memory: ${totalMemory}`);
// // // console.log(`Free Memory: ${freeMemory}`);

// // const fs = require('node:fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// // fs.readdir('../../Mosh Course/Mosh-GIT', function(err, files) {
// //     if (err) {
// //         console.log('Error', err);
// //     } else {
// //         console.log('Result', files);
// //     }
// // });

// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = require('./logger');

// myEmitter.on('event', (arg) => {
//   console.log('an event occurred!', arg);
// });

// myEmitter.emit('event', {id: 1, url: 'http://'});

// myEmitter.log('message')