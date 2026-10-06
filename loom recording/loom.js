/* In Challenge 1 Operators Masterclass
,I demonstrated the main categories of JavaScript operators 
using realistic examples instead of textbook examples. 
The goal was to show that I understand how 
operators are used in day-to-day development. */

// Salary calculation using arithmetic operators - Example code
const grossSalary = 45000;
const tax = grossSalary * 0.25;
const uif = grossSalary * 0.01;
const medicalAid = 2500;

const netSalary = grossSalary - tax - uif - medicalAid;

console.log("Net Salary:", netSalary);

/* Ouput
Net Salary: 30700 */


/* I used multiplication and subtraction operators to calculate 
deductions from a salary. 
This demonstrates arithmetic operators in a 
realistic payroll scenario. 
I wrote it this way because payroll calculations are a common
business use case and clearly show how operators work together. */



/* Challenge 4 Ternary and Short-Circuit Patterns
focused on modern JavaScript patterns such as ternary operators, logical OR, 
nullish coalescing, and optional chaining. 
These are commonly used when working with API data. */

 /* This challenge focused on modern JavaScript patterns such as ternary operators, logical OR, 
nullish coalescing, and optional chaining. 
These are commonly used when working with API data.*/

// Example code 
const percentage = 82;

const grade =
    percentage >= 90 ? "A" :
    percentage >= 80 ? "B" :
    percentage >= 70 ? "C" :
    percentage >= 60 ? "D" :
    percentage >= 50 ? "E" :
    "F";

console.log("Grade:", grade);

// Output 
Grade: B


/* I used a ternary chain instead of if-else statements because 
the challenge specifically required it. The code checks ranges from
 highest to lowest and returns the corresponding grade. 
This demonstrates decision-making using expressions. */




//Challenge 6 – Bitwise Permission System
/* For Challenge 6, I built a permission system using bitwise operators. 
This is a real-world 
technique used in operating systems and 
software platforms because multiple permissions
can be stored in a single number. */


//Example code
const READ = 1;     // 0001
const WRITE = 2;    // 0010
const DELETE = 4;   // 0100
const ADMIN = 8;    // 1000

// User has READ and WRITE
let userPermissions = READ | WRITE;

console.log(userPermissions);


//Ouput
3

/* READ has a value of 1 and WRITE has a value of 2. Using the bitwise OR 
operator combines them into 3. That single number represents 
multiple permissions. */



//CHECKING PERMISSIONS
console.log(
    (userPermissions & READ) ? "Yes" : "No"
);

//OUTPUT
Yes

/* The bitwise AND operator checks whether a specific permission exists. 
If the result is not zero, that permission is present */


//GRANT PERMISSION
userPermissions |= DELETE;

console.log(userPermissions);

//OUTPUT
7

/* The OR assignment operator adds the DELETE
 permission while keeping the existing permissions. */



 //REVOKE PERMISSION
 userPermissions &= ~WRITE;

console.log(userPermissions);



//OUTPUR
5

/* The NOT operator flips the WRITE bits,
 then AND removes that permission from the user's permission set */



 //Challenge 7 – Banking Calculator
 /* Challenge 7 simulated a real banking system. I calculated compound interest, 
 account fees, and currency exchange values 
 using arithmetic operators and expressions. */

 //EXAMPLE CODE
 const principal = 25000;
const rate = 0.075;
const compoundsPerYear = 12;
const years = 3;

const finalBalance =
    principal *
    (1 + rate / compoundsPerYear) **
    (compoundsPerYear * years);

console.log(finalBalance.toFixed(2));

//OUPUT
31288.56


/* I used the compound interest formula exactly as provided. 
The exponent operator (**) raises the value to the power of 
the total number of compounding periods. */


//INTEREST EARNED
const interestEarned =
    finalBalance - principal;

console.log(interestEarned.toFixed(2));

//OUTPUT
6288.56

//The total interest earned is simply the final balance minus the original deposit.

/* This challenge demonstrates arithmetic operators, operator precedence, exponents, 
percentages, floating-point numbers, 
and financial calculations, which are all common in business software. */

/* The four challenges I chose were Challenge 1, Challenge 4, Challenge 6, and Challenge 7. 
Together they demonstrate arithmetic operators, logical operators, ternary operators, 
short-circuit evaluation, bitwise permissions, and real-world financial calculations. 
I chose these because they represent the most practical concepts from Module 3
and show how operators are applied in real software development. */


