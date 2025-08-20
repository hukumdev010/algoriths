//The Seive of Eratosthenes is an efficient way to generate all prime number up to a given number n.

// Algorithm Steps:
// 1. Create a boolean array isPrime of size n +1, initialized to true.
// 2. Set isPrime[0] and isPrime[1] to false, as 0 and 1 are not prime numbers.
// 3. For each number p from 2 to sqrt(n):
//    a. If isPrime[p] is true, then p is a prime number.
//    b. Mark all multiples of p (from p*p to n) as false (not prime).
// 4. The remaining true values in isPrime represent prime numbers.

function sieveOfEratosthenes(n: number): number[] {
    const isPrime: boolean[] = new Array(n + 1).fill(true);
    console.log(isPrime)
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

    for (let p = 2; p * p <= n; p++) {
        console.log(p)
        if (isPrime[p]) {
            for (let multiple = p * p; multiple <= n; multiple += p) {
                console.log("multiple", multiple)
                isPrime[multiple] = false; // mark multiples of p as not prime
            }
        }
    }

    // Collecting all prime numbers
    const primes: number[] = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

//Useage
sieveOfEratosthenes(30); // returns [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]