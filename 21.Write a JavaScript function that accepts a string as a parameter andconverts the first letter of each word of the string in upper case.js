function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
// Test cases
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javaScript is fun")); // "JavaScript Is Fun"
console.log(capitalizeWords("capitalize each word")); // "Capitalize Each Word"