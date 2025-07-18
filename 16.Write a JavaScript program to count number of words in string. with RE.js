function countWords(str) {
    // Trim whitespace and count word segments
    const matches = str.trim().match(/\b\w+\b/g);
    return matches ? matches.length : 0;
}
// Test cases
console.log(countWords("Hello world"));          // Output: 2
console.log(countWords("   Leading whitespace")); // Output: 3
console.log(countWords("Trailing whitespace   ")); // Output: 3
console.log(countWords("   Multiple    spaces   ")); // Output: 3