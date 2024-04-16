//Event/Action - Specific Tsk


// file -> open - event - open file
// file -> Write - event - wrte utf
// file -> close - event - save


const libEvents = require(`events`)


//event manager
const eventManager = new libEvents.EventEmitter()

//manager, event/action and task
eventManager.on('lunch', function () {
    console.log('I am having lunch');
})

eventManager.on('dinner', function () {
    console.log('I am having dinner');
})

// setTimeout(() => {
//     eventManager.emit('lunch')
// }, 10000)


// setTimeout(() => {
//     eventManager.emit('dinner')
// }, 20000)


setInterval(() => {
    eventManager.emit('lunch')
}, 10000)