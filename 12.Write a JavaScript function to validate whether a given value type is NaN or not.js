function isValueNaN(value) {
    return Number.isNaN(value);
}
// Test cases
console.log(isValueNaN(NaN));        // true
console.log(isValueNaN(123));        // false
console.log(isValueNaN("NaN"));      // false 