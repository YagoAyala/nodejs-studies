// node eventLoop.js

const pendingTimers = [];
const pedingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running;
myFile.runContents();

const shouldContinue = () => {
    // Check one: Any peding setTimeout, setInterval and setImmediate ?
    // Check two: Any peinding OS tasks ?
    // Check  three = Any peding long running operations ?
    return pendingTimers.length || pedingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one "tick"
while(shouldContinue()) {
    // 1- Node looks at pendingTimers and sees if any functions are ready to be called. (setTimeout, setInterval)

    // 2- Node looks at pendingOSTaks and pendingOperations and calls relevant callbacks.

    // 3- Pause execution. And just continue when:
    // - a new pendingOSTask is done.
    // - a new pendingOperation is done.
    // - a timer is about to complete.

    // 4- Look at pendingTimers. (setImmediate).

    // 5- Handle any 'close' events (Nodejs Streams).
}

// exit back to terminal