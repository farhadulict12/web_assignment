function countCommonElements(arr1, arr2) {
    // Filter elements from arr1 that exist in arr2
    const commonElements = arr1.filter(element => arr2.includes(element));
    
    // Return the count of common elements
    return commonElements.length;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(countCommonElements(array1, array2)); // Output: 3 (3, 4, 5 are common)
