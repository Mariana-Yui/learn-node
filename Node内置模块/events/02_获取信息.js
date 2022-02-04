const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('click', (...args) => {
  console.log('监听1到click事件', args);
});

const listener2 = (...args) => {
  console.log('监听2到click事件', args);
};
emitter.on('click', listener2);

emitter.on('tap', (args) => {
  console.log(args);
});

console.log(emitter.getMaxListeners());
console.log(emitter.eventNames());
console.log(emitter.listenerCount('click'));
console.log(emitter.listeners('click'));
