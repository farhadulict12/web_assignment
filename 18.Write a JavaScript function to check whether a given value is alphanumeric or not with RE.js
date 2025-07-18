function isAlphanumeric(value) {
    // Check if the string consists only of letters and numbers
    return /^[a-zA-Z0-9]+$/.test(value);
}
// Test cases
console.log(isAlphanumeric("abc123"));    // true
console.log(isAlphanumeric("ABCdef123")); // true
console.log(isAlphanumeric("123456"));    // true
console.log(isAlphanumeric("abc 123"));   // false
console.log(isAlphanumeric("abc@123"));   // false