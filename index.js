function isPalindrome(number) {
  const s = number.toString().split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) if (s[left++] !== s[right--]) return false;
  return true;
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

console.log(
  `Largest 3 Digit Integer Product Palindrome: ${findLargest3DigitIntegerProductPalindrome()}`
);
