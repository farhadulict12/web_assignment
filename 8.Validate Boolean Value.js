function isBoolean(value) {
    // Check for primitive boolean type or Boolean object
    return value === true || 
           value === false ||
           value instanceof Boolean;
}

// Test cases
console.log(isBoolean(true));      // true
console.log(isBoolean(false));     // true
console.log(isBoolean(new Boolean(true))); // true
console.log(isBoolean("true"));    // false
console.log(isBoolean(1));         // false
console.log(isBoolean(0));         // false
console.log(isBoolean(null));      // false