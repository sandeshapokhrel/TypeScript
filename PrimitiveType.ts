let sales: number = 123_456_789; //we can also seperate digits in type script
let cource: string = 'TypeScript'; //typescript is able to know its type according to the value given
let is_published: boolean = true;
let level; // if we dont initalize the variable it will assume the variable is any

function render(document: any) {
    console.log(document);
}