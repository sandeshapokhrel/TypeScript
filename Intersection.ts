// Define two types representing different kinds of data
type Dog = {
    bark(): void;
};

type Robot = {
    move(): void;
};

// Define a type that represents an object that is both a Dog and a Robot
type DogRobot = Dog & Robot;

// Create an object that satisfies both Dog and Robot types
let dogRobot: DogRobot = {
    bark() {
        console.log("Woof woof!");
    },
    move() {
        console.log("Moving forward...");
    }
};

// Now, you can use the dogRobot object
dogRobot.bark(); // Output: Woof woof!
dogRobot.move(); // Output: Moving forward...
