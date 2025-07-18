function isHexadecimal(value) {
    // Handle number inputs by converting to string
    if (typeof value === 'number') {
        value = value.toString(16);
    }
    
    // Check if the string matches hex pattern
    return typeof value === 'string' && /^[0-9a-fA-F]+$/.test(value);
}
// Test cases
console.log(isHexadecimal("1a2b3c"));  // true
console.log(isHexadecimal("123456"));  // true
console.log(isHexadecimal("xyz"));     // false
console.log(isHexadecimal(12345));     // true