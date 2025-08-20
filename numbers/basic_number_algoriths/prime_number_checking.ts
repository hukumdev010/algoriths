//Prime Number Checking

function isPrimeNaive(n: number): boolean {
    if (n <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i < n; i++) { // check divisibility from 2 to n-1
        if (n % i === 0) {
            return false; // found a divisor, so n is not prime
        }
    }
    return true; // no divisors found, so n is prime
}

// Example usage:
console.log(isPrimeNaive(11)); // true
console.log(isPrimeNaive(4));  // false