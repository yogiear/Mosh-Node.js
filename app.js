// const log = require('./logger');

// log.logging('okay.');
// console.log(log);

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
});

logger.log('message');

// //Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});
