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

//2. Pake Recursive
function recursPow(x, n) {
  if (n == 1) {
    return x;
  }
  x *= pow(x, n - 1);
  return x;
}
console.log(recursPow(2, 3));
