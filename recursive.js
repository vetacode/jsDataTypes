//2 cara untuk menyelesaikan soal 2^3
//1. Pake for loop
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 3));

//2. Pake Recursive. Efficiency O(n), slower than iterative loop, but its needed when a function uses different recursive subcalls, when branching is more intricate.
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
