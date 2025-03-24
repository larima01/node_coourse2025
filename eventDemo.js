import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello ' + name);
}

function goodByHandler(name){
    console.log('Goodbye ' + name);
}

//Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByHandler);

//Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

//error handler
myEmitter.on('error', (err) => {
    console.log('An error Occured:', err);
});

//Simulates error
myEmitter.emit('error', new Error('Something went wrong'));