function isRegExp(value) {
    return value instanceof RegExp;
}
// Test cases
console.log(isRegExp(/hello/));        // true
console.log(isRegExp(new RegExp()));   // true
console.log(isRegExp("hello"));        // false
console.log(isRegExp(123));            // false
console.log(isRegExp(null));           // false