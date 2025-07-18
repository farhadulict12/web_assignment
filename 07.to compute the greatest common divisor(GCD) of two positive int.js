function gcd(a, b) {
    // Ensure positive numbers
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage
console.log(gcd(48, 18));  // Output: 6
console.log(gcd(101, 103)); // Output: 1
console.log(gcd(60, 48));  // Output: 12
