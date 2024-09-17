function checkForSpam(message) {
  let lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Get the best SALE offers now!')); // true
console.log(checkForSpam('This is a SPAM message.')); // true
console.log(checkForSpam('Hello, how are you?')); // false
console.log(checkForSpam("Limited time offer, don't miss the sale!")); // true
console.log(checkForSpam('Just a regular message.')); // false
