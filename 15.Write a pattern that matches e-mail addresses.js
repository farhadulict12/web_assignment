const simpleEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Test cases
console.log(simpleEmailPattern.test("test@example.com")); // true
console.log(simpleEmailPattern.test("invalid-email"));    // false 