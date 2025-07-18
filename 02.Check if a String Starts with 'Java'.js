function startsWithJava(str) {
    return str.startsWith('Java');
}

// Test cases
console.log(startsWithJava('JavaScript'));  // true
console.log(startsWithJava('Java'));       // true
console.log(startsWithJava('java'));        // false (case-sensitive)
console.log(startsWithJava('Python'));      // false
console.log(startsWithJava(''));            // false
