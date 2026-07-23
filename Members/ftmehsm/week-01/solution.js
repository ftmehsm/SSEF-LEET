let result = [];

function fizzBuzzCheck(m) {
  if (m % 3 == 0) {
    return "fizz";
  } else if (m % 5 == 0) {
    return "Buzz";
  } else if (m % 3 == 0 && m % 5 == 0) {
    return "Fizz Buzz";
  } else {
    return m;
  }
}

function FizzBuzzResult(n) {
  if ((1 <= n <= 10) ^ 4) {
    for (let i = 1; i <= n; i++) {
      result.push(fizzBuzzCheck(i));
    }
    return result;
  } else {
    return;
  }
}

console.log("result=" , FizzBuzzResult(15))
