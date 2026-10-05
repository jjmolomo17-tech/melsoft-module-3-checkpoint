/*******************************************************
 Challenge 1 - Operators Masterclass
 Author: Junior Developer Example Solutions
 Language: JavaScript
*******************************************************/


/* =====================================================
   1. ARITHMETIC OPERATORS
   Scenario:
   Calculate a worker's monthly net salary from a gross
   salary of R45,000 after deductions:
   - 25% Tax
   - 1% UIF
   - R2,500 Medical Aid
   Uses: *, /, -, %
===================================================== */

const grossSalary = 45000;

const tax = grossSalary * 0.25;      // 25% tax deduction
const uif = grossSalary * 0.01;      // 1% UIF deduction
const medicalAid = 2500;

const netSalary = grossSalary - tax - uif - medicalAid;

// Using modulo (%) to determine whether the salary amount is even or odd
const salaryRemainder = netSalary % 2;

console.log("Net Salary:", netSalary);
console.log("Remainder when divided by 2:", salaryRemainder);



/* =====================================================
   2. ASSIGNMENT OPERATORS
   Scenario:
   Shopping cart starts at R0.
   Add items worth:
   - R150
   - R85
   - R220
   Apply:
   - 10% discount
   - 15% VAT

   Uses: +=, *=, -=
===================================================== */

let cartTotal = 0;

// Add items
cartTotal += 150;
cartTotal += 85;
cartTotal += 220;

// Apply 10% discount
cartTotal -= cartTotal * 0.10;

// Add 15% VAT
cartTotal *= 1.15;

console.log("Final Cart Total:", cartTotal.toFixed(2));



/* =====================================================
   3. COMPARISON OPERATORS
   Scenario:
   Validate signup requirements:
   - Age must be at least 18
   - Password length >= 8
   - Emails must match exactly

   Uses: >=, <, ===, !==
===================================================== */

const age = 22;
const password = "MySecurePass123";
const email = "user@email.com";
const confirmEmail = "user@email.com";

// Comparison checks
const isOldEnough = age >= 18;
const passwordTooShort = password.length < 8;
const emailsMatch = email === confirmEmail;
const emailsDifferent = email !== confirmEmail;

console.log("Old Enough:", isOldEnough);
console.log("Password Too Short:", passwordTooShort);
console.log("Emails Match:", emailsMatch);
console.log("Emails Different:", emailsDifferent);



/* =====================================================
   4. LOGICAL OPERATORS
   Scenario:
   User can access premium dashboard if:
   (Logged In AND Email Verified)
   OR
   User is an Admin

   Uses: && and ||
===================================================== */

const isLoggedIn = true;
const emailVerified = true;
const isAdmin = false;

const canAccessDashboard =
  (isLoggedIn && emailVerified) || isAdmin;

console.log("Dashboard Access:", canAccessDashboard);



/* =====================================================
   5. UNARY OPERATORS
   Scenario:
   Convert a form input string to a number using unary +
   Then toggle dark mode using !
===================================================== */

const ageInput = "25";

// Unary + converts string to number
const numericAge = +ageInput;

let isDarkMode = false;

// Unary ! reverses the boolean value
isDarkMode = !isDarkMode;

console.log("Numeric Age:", numericAge);
console.log("Dark Mode Enabled:", isDarkMode);



/* =====================================================
   6. TERNARY / CONDITIONAL OPERATOR
   Scenario:
   Show membership badge:
   - premium => Premium Member
   - trial => Trial Member
   - otherwise => Free Member

   Uses nested ternary
===================================================== */

const membershipType = "trial";

const membershipBadge =
  membershipType === "premium"
    ? "Premium Member"
    : membershipType === "trial"
      ? "Trial Member"
      : "Free Member";

console.log(membershipBadge);



/* =====================================================
   7. STRING CONCATENATION
   Scenario:
   Build greeting using + operator
===================================================== */

const firstName = "Joy";
const lastName = "Molomo";
const ageValue = 22;

// Using + operator for concatenation
const greeting =
  "Welcome back " +
  firstName +
  " " +
  lastName +
  ", you are " +
  ageValue +
  " years old.";

console.log(greeting);


// Same greeting using template literals
const templateGreeting =
  `Welcome back ${firstName} ${lastName}, you are ${ageValue} years old.`;

console.log(templateGreeting);

/*
Template literals are generally better because:
1. They are easier to read.
2. They require less concatenation.
3. They make inserting variables simpler.
4. They reduce formatting mistakes in large strings.
*/



/* =====================================================
   INTERVIEW ANSWERS
===================================================== */

/*

1. Difference Between Prefix (++x) and Postfix (x++)

Prefix (++x):
- Increments the value FIRST.
- Then returns the new value.

Postfix (x++):
- Returns the current value FIRST.
- Then increments it.

Example:

let x = 5;
console.log(++x, x++);

Output:
6 6

Explanation:
- ++x increments 5 to 6 and outputs 6.
- x++ outputs 6 first, then increments x to 7 afterwards.


------------------------------------------------------

2. THREE Real-World Uses of the Modulo (%) Operator

A. Even/Odd Number Check

if (orderNumber % 2 === 0) {
    console.log("Even Order Number");
}

B. Alternating Row Colors in Tables

if (rowIndex % 2 === 0) {
    rowColor = "lightgray";
} else {
    rowColor = "white";
}

Used in dashboards, admin panels, and reports.

C. Rotating Through Items (Carousel, Banners, Ads)

let currentBanner = (currentIndex + 1) % totalBanners;

When the last banner is reached,
the modulo resets the index back to 0.


------------------------------------------------------

3. Is Nested Ternary Good Practice?

Nested ternaries are acceptable only when the logic is
simple and still easy to read.

Good Example:
- A small, two-level decision like the membership badge.

Avoid Nested Ternaries When:
- There are many conditions.
- Logic becomes difficult to understand.
- Multiple developers must maintain the code.

Instead, use:

if / else if / else

This improves readability, debugging, and maintainability.

*/




