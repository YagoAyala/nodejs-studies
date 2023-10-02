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

}

// exit back to terminal