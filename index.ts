// src/index.ts

// A simple class
class Greeter {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hello, ${this.name}!`;
  }
}

// A simple function
function add(a: number, b: number): number {
  return a + b;
}

// Usage
const greeter = new Greeter("Hukum");
console.log(greeter.greet()); // Output: Hello, Hukum!

console.log("Sum:", add(5, 7)); // Output: Sum: 12
