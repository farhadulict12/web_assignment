function countLetterOccurrences(str) {
    const result = {};
    
    // Convert to lowercase to make case-insensitive
    const lowerStr = str.toLowerCase();
    
    for (const char of lowerStr) {
        // Only count letters (ignore numbers, spaces, punctuation)
        if (/[a-z]/.test(char)) {
            result[char] = (result[char] || 0) + 1;
        }
    }
    
    return result;
}
// Test cases
console.log(countLetterOccurrences("Hello World")); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
console.log(countLetterOccurrences("JavaScript is fun!")); // { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1, f: 1, u: 1, n: 1 }
console.log(countLetterOccurrences("12345!@#$%")); // {} (no letters)