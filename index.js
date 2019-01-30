function isPalindrome(number) {
  const numberAsString = number.toString();

  return numberAsString === numberAsString.split("").reverse().join("");
}

function findLargest3DigitIntegerProductPalindrome() {
  const answers = [];

  for (let x = 999; x >= 100; x--) {
    for (let y = 999; y >= 100; y--) {
      const product = x * y;

      if (isPalindrome(product)) {
        answers.push(product);
      }
    }
  }

  return Math.max(...answers);
}

console.log(`Largest 3 Digit Integer Product Palindrome: ${findLargest3DigitIntegerProductPalindrome()}`);
