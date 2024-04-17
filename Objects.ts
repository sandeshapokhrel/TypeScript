// let employee ={id: 1};
// employee.name=  'sandesha' this is valid in JS but in TS:-

// Define an object named 'employee'
let employee: {
    id: number,         // Property 'id' of type number
    name: string        // Property 'name' of type string
} = {                   // Initialize the object with the following values:
    id: 1,              // Value of 'id' property is 1
    name: 'sandesha'    // Value of 'name' property is 'sandesha'
};

// Modify the 'id' property of the 'employee' object
employee.id = 2;

// Modify the 'name' property of the 'employee' object
employee.name = 'neon';
