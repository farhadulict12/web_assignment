function countVowels(str) {
    if (typeof str !== 'string') return 0;
    return (str.match(/[aeiou]/gi) || []).length;
}
// Test cases
console.log(countVowels("Hello World"));           // Output: 3
console.log(countVowels("JavaScript"));           // Output: 3
console.log(countVowels("OpenAI"));       // Output: 3
console.log(countVowels("xyz"));             // Output: 0