function findLongestWord(str) {
    // Split the string into words (handling punctuation)
    const words = str.match(/\b[\w'-]+\b/g) || [];
    
    if (words.length === 0) return ''; // Handle empty string case
    
    // Find the longest word
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}