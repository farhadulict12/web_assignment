function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    return cleaned === cleaned.split('').reverse().join('');
}
// Test cases
console.log(isPalindrome("racecar"));        // true
console.log(isPalindrome("hello"));          // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true 