function getFunctionName(func) {
    return func.name;
}

// Example usage:
function exampleFunction() {}
console.log(getFunctionName(exampleFunction)); // "exampleFunction"
// Test with an anonymous function
console.log(getFunctionName(function() {})); // "" (empty string for anonymous functions)