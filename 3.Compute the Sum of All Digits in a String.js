function sumDigitsInString(str) {
    let sum = 0;
    
    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a digit
        if (!isNaN(char) && char !== ' ') {
            sum += parseInt(char, 10);
        }
    }
    
    return sum;
   }
// Test cases
console.log(sumDigitsInString("abc123"));        // 6 (1+2+3)
console.log(sumDigitsInString("10 apples, 5 oranges"));  // 6 (1+0+5)
console.log(sumDigitsInString("Hello World!"));  // 0 (no digits)
console.log(sumDigitsInString("2024"));          // 8 (2+0+2+4)
console.log(sumDigitsInString("a1b2c3d4"));      // 10 (1+2+3+4)