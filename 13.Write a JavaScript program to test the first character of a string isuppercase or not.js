const isFirstCharUppercase = str => /^[A-Z]/.test(str || '');
// Test cases
console.log(isFirstCharUppercase('Hello'));  // true
console.log(isFirstCharUppercase('hello'));  // false
console.log(isFirstCharUppercase('1Hello')); // false
console.log(isFirstCharUppercase(''));       // false