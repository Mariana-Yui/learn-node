const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('click', (...args) => {
  console.log('监听1到click事件', args);
});

const listener2 = (...args) => {
  console.log('监听2到click事件', args);
};
emitter.on('click', listener2);

setTimeout(() => {
  emitter.emit('click', 'curry', 'james', 'kobe');
  emitter.off('click', listener2);
  emitter.emit('click', 'curry', 'james', 'kobe');
}, 2000);
