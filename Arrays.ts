// in js we can use array like, let number = [1, 2,'3']; in type script :-

// Define a TypeScript array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Print the array to the console
console.log("Original Array:", numbers);

// Accessing elements of the array
console.log("First Element:", numbers[0]); // Output: 1
console.log("Second Element:", numbers[1]); // Output: 2

// Modifying elements of the array
numbers[2] = 10;
console.log("Modified Array:", numbers); // Output: [1, 2, 10, 4, 5]

// Adding elements to the array
numbers.push(6);
console.log("Array After Pushing:", numbers); // Output: [1, 2, 10, 4, 5, 6]

// Removing elements from the array
let poppedElement = numbers.pop();
console.log("Array After Popping:", numbers); // Output: [1, 2, 10, 4, 5]
console.log("Popped Element:", poppedElement); // Output: 6

// Iterating over the array using a for loop
console.log("Iterating Over Array Using for Loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log("Element at index", i, ":", numbers[i]);
}

// Iterating over the array using forEach method
console.log("Iterating Over Array Using forEach Method:");
numbers.forEach((num, index) => {
    console.log("Element at index", index, ":", num);
});
