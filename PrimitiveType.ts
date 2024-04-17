 //we can also seperate digits in type script
//typescript is able to know its type according to the value given
// if we dont initalize the variable it will assume the variable is any

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level: any;

function render(document: any) {
    console.log(document);
}

// Primitive types: number, string, boolean, null, undefined

// Number
let age: number = 30;

// String
let personName: string = "sandesha";


// Boolean
let isActive: boolean = true;

// Null
let nullableValue: null = null;

// Undefined
let undefinedValue: undefined = undefined;
