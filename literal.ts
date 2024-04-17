// dfine a type with literal values
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

// function that takes a DayOfWeek as parameter
function printDay(day: DayOfWeek): void {
    console.log("Today is", day);
}

// call the function with a literal value
printDay("Monday"); // output: Today is Monday

// Trying to call the function with an invalid value will result in a TypeScript error
// printDay("Saturday"); // TypeScript error: Argument of type '"Saturday"' is not assignable to parameter of type 'DayOfWeek'.
