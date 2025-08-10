function getStringLength(input: string): number {
    // Initialize a counter to 0
    let length = 0;

    // Loop through each character in the string until undefined
    while (input[length] !== undefined) {
        length++;
    }

    // Return the total count
    return length;
}

// Example usage
const myString = "Hello, world!";
console.log(getStringLength(myString)); // Output: 13
