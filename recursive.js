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
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error(`Error: put only non negative values`);
  }
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));

//alternative
function factorial2(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error(`Error: put only non negative values`);
  }
  return n ? n * factorial2(n - 1) : 1;
}
console.log(factorial2(0));

/**TASK 3
 * Fibonacci numbers
importance: 5
The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number.

An example of work:

function fib(n) { / your code / }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.
 */

function fib(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error(`Error: put only non negative values`);
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log(fib(3));
console.log(fib(7));
console.log(fib(10));
// console.log(fib(77)); will be extremly slow

//SOLUTION Use for loop
function fibFast(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibFast(3));
console.log(fibFast(7));
console.log(fibFast(77)); //fast results

/**TASK 4
 * Output a single-linked list
importance: 5
Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.

What’s better: with recursion or without it?
 */
//Using loop
let lists = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printList(list) {
  let i = list;
  while (i) {
    console.log(i.value);
    i = i.next;
  }
}
printList(lists);

//Using recursion
function printListRec(list) {
  console.log(list.value);
  if (list.next) {
    printListRec(list.next);
  }
}
printListRec(lists);

/**TASK 5
 * Output a single-linked list in the reverse order
importance: 5
Output a single-linked list from the previous task Output a single-linked list in the reverse order.

Make two solutions: using a loop and using a recursion.
 */

//Using loop
function printListRev(list) {
  let i = list;
  let arr = [];
  while (i) {
    arr.push(i.value);
    i = i.next;
  }
  console.log(arr); //[1, 2, 3, 4]
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]); // 4, 3, 2, 1
  }
}

printListRev(lists);

//Using recursion
function printListRecRev(list) {
  if (!list) return;
  if (list.next) {
    printListRecRev(list.next);
  }
  console.log(list.value); // 4, 3, 2, 1
}
printListRecRev(lists);

//Extra: Best performance with Time complexity O(n), Space complexity O(1)

function printListReverseFast(list) {
  // Step 1: reverse the list in-place
  let prev = null;
  let current = list;
  while (current) {
    let next = current.next;
    current.next = prev; // reverse pointer
    prev = current;
    current = next;
  }

  // Step 2: print the reversed list
  let head = prev; // prev is now the last node (new head)
  while (head) {
    console.log(head.value); // 4, 3, 2, 1
    head = head.next;
  }

  // Step 3: restore the list back to original
  current = prev;
  prev = null;
  while (current) {
    let next = current.next;
    current.next = prev; // reverse again to restore
    prev = current;
    current = next;
  }
}

printListReverseFast(lists);
