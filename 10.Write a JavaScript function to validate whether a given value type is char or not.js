function isChar(value) {
    // Check if the value is a string and has exactly 1 character
    return typeof value === 'string' && value.length === 1;
}
// Test cases
console.log(isChar('a'));        // true
console.log(isChar('ab'));       // false
console.log(isChar(1));          // false
console.log(isChar(null));       // false