//in union we can give a variable or function more than one type 

// Define a function 'printIdOrName' that accepts a parameter of type 'number' or 'string'
function printIdOrName(input: number | string): void {
    console.log("Input:", input);
}

// Call the function with a number argument
printIdOrName(123); // Output: Input: 123

// Call the function with a string argument
printIdOrName("John"); // Output: Input: John
