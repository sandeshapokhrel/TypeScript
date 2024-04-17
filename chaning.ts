// define nested objects
const car = {
    engine: {
        start() {
            console.log("Engine started");
            return this; // returning 'this' enables chaining
        }
    },
    wheels: {
        rotate() {
            console.log("Wheels rotating");
            return this; // returning 'this' enables chaining
        }
    }
};

// chain property accesses and method calls
car.engine.start().wheels.rotate(); // output: Engine started Wheels rotating
