function naivePatternMatch(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;
    const result: number[] = [];

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && text[i + j] === pattern[j]) {
            j++;
        }
        if (j === m) {
            // pattern found at index i
            result.push(i);
        }
    }

    return result; // returns all starting indices where pattern is found
}

// Example usage:
const inputText = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = naivePatternMatch(inputText, pattern);

if (matches.length === 0) {
    console.log("No match found");
} else {
    console.log("Pattern found at indices:", matches);
}