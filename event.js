const EventEmitters = require('events')
const myEmitters = new EventEmitters()


myEmitters.on('finish',()=>{
    console.log('event 1 completed')
})

myEmitters.once('finish',()=>{
    console.log('event 2 completed run only once')
})

myEmitters.on('finish',()=>{
    console.log('event 3 completed')
})


console.log('A. Premaring to anouness')

myEmitters.emit('finish')
console.log('B. anouncemment completed')

console.log('he budy')
