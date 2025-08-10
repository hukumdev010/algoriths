function countVowelsAndConsonants(input: string): { vowels: number; consonants: number } {
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowels = 0;
    let consonants = 0;

    for (const char of input.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            if (vowelsSet.has(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels, consonants };
}

// Example usage:
const text = "Hello 12 sdfsd World!";
const result = countVowelsAndConsonants(text);
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);
