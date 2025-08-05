// Two strings are anagrams if they have the same characters with the same frequency, regardless of order.
function isAnagram(str1: string, str2: string): boolean {
  // Helper to clean and normalize string (remove spaces and convert to lowercase)
  const cleanString = (s: string): string => {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char !== " ") {
        result += char.toLowerCase();
      }
    }
    return result;
  };

  const s1 = cleanString(str1);
  const s2 = cleanString(str2);

  if (s1.length !== s2.length) return false;

  const charCount: Record<string, number> = {};

  for (const char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of s2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(isAnagram("Listen", "Silent")); // true
console.log(isAnagram("Hello", "Olelh")); // true
console.log(isAnagram("Test", "Best")); // false
