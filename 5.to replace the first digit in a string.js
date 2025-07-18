function replaceFirstDigit(str) {
    // Find the index of the first digit
    for (let i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            // Replace the first digit found with $
            return str.substring(0, i) + '$' + str.substring(i + 1);
        }
    }
    // Return original string if no digit found (though problem states it should contain at least one)
    return str;
}

// Test cases
console.log(replaceFirstDigit("abc123def"));    // Output: "abc$23def"
console.log(replaceFirstDigit("Hello5World"));  // Output: "Hello$World"
console.log(replaceFirstDigit("1st place"));    // Output: "$st place"
console.log(replaceFirstDigit("NoDigitsHere")); // Output: "NoDigitsHere" (but problem says string should contain digits)