function isPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

function isPalindromeShort(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}