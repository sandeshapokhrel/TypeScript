//eg: represent tshirt
// const small=1;
// const medium=2;
// const large=3;
//another way we can use enum
enum Size { small='s', medium='m', large='l'}; //inside braces we use member

let mysize:Size=Size.medium;

console.log(mysize);

// Enums in TypeScript are actually a set of numbered constants
// By default, the first member has a value of 0, and each subsequent member's value is incremented by 1