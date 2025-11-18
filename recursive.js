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
