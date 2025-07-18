function isCreditCardValid(cardNumber) {
    const cleaned = cardNumber.replace(/\D/g, '');
    return cleaned.length >= 13 && cleaned.length <= 19;
}

// Test examples
console.log(isCreditCardValid("4111-1111-1111-1111")); // true
console.log(isCreditCardValid("123"));                 // false