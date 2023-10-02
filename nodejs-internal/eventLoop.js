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
    // Node looks at pendingTimers and sees if any functions are ready to be called. (setTimeout, setInterval)

    // Node looks at pendingOSTaks and pendingOperations and calls relevant callbacks.

    // Pause execution. And just continue when:
    // - a new pendingOSTask is done.
    // - a new pendingOperation is done.
    // - a timer is about to complete.

    // Look at pendingTimers. (setImmediate).

    // Handle any 'close' events (Nodejs Steams).
}

// exit back to terminal