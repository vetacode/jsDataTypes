//3 cara untuk menyelesaikan soal 2^3
//1. Pake for loop. Time complexity O(n), space complexity O(1). Better than recursive
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 3));

//2. Pake Recursive. Efficiency time and space complexity both O(n), slower than iterative loop, but its needed when a function uses different recursive subcalls, when branching is more intricate.
//Recursive give a shorter code, easier to understand and support.
//Key is wisely balance between need of good code and optimization

function recursPow(x, n) {
  if (n == 1) {
    return x;
  }
  return x * pow(x, n - 1);
}
console.log(recursPow(2, 3));

//Lean Code
function recursPowBest(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
console.log(recursPowBest(2, 3));

//3. Pake Fastest power algorithm: Exponentiation by Squaring: both time & space complexity is log2(n) or O(log n)

function fastPow(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n % 2 === 0) {
    return fastPow(x * x, n / 2);
  }
  return x * fastPow(x, n - 1);
}
console.log(fastPow(2, 3));

/**
 * 4 * 1...
 * 2 * 4... = 8
 */

/**SUMAMRY
| Method                         | Time Complexity | Space Complexity | Notes                  |
| ------------------------------ | --------------- | ---------------- | ---------------------- |
| Iterative `pow`                | **O(n)**        | O(1)             | Slow for large n       |
| Recursive simple               | **O(n)**        | O(n)             | Even worse stack usage |
| **FastPow (By Squaring)**      | **O(log n)**    | O(log n)         | Fastest possible       |
 */
