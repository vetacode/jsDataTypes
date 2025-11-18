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

//RECURSIVE TRAVERSAL
let company = {
  // the same object, compressed for brevity
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700

let perusahaan = {
  sales: [
    {
      name: 'Rika',
      salary: 10000,
    },
    {
      name: 'Wully',
      salary: 8000,
    },
  ],

  tech: {
    frontEnd: [
      {
        name: 'Fiqrie',
        salary: 30000,
      },
      {
        name: 'Rahman',
        salary: 20000,
      },
    ],
    backEnd: [
      {
        name: 'Rian',
        salary: 10000,
      },
      {
        name: 'Rengga',
        salary: 5000,
      },
    ],
  },
};

function totalSalaries(dep) {
  let arr = Array.isArray(dep);
  console.log(arr);
  if (arr) {
    //base case
    return dep.reduce((prev, curr) => prev + curr.salary || 0, 0);
  } else {
    //recursive
    let sum = 0;
    let values = Object.values(dep);
    console.log(values);
    for (let subdep of values) {
      sum += totalSalaries(subdep);
    }
    return sum;
  }
}

function formatUSD(num) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
}

let totalUSD = totalSalaries(perusahaan);

console.log(formatUSD(totalUSD)); //83000

//RECURSIVE STRUCTURES
//LINKED LIST is a fast insertion/deletion for listed objects
//Syntax: list = {value: 'new item', next: list}
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// prepend the new value to the list
list = { value: 'new item', next: list };

console.log(list);

/**TASK 1
 *Sum all numbers till the given one
importance: 5
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
An example of the result:

function sumTo(n) { /... your code ... / }

alert( sumTo(100) ); // 5050
P.S. Which solution variant is the fastest? The slowest? Why?

P.P.S. Can we use recursion to count sumTo(100000)?
 */
//Using for loop
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));

//Using recursion
function sumToRec(n) {
  return n === 1 ? 1 : n + sumToRec(n - 1);
}
console.log(sumToRec(100));

//Using arithmetic progression formula
function sumToProg(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumToProg(100));

/**TASK 2
 * Calculate factorial
importance: 4
The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

We can write a definition of factorial like this:

n! = n * (n - 1) * (n - 2) * ...*1
Values of factorials for different n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
The task is to write a function factorial(n) that calculates n! using recursive calls.

alert( factorial(5) ); // 120
P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6
 */

function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));
