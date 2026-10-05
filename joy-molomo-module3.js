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
const email = "jjmolomo17@gmail.com";
const confirmEmail = "jjmolomo17@gmail.com";

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





/*********************************************************
 Challenge 2 - The Equality Deep Dive
 JavaScript Equality & Comparison Operators

 Instructions:
 - Prediction written BEFORE execution
 - Actual result logged
 - One-line explanation provided for each case
*********************************************************/


/* =====================================================
   1. 0 == false
===================================================== */

// Prediction: true
// Reason: Loose equality converts false to 0 before comparing.
console.log("1:", 0 == false);


/* =====================================================
   2. 0 === false
===================================================== */

// Prediction: false
// Reason: Strict equality compares both value and type.
console.log("2:", 0 === false);


/* =====================================================
   3. "" == 0
===================================================== */

// Prediction: true
// Reason: Empty string converts to number 0 during coercion.
console.log("3:", "" == 0);


/* =====================================================
   4. "" === 0
===================================================== */

// Prediction: false
// Reason: String and number are different types.
console.log("4:", "" === 0);


/* =====================================================
   5. "0" == 0
===================================================== */

// Prediction: true
// Reason: String "0" is converted to numeric 0.
console.log("5:", "0" == 0);


/* =====================================================
   6. "0" === 0
===================================================== */

// Prediction: false
// Reason: One is a string, the other is a number.
console.log("6:", "0" === 0);


/* =====================================================
   7. null == undefined
===================================================== */

// Prediction: true
// Reason: JavaScript treats null and undefined as equal
// under loose equality only.
console.log("7:", null == undefined);


/* =====================================================
   8. null === undefined
===================================================== */

// Prediction: false
// Reason: Different data types.
console.log("8:", null === undefined);


/* =====================================================
   9. null == 0
===================================================== */

// Prediction: false
// Reason: null only loosely equals undefined.
console.log("9:", null == 0);


/* =====================================================
   10. null >= 0
===================================================== */

// Prediction: true
// Reason: For relational comparisons, null converts to 0.
// Therefore 0 >= 0 is true.
console.log("10:", null >= 0);


/* =====================================================
   11. null > 0
===================================================== */

// Prediction: false
// Reason: null becomes 0, and 0 > 0 is false.
console.log("11:", null > 0);


/* =====================================================
   12. NaN == NaN
===================================================== */

// Prediction: false
// Reason: NaN is never equal to anything, including itself.
console.log("12:", NaN == NaN);


/* =====================================================
   13. NaN === NaN
===================================================== */

// Prediction: false
// Reason: Even strict equality cannot match NaN to itself.
console.log("13:", NaN === NaN);


/* =====================================================
   14. Object.is(NaN, NaN)
===================================================== */

// Prediction: true
// Reason: Object.is correctly recognizes NaN as equal to NaN.
console.log("14:", Object.is(NaN, NaN));


/* =====================================================
   15. +0 === -0
===================================================== */

// Prediction: true
// Reason: Strict equality treats positive and negative zero
// as the same value.
console.log("15:", +0 === -0);


/* =====================================================
   16. Object.is(+0, -0)
===================================================== */

// Prediction: false
// Reason: Object.is can distinguish +0 from -0.
console.log("16:", Object.is(+0, -0));


/* =====================================================
   17. [1,2,3] == "1,2,3"
===================================================== */

// Prediction: true
// Reason: Array converts to string "1,2,3".
console.log("17:", [1, 2, 3] == "1,2,3");


/* =====================================================
   18. [] == false
===================================================== */

// Prediction: true
// Reason: [] -> "" -> 0 and false -> 0.
console.log("18:", [] == false);


/* =====================================================
   19. [] == 0
===================================================== */

// Prediction: true
// Reason: Empty array becomes empty string, then number 0.
console.log("19:", [] == 0);


/* =====================================================
   20. [0] == false
===================================================== */

// Prediction: true
// Reason: [0] becomes "0", then numeric 0.
// false also becomes 0.
console.log("20:", [0] == false);



/*********************************************************
 SUMMARY NOTES
*********************************************************/

/*

Most Common Interview Traps
===========================

1. Loose Equality (==)
----------------------
Allows type coercion before comparison.

Examples:
"0" == 0          // true
false == 0        // true
"" == 0           // true

2. Strict Equality (===)
------------------------
No type conversion occurs.

Examples:
"0" === 0         // false
false === 0       // false
null === undefined // false

3. null vs undefined
--------------------
Loose:
null == undefined      // true

Strict:
null === undefined     // false

4. NaN is Special
-----------------
NaN == NaN             // false
NaN === NaN            // false

Correct way:
Object.is(NaN, NaN)    // true

5. Object.is()
--------------
More precise than ===

Examples:
Object.is(NaN, NaN)    // true
Object.is(+0, -0)      // false

6. Array Coercion
-----------------
Arrays often convert to strings.

[1,2,3].toString()
=> "1,2,3"

Therefore:

[1,2,3] == "1,2,3"    // true

7. The Famous Interview Question
--------------------------------

null >= 0   // true
null > 0    // false
null == 0   // false

Why?

- Relational operators (>, >=, <, <=)
  convert null to 0.

- Equality operator (==)
  does NOT convert null to 0.

So:

null >= 0
0 >= 0
true

but

null == 0
false

This behavior comes directly from JavaScript's
equality and relational comparison rules and is
one of the most frequently tested interview topics.

*/





/*********************************************************
 Challenge 2 - Part B: Real-World Form Validator
 Password Reset Form Validation

 Requirements:
 ✔ Passwords must match EXACTLY
 ✔ Emails must match EXACTLY
 ✔ Password cannot be the same as email
 ✔ Password must be at least 8 characters

 The script is run with:
 1. One passing test case
 2. One failing test case
*********************************************************/


/* =====================================================
   Validation Function
===================================================== */

function validatePasswordReset(
  newPassword,
  confirmPassword,
  currentEmail,
  confirmEmail
) {
  console.log("\n=================================");
  console.log("Password Reset Validation Results");
  console.log("=================================");

  /* -------------------------------------
     Check 1:
     Passwords match exactly
  ------------------------------------- */

  if (newPassword === confirmPassword) {
    console.log(" PASS: Passwords match exactly.");
  } else {
    console.log(" FAIL: Passwords do not match.");
  }

  /* -------------------------------------
     Check 2:
     Emails match exactly
  ------------------------------------- */

  if (currentEmail === confirmEmail) {
    console.log(" PASS: Emails match exactly.");
  } else {
    console.log(" FAIL: Emails do not match.");
  }

  /* -------------------------------------
     Check 3:
     Password must NOT be same as email
  ------------------------------------- */

  if (newPassword !== currentEmail) {
    console.log(" PASS: Password is different from email.");
  } else {
    console.log(
      " FAIL: Password should not be the same as your email."
    );
  }

  /* -------------------------------------
     Check 4:
     Password length must be at least 8
  ------------------------------------- */

  if (newPassword.length >= 8) {
    console.log(" PASS: Password is at least 8 characters.");
  } else {
    console.log(
      " FAIL: Password must be at least 8 characters."
    );
  }
}



/* =====================================================
   TEST CASE 1
   Expected: ALL CHECKS PASS
===================================================== */

console.log("\nTEST CASE 1 - VALID DATA");

let newPassword = "SecurePass123";
let confirmPassword = "SecurePass123";
let currentEmail = "jjmolomo17@gmail.com";
let confirmEmailReset = "jjmolomo17@gmail.com";

validatePasswordReset(
  newPassword,
  confirmPassword,
  currentEmail,
  confirmEmail
);



/* =====================================================
   TEST CASE 2
   Expected:
   FAIL at least two checks
===================================================== */

console.log("\nTEST CASE 2 - INVALID DATA");

newPassword = "john@mail";       // Same as email & too short
confirmPassword = "john123";     // Doesn't match password
currentEmail = "john@mail";
confirmEmail = "john@gmail.com"; // Doesn't match email

validatePasswordReset(
  newPassword,
  confirmPassword,
  currentEmail,
  confirmEmail
);



/*********************************************************
 INTERVIEW ANSWER
*********************************************************/

/*

Q: Which equality operator did you use (== or ===),
and why does that choice matter specifically for
password validation?

Answer:

I used the strict equality operator (===).

Reason:

=== compares BOTH:

1. Value
2. Data Type

without performing



*/






/*********************************************************
 Challenge 3 - Operator Precedence (10 Marks)

 Instructions:
 For each expression:
 ✅ Prediction
 ✅ Step-by-step evaluation order
 ✅ Console output verification
*********************************************************/


/* =====================================================
   1. 2 + 3 * 4 - 1
===================================================== */

// Prediction: 13
// Step 1: 3 * 4 = 12
// Step 2: 2 + 12 = 14
// Step 3: 14 - 1 = 13

console.log("1:", 2 + 3 * 4 - 1);



/* =====================================================
   2. (2 + 3) * (4 - 1)
===================================================== */

// Prediction: 15
// Step 1: (2 + 3) = 5
// Step 2: (4 - 1) = 3
// Step 3: 5 * 3 = 15

console.log("2:", (2 + 3) * (4 - 1));



/* =====================================================
   3. 10 - 4 - 2
===================================================== */

// Prediction: 4
// Step 1: 10 - 4 = 6
// Step 2: 6 - 2 = 4
// Note: Subtraction is left-to-right.

console.log("3:", 10 - 4 - 2);



/* =====================================================
   4. 2 ** 3 ** 2
===================================================== */

// Prediction: 512
// Step 1: 3 ** 2 = 9
// Step 2: 2 ** 9 = 512
// Exponentiation is RIGHT-ASSOCIATIVE.

console.log("4:", 2 ** 3 ** 2);



/* =====================================================
   5. 10 % 3 * 2 + 1
===================================================== */

// Prediction: 3
// Step 1: 10 % 3 = 1
// Step 2: 1 * 2 = 2
// Step 3: 2 + 1 = 3

console.log("5:", 10 % 3 * 2 + 1);



/* =====================================================
   6. 100 / 4 / 5
===================================================== */

// Prediction: 5
// Step 1: 100 / 4 = 25
// Step 2: 25 / 5 = 5
// Division is left-to-right.

console.log("6:", 100 / 4 / 5);



/* =====================================================
   7. 5 + 2 > 6 && 3 < 4
===================================================== */

// Prediction: true
// Step 1: 5 + 2 = 7
// Step 2: 7 > 6 = true
// Step 3: 3 < 4 = true
// Step 4: true && true = true

console.log("7:", 5 + 2 > 6 && 3 < 4);



/* =====================================================
   8. true && false || true && true
===================================================== */

// Prediction: true
// Step 1: true && false = false
// Step 2: true && true = true
// Step 3: false || true = true
// && executes before ||

console.log("8:", true && false || true && true);



/* =====================================================
   9. !false && !!0
===================================================== */

// Prediction: false
// Step 1: !false = true
// Step 2: !0 = true
// Step 3: !true = false
// Step 4: true && false = false

console.log("9:", !false && !!0);



/* =====================================================
   10. 5 > 3 && 10 < 20 || !(2 === "2")
===================================================== */

// Prediction: true
// Step 1: 5 > 3 = true
// Step 2: 10 < 20 = true
// Step 3: true && true = true
// Step 4: 2 === "2" = false
// Step 5: !false = true
// Step 6: true || true = true

console.log("10:", 5 > 3 && 10 < 20 || !(2 === "2"));



/* =====================================================
   11. 1000 * 1.15 * 0.9
===================================================== */

// Prediction: 1035
// Step 1: 1000 * 1.15 = 1150
// Step 2: 1150 * 0.9 = 1035

console.log("11:", 1000 * 1.15 * 0.9);



/* =====================================================
   12. typeof 5 + 1
===================================================== */

// Prediction: "number1"
// Step 1: typeof 5 = "number"
// Step 2: "number" + 1 = "number1"
// String concatenation occurs.

console.log("12:", typeof 5 + 1);



/* =====================================================
   13. typeof (5 + 1)
===================================================== */

// Prediction: "number"
// Step 1: (5 + 1) = 6
// Step 2: typeof 6 = "number"

console.log("13:", typeof (5 + 1));



/* =====================================================
   14. "5" + 3 * 2
===================================================== */

// Prediction: "56"
// Step 1: 3 * 2 = 6
// Step 2: "5" + 6 = "56"
// + performs string concatenation.

console.log("14:", "5" + 3 * 2);



/* =====================================================
   15. "5" - 3 + 2
===================================================== */

// Prediction: 4
// Step 1: "5" - 3 = 2
// Step 2: 2 + 2 = 4
// The - operator converts strings to numbers.

console.log("15:", "5" - 3 + 2);



/*********************************************************
 INTERVIEW ANSWER
*********************************************************/

/*

Q: When should you add parentheses to an expression
even when they are not strictly needed by precedence rules?

Answer:

Parentheses should be added whenever they make the
expression easier for other developers to read and
understand. Even if JavaScript's precedence rules will
produce the correct result, explicit parentheses reduce
the chance of misunderstandings, bugs, and maintenance
issues, especially in complex calculations involving
multiple arithmetic, comparison, and logical operators.

*/





/*********************************************************
 Challenge 4 - Part A
 Ternary Chain for Grade Conversion (3 Marks)

 Requirements:
 - Use ONE ternary expression
 - No if/else
 - No switch

 Grade Rules:
 90 and above = A
 80 - 89      = B
 70 - 79      = C
 60 - 69      = D
 50 - 59      = E
 Below 50     = F
*********************************************************/


// Function to convert percentage to letter grade
function getGrade(percentage) {
  return percentage >= 90
    ? "A"
    : percentage >= 80
    ? "B"
    : percentage >= 70
    ? "C"
    : percentage >= 60
    ? "D"
    : percentage >= 50
    ? "E"
    : "F";
}


// Test percentages provided in the challenge
const percentages = [95, 82, 73, 65, 54, 42, 0, 100];

console.log("=== Grade Conversion Results ===");

// Loop through each percentage and display result
percentages.forEach((percentage) => {
  console.log(
    `Percentage: ${percentage}% => Grade: ${getGrade(percentage)}`
  );
});


/*********************************************************
 Expected Output

 Percentage: 95%  => Grade: A
 Percentage: 82%  => Grade: B
 Percentage: 73%  => Grade: C
 Percentage: 65%  => Grade: D
 Percentage: 54%  => Grade: E
 Percentage: 42%  => Grade: F
 Percentage: 0%   => Grade: F
 Percentage: 100% => Grade: A
*********************************************************/





/*********************************************************
 Challenge 4 - Part B
 Short-Circuit Defaults in User Profile (4 Marks)

 Requirements:
 ✔ displayName defaults to "Guest User" using ||
 ✔ theme defaults to "light" using ||
 ✔ maxResults defaults to 10 using ||
 ✔ lastLogin defaults to "Never" using ??
 ✔ notificationCount defaults to 0 using ??

 Uses unique variable names to avoid redeclaration errors.
*********************************************************/


/* =====================================================
   TEST CASE 1
   All fields missing
===================================================== */

const missingUserProfile = {};

const processedProfile1 = {
  displayName: missingUserProfile.displayName || "Guest User",

  theme: missingUserProfile.theme || "light",

  maxResults: missingUserProfile.maxResults || 10,

  lastLogin: missingUserProfile.lastLogin ?? "Never",

  notificationCount:
    missingUserProfile.notificationCount ?? 0,
};

console.log("===== USER PROFILE 1 =====");
console.log(processedProfile1);



/* =====================================================
   TEST CASE 2
   Theme = ""
   Notification Count = 0
===================================================== */

const apiUserProfile = {
  displayName: "Joy Molomo",
  theme: "",
  maxResults: 25,
  lastLogin: "2025-09-15",
  notificationCount: 0,
};

const processedProfile2 = {
  displayName: apiUserProfile.displayName || "Guest User",

  theme: apiUserProfile.theme || "light",

  maxResults: apiUserProfile.maxResults || 10,

  lastLogin: apiUserProfile.lastLogin ?? "Never",

  notificationCount:
    apiUserProfile.notificationCount ?? 0,
};

console.log("\n===== USER PROFILE 2 =====");
console.log(processedProfile2);



/*

WHY || AND ?? BEHAVE DIFFERENTLY

|| treats ALL falsey values as missing:

false
0
""
null
undefined
NaN

Example:

"" || "light"
Result: "light"


?? only treats null and undefined as missing.

Example:

0 ?? 10
Result: 0

Therefore:

theme = ""

"" || "light"
Result: "light"


notificationCount = 0

0 ?? 0
Result: 0

The value 0 is preserved because it is a valid number.

*/





/*********************************************************
 Challenge 4 - Part C
 Guard Clauses with && and ?.

 Requirements:

 1. && Guard Clauses
 2. Optional Chaining (?.)
 3. Optional Chaining + Default Value (??)

 Uses unique variable names to avoid redeclaration errors.
*********************************************************/


/* =====================================================
   TEST DATA
===================================================== */

// User with full address information
const fullUserData = {
  name: "Joy",
  address: {
    city: "Johannesburg",
  },
};

// User missing address
const userWithoutAddress = {
  name: "Joy",
};

// User is null
const nullUserData = null;



/* =====================================================
   TECHNIQUE 1
   && Guard Clauses
===================================================== */

console.log("\n===== TECHNIQUE 1: && GUARD CLAUSES =====");

console.log(
  "Full User:",
  fullUserData &&
    fullUserData.address &&
    fullUserData.address.city
);

console.log(
  "Missing Address:",
  userWithoutAddress &&
    userWithoutAddress.address &&
    userWithoutAddress.address.city
);

console.log(
  "Null User:",
  nullUserData &&
    nullUserData.address &&
    nullUserData.address.city
);



/* =====================================================
   TECHNIQUE 2
   Optional Chaining
===================================================== */

console.log("\n===== TECHN*QUE 2: OPTIONAL CHAINING =====");
console.log(
  "Full User:",
  ful*UserData?.address?.city
);

console.log(
  "Missing Address:",
  userWithoutAddress?.address?.city
);

console.log(
  "Null User:",
  nullUserData?.address?.city
);



/* =====================================================
   TECHNIQUE 3
   Optional Chaining + Default Value
===================================================== */

console.log("\n===== TECHNIQUE *: ?. + ?? =====");

console.log(
 "Full User:",
  fullUserData?.addr*ss?.city ??
    "Unknown city"
);
console.log(
  "Missing Address:",  userWithoutAddress?.address?.city ??
    "Unknown city"
);

console.log(
  "Null User:",
  nullUserData?.address?.city ??
    "Unknown city"
);



/*

EXPECTED OUTPUT

===== TECHNIQUE 1: && GUARD CLAUSES =====

Full User: Johannesburg
Missing Address: undefined
Null User: null


===== TECHNIQUE 2: OPTIONAL CHAINING =====

Full User: Johannesburg
Missing Address: undefined
Null User: undefined


===== TECHNIQUE 3: ?. + ?? =====

Full User: Johannesburg
Missing Address: Unknown city
Null User: Unknown city


EXPLANATION

&& Guard Clauses:
Stops as soon as a value is missing.

Optional Chaining (?.):
Safely accesses nested properties without throwing errors.

Nullish Coalescing (??):
Provides a default value only when the result is
null or undefined.

*/





/*********************************************************
 Challenge 4 - Part D
 Predict the Output (4 Marks)

 Instructions:
 For each expression:

  Predict the OUTPUT
  Predict the TYPE
  Explain WHY
  Verify using console.log()
*********************************************************/


/* =====================================================
   1. null || undefined || 0 || "" || "finally"
===================================================== */

// Prediction Output: "finally"
// Prediction Type: string
//
// Evaluation:
// null -> falsey
// undefined -> falsey
// 0 -> falsey
// "" -> falsey
// "finally" -> first truthy value returned

console.log("1:", null || undefined || 0 || "" || "finally");
console.log("Type:", typeof (null || undefined || 0 || "" || "finally"));



/* =====================================================
   2. null ?? undefined ?? 0 ?? "" ?? "finally"
===================================================== */

// Prediction Output: 0
// Prediction Type: number
//
// Evaluation:
// null -> continue
// undefined -> continue
// 0 -> first NON-NULLISH value
// Stop here

console.log("2:", null ?? undefined ?? 0 ?? "" ?? "finally");
console.log("Type:", typeof (null ?? undefined ?? 0 ?? "" ?? "finally"));



/* =====================================================
   3. 0 || "first truthy"
===================================================== */

// Prediction Output: "first truthy"
// Prediction Type: string
//
// Evaluation:
// 0 is falsey
// Returns first truthy value

console.log("3:", 0 || "first truthy");
console.log("Type:", typeof (0 || "first truthy"));



/* =====================================================
   4. 0 ?? "first non-nullish"
===================================================== */

// Prediction Output: 0
// Prediction Type: number
//
// Evaluation:
// 0 is NOT null or undefined
// Therefore it is returned

console.log("4:", 0 ?? "first non-nullish");
console.log("Type:", typeof (0 ?? "first non-nullish"));



/* =====================================================
   5. true && false && "never reached"
===================================================== */

// Prediction Output: false
// Prediction Type: boolean
//
// Evaluation:
// true && false
// = false
//
// Short-circuit occurs.
// Expression stops immediately.

console.log("5:", true && false && "never reached");
console.log("Type:", typeof (true && false && "never reached"));



/* =====================================================
   6. "first" && "second" && "third"
===================================================== */

// Prediction Output: "third"
// Prediction Type: string
//
// Evaluation:
// All are truthy
// && returns the LAST value

console.log("6:", "first" && "second" && "third");
console.log("Type:", typeof ("first" && "second" && "third"));



/* =====================================================
   7. false || (true && "yes")
===================================================== */

// Prediction Output: "yes"
// Prediction Type: string
//
// Evaluation:
// true && "yes" -> "yes"
// false || "yes" -> "yes"

console.log("7:", false || (true && "yes"));
console.log("Type:", typeof (false || (true && "yes")));



/* =====================================================
   8. (false || true) && "yes"
===================================================== */

// Prediction Output: "yes"
// Prediction Type: string
//
// Evaluation:
// false || true -> true
// true && "yes" -> "yes"

console.log("8:", (false || true) && "yes");
console.log("Type:", typeof ((false || true) && "yes"));



/* =====================================================
   9. 1 && 2 && 3
===================================================== */

// Prediction Output: 3
// Prediction Type: number
//
// Evaluation:
// 1 is truthy
// 2 is truthy
// 3 is truthy
//
// && returns the last value

console.log("9:", 1 && 2 && 3);
console.log("Type:", typeof (1 && 2 && 3));



/* =====================================================
   10. null?.foo?.bar?.baz
===================================================== */

// Prediction Output: undefined
// Prediction Type: undefined
//
// Evaluation:
// null?.foo
// Optional chaining stops safely
// No error is thrown

console.log("10:", null?.foo?.bar?.baz);
console.log("Type:", typeof (null?.foo?.bar?.baz));



/*********************************************************
 SUMMARY OF RESULTS
*********************************************************

1. "finally"      -> string
2. 0              -> number
3. "first truthy" -> string
4. 0              -> number
5. false          -> boolean
6. "third"        -> string
7. "yes"          -> string
8. "yes"          -> string
9. 3              -> number
10. undefined     -> undefined

*********************************************************/


/*********************************************************
 INTERVIEW TAKEAWAYS
*********************************************************

1. || returns the first TRUTHY value.
2. ?? returns the first NON-NULLISH value.
3. && returns the first FALSEY value, or the last
   value if all operands are truthy.
4. Optional chaining (?.) prevents runtime errors
   when attempting to access properties on null or
   undefined values.
5. 0, false, and "" are valid values for ??, but
   they are considered falsey by ||.

*********************************************************/





/*********************************************************
 Challenge 5 - Part A
 typeof Mastery (3 Marks)

 Instructions:
  Predict the output
  Verify using console.log()
  Explain why

 Note:
 typeof is useful for checking data types, but it has
 some famous JavaScript quirks that interviewers love
 to ask about.
*********************************************************/


/* =====================================================
   1. typeof 42
===================================================== */

// Prediction: "number"
// Reason: 42 is a numeric value.

console.log("1:", typeof 42);



/* =====================================================
   2. typeof "hello"
===================================================== */

// Prediction: "string"
// Reason: Text values are strings.

console.log("2:", typeof "hello");



/* =====================================================
   3. typeof true
===================================================== */

// Prediction: "boolean"
// Reason: true and false are Boolean values.

console.log("3:", typeof true);



/* =====================================================
   4. typeof undefined
===================================================== */

// Prediction: "undefined"
// Reason: The value undefined has its own type.

console.log("4:", typeof undefined);



/* =====================================================
   5. typeof null
===================================================== */

// Prediction: "object"
// Reason:
// This is JavaScript's most famous bug.
// null is NOT actually an object, but typeof returns
// "object" due to a legacy design mistake.

console.log("5:", typeof null);



/* =====================================================
   6. typeof {}
===================================================== */

// Prediction: "object"
// Reason: Plain objects return "object".

console.log("6:", typeof {});



/* =====================================================
   7. typeof []
===================================================== */

// Prediction: "object"
// Reason:
// Arrays are special objects in JavaScript.

console.log("7:", typeof []);



/* =====================================================
   8. typeof function() {}
===================================================== */

// Prediction: "function"
// Reason:
// Functions have their own special typeof result.

console.log("8:", typeof function () {});



/* =====================================================
   9. typeof NaN
===================================================== */

// Prediction: "number"
// Reason:
// NaN stands for "Not a Number" but is actually
// considered a numeric type.

console.log("9:", typeof NaN);



/* =====================================================
   10. typeof undeclaredVariable
===================================================== */

// Prediction: "undefined"
// Reason:
// typeof safely checks undeclared variables and does
// NOT throw a ReferenceError.

console.log("10:", typeof undeclaredVariable);



/*********************************************************
 ARRAY VS OBJECT
*********************************************************/

/*

typeof []      -> "object"
typeof {}      -> "object"

Because both return "object", typeof alone cannot
distinguish between them.

Correct one-liner:

*/

const value = [1, 2, 3];

console.log(Array.isArray(value));



/*********************************************************
 BETTER EXAMPLES
*********************************************************/

// Array check
console.log(Array.isArray([1, 2, 3])); // true

// Object check
console.log(Array.isArray({})); // false



/*********************************************************
 INTERVIEW NOTES
*********************************************************/

/*

typeof Results Summary

typeof 42                -> "number"
typeof "hello"           -> "string"
typeof true              -> "boolean"
typeof undefined         -> "undefined"
typeof null              -> "object"   <-- famous bug
typeof {}                -> "object"
typeof []                -> "object"   <-- common trap
typeof function() {}     -> "function"
typeof NaN               -> "number"
typeof undeclaredVar     -> "undefined"

Most Important Interview Gotchas

1. typeof null
--------------
Returns "object" even though null is not an object.

2. typeof []
-------------
Returns "object" because arrays are specialized objects.

3. typeof NaN
-------------
Returns "number" even though the name suggests otherwise.

4. typeof undeclaredVariable
----------------------------
Returns "undefined" and does NOT throw an error.

This behavior makes typeof useful when checking whether
a variable exists before using it.

Best Way to Detect Arrays

Array.isArray(value)

Examples:

Array.isArray([]);   // true
Array.isArray({});   // false

*/





/*********************************************************
 Challenge 5 - Part B
 instanceof with Real Types (3 Marks)

 Instructions:
 ✅ Predict the output
 ✅ Verify using console.log()
 ✅ Explain why

 The instanceof operator checks whether an object
 was created from a particular constructor.
*********************************************************/


/* =====================================================
   1. [] instanceof Array
===================================================== */

// Prediction: true
// Reason:
// [] is an array object created by the Array constructor.

console.log("1:", [] instanceof Array);



/* =====================================================
   2. [] instanceof Object
===================================================== */

// Prediction: true
// Reason:
// Arrays are special types of objects in JavaScript.

console.log("2:", [] instanceof Object);



/* =====================================================
   3. {} instanceof Object
===================================================== */

// Prediction: true
// Reason:
// Plain objects are created from the Object constructor.

console.log("3:", {} instanceof Object);



/* =====================================================
   4. "hello" instanceof String
===================================================== */

// Prediction: false
// Reason:
// "hello" is a primitive string, not a String object.

console.log("4:", "hello" instanceof String);



/* =====================================================
   5. new String("hello") instanceof String
===================================================== */

// Prediction: true
// Reason:
// This creates a String object using the String constructor.

console.log("5:", new String("hello") instanceof String);



/* =====================================================
   6. 42 instanceof Number
===================================================== */

// Prediction: false
// Reason:
// 42 is a primitive number, not a Number object.

console.log("6:", 42 instanceof Number);



/* =====================================================
   7. new Date() instanceof Date
===================================================== */

// Prediction: true
// Reason:
// new Date() creates a Date object.

console.log("7:", new Date() instanceof Date);



/* =====================================================
   8. /abc/ instanceof RegExp
===================================================== */

// Prediction: true
// Reason:
// /abc/ creates a regular expression object.

console.log("8:", /abc/ instanceof RegExp);



/*********************************************************
 PRIMITIVES VS OBJECT WRAPPERS
*********************************************************/

// Primitive values

const primitiveString = "hello";
const primitiveNumber = 42;
const primitiveBoolean = true;

// Object wrappers

const stringObject = new String("hello");
const numberObject = new Number(42);
const booleanObject = new Boolean(true);

console.log(primitiveString instanceof String); // false
console.log(stringObject instanceof String);    // true

console.log(primitiveNumber instanceof Number); // false
console.log(numberObject instanceof Number);    // true

console.log(primitiveBoolean instanceof Boolean); // false
console.log(booleanObject instanceof Boolean);    // true



/*********************************************************
 INTERVIEW ANSWER
*********************************************************/

/*

Q: What is the ONE case where typeof is the right tool
and instanceof is wrong?

Answer:

When checking primitive data types.

Example:

const age = 25;

typeof age === "number";      // true
age instanceof Number;        // false

Reason:

instanceof only works with objects created by a
constructor. Primitive values are not instances of
Number, String, or Boolean objects.



---------------------------------------------------------

Q: What is the ONE case where instanceof is the right
tool and typeof is wrong?

Answer:

When distinguishing specific object types such as
Array, Date, or RegExp.

Example:

typeof [];                // "object"
typeof new Date();        // "object"

These results are too generic.

instanceof gives more detail:

[] instanceof Array;      // true
new Date() instanceof Date; // true

Reason:

typeof returns "object" for many different object
types, while instanceof can identify the actual
constructor used to create them.



---------------------------------------------------------

Summary

Use typeof for:
✔ string
✔ number
✔ boolean
✔ undefined
✔ function

Use instanceof for:
✔ Array
✔ Date
✔ RegExp
✔ Custom Classes
✔ Constructor-created Objects

*/





// ============================================================
// Part C — delete and its gotchas
// NOTE: This file runs in "sloppy mode" (no 'use strict'),
// so failed deletes return false instead of throwing errors.
// ============================================================

// ------------------------------------------------------------
// 1. Deleting a property from an object
// ------------------------------------------------------------
console.log('--- 1. Delete an object property ---');

const user = { name: 'Lerato', age: 25, role: 'student' };

console.log('Before delete:', user);   // { name: 'Lerato', age: 25, role: 'student' }

// delete removes the property AND its value from the object entirely
const result1 = delete user.role;

console.log('After delete:', user);    // { name: 'Lerato', age: 25 }
console.log('delete returned:', result1);   // true (the property was removed)
console.log('user.role is now:', user.role); // undefined (property no longer exists)

// ------------------------------------------------------------
// 2. Trying to delete a variable
// ------------------------------------------------------------
console.log('\n--- 2. Delete a variable ---');

// The error VS Code showed ("'delete' cannot be called on an identifier
// in strict mode") is the point of this exercise: writing `delete x;`
// directly is a SyntaxError in strict mode (and VS Code treats files
// as strict). So we run the delete inside code that is evaluated
// separately, which lets us SEE what happens in both modes without
// the editor flagging the file.

let x = 5;
console.log('x is:', x); // 5

// (a) SLOPPY mode: new Function() bodies are sloppy unless they contain
// 'use strict'. delete on a variable simply FAILS and returns false.
const sloppyResult = new Function('let x = 5; return delete x;')();
console.log('Sloppy mode -> delete x returned:', sloppyResult); // false

// (b) STRICT mode: the same code is rejected outright with a SyntaxError.
try {
  new Function('"use strict"; let x = 5; return delete x;')();
} catch (err) {
  console.log('Strict mode ->', err.name + ': ' + err.message);
  // SyntaxError: Delete of an unqualified identifier in strict mode.
}

// WHY: delete only works on object PROPERTIES (e.g. delete obj.key).
// Variables declared with let, const or var are bindings, not
// configurable properties, so they cannot be deleted.
console.log('x is still:', x); // 5 -> nothing was removed

// ------------------------------------------------------------
// 3. Deleting an array element
// ------------------------------------------------------------
console.log('\n--- 3. Delete an array element ---');

const arr = [1, 2, 3, 4];
delete arr[1];

console.log('arr:', arr);                 // [ 1, <1 empty item>, 3, 4 ]
console.log('arr.length:', arr.length);   // 4 (length does NOT change!)
console.log('arr[1]:', arr[1]);           // undefined

// WHY delete ON ARRAYS IS DANGEROUS:
// delete only removes the property at that index. It does NOT shift the
// remaining elements down and does NOT update arr.length. It leaves a
// "hole" (an empty slot) in the array, making it a "sparse array".
// The array still says it has 4 items, but one of them doesn't exist.
// Holes are skipped by methods like forEach/map/filter but not by a
// normal for loop (which sees `undefined`), so behaviour becomes
// inconsistent and causes hard-to-find bugs. It can also hurt performance.

// Proof that the hole is a missing property, not just the value undefined:
console.log('Is index 1 in arr?', 1 in arr); // false -> the slot is empty

// ------------------------------------------------------------
// 4. Trying to delete a built-in property
// ------------------------------------------------------------
console.log('\n--- 4. Delete a built-in (Math.PI) ---');

// Wrapped in try/catch so the file works in BOTH modes: in sloppy mode
// delete returns false, in strict mode (modules) it throws a TypeError.
let result4;
try {
  result4 = delete Math.PI;
} catch (err) {
  result4 = false;
  console.log('Strict mode error:', err.name + ' - ' + err.message);
}

console.log('delete Math.PI returned:', result4); // false -> it did NOT work
console.log('Math.PI is still:', Math.PI);        // 3.141592653589793

// WHY IT DOESN'T WORK:
// Every object property has "attributes" (a property descriptor).
// One of them is `configurable`. If configurable is false, the property
// is a NON-CONFIGURABLE property: it cannot be deleted, and its
// attributes (like writable/enumerable) cannot be changed.
// Math.PI is defined as non-configurable (and non-writable) so nobody
// can accidentally change or remove it.
console.log(
  'Math.PI descriptor:',
  Object.getOwnPropertyDescriptor(Math, 'PI')
);
// { value: 3.14159..., writable: false, enumerable: false, configurable: false }

// In strict mode, this would throw a TypeError instead of returning false:
(function () {
  'use strict';
  try {
    delete Math.PI;
  } catch (err) {
    console.log('Strict mode error:', err.name + ' - ' + err.message);
  }
})();

// ------------------------------------------------------------
// FINAL INTERVIEW ANSWER (as code + comments)
// "You have an array of items and you need to remove one.
//  Why would you NOT use delete, and what should you use instead?"
// ------------------------------------------------------------
console.log('\n--- Interview answer: removing an item properly ---');

// I would NOT use delete because it leaves a hole and doesn't change
// the length, so the array ends up in a broken, inconsistent state.

// Use splice(index, deleteCount) to remove an item IN PLACE.
// It shifts later elements down and updates the length.
const items = ['a', 'b', 'c', 'd'];
items.splice(1, 1); // remove 1 element at index 1
console.log('After splice:', items, '| length:', items.length); // [ 'a', 'c', 'd' ] | 3

// Use filter() to create a NEW array without the item (doesn't mutate
// the original, which is preferred in modern JS/React-style code).
const original = ['a', 'b', 'c', 'd'];
const withoutB = original.filter(item => item !== 'b');
console.log('After filter:', withoutB, '| original untouched:', original);

// Other useful methods: pop() removes the last item, shift() removes the
// first item, and toSpliced() (ES2023) is a non-mutating version of splice.






// ============================================================
// Challenge 6 — Bitwise Operators & Permission System
// Each permission is ONE BIT, so many permissions fit in ONE number.
// ============================================================

// Everything below is wrapped in an IIFE (immediately invoked function
// expression) so its variables (user, READ, WRITE, bin, ...) live in a
// private scope and can NEVER clash with variables from other challenges
// in the same file (e.g. "Cannot redeclare block-scoped variable 'user'").
(function challenge6() {

  // Permission flags: each is a power of 2 (a single bit set)
  const READ   = 1; // binary 0001
  const WRITE  = 2; // binary 0010
  const DELETE = 4; // binary 0100
  const ADMIN  = 8; // binary 1000

  // Helper: show a number as a 4-bit binary string (e.g. 3 -> "0011")
  // so the output makes the bits visible.
  const bin = (n) => n.toString(2).padStart(4, '0');

  // ------------------------------------------------------------
  // 1. Create a user with READ + WRITE using | (OR)
  // ------------------------------------------------------------
  console.log('--- 1. User with READ + WRITE ---');

  // OR sets a bit to 1 if it is 1 in EITHER number:
  //   0001 (READ)
  // | 0010 (WRITE)
  // = 0011 (3)
  let user = READ | WRITE;

  console.log('user =', user, '| binary:', bin(user)); // 3 | 0011

  // ------------------------------------------------------------
  // 2. Create an admin user with ALL permissions
  // ------------------------------------------------------------
  console.log('\n--- 2. Admin with ALL permissions ---');

  // 0001 | 0010 | 0100 | 1000 = 1111 (15)
  const adminUser = READ | WRITE | DELETE | ADMIN;

  console.log('adminUser =', adminUser, '| binary:', bin(adminUser)); // 15 | 1111

  // ------------------------------------------------------------
  // 3. Check if the user has READ using & (AND)
  // ------------------------------------------------------------
  console.log('\n--- 3. Does user have READ? ---');

  // AND keeps a bit only if it is 1 in BOTH numbers. Anding with a flag
  // isolates that one bit: result is the flag itself (truthy) if the user
  // has it, or 0 (falsy) if not.
  //   0011 (user)
  // & 0001 (READ)
  // = 0001 -> truthy -> "Yes"
  console.log('user & READ =', user & READ);
  console.log((user & READ) ? 'Yes' : 'No'); // Yes

  // ------------------------------------------------------------
  // 4. Check if the user has DELETE using &
  // ------------------------------------------------------------
  console.log('\n--- 4. Does user have DELETE? ---');

  //   0011 (user)
  // & 0100 (DELETE)
  // = 0000 -> 0 is falsy -> "No"
  console.log('user & DELETE =', user & DELETE);
  console.log((user & DELETE) ? 'Yes' : 'No'); // No

  // ------------------------------------------------------------
  // 5. Grant DELETE using |= (compound bitwise OR assignment)
  // ------------------------------------------------------------
  console.log('\n--- 5. Grant DELETE ---');

  // user |= DELETE is shorthand for: user = user | DELETE
  // OR turns the DELETE bit on and leaves the other bits untouched.
  //   0011 (user)
  // | 0100 (DELETE)
  // = 0111 (7)
  user |= DELETE;

  console.log('user =', user, '| binary:', bin(user));                  // 7 | 0111
  console.log('Has DELETE now?', (user & DELETE) ? 'Yes' : 'No');       // Yes

  // ------------------------------------------------------------
  // 6. Revoke WRITE using & with ~ (NOT)  <-- the tricky one
  // ------------------------------------------------------------
  console.log('\n--- 6. Revoke WRITE ---');

  // Step 1: ~WRITE flips EVERY bit of WRITE:
  //   WRITE  = 0010
  //   ~WRITE = 1101 (in 4 bits; really 32 bits: ...11111101, which is -3)
  // Step 2: & with that "mask" keeps every bit EXCEPT the WRITE bit,
  //         which is forced to 0:
  //   0111 (user)
  // & 1101 (~WRITE)
  // = 0101 (5)
  // Shorthand: user &= ~WRITE   (same as user = user & ~WRITE)
  user &= ~WRITE;

  console.log('~WRITE =', ~WRITE);                                       // -3
  console.log('user =', user, '| binary:', bin(user));                   // 5 | 0101
  console.log('Has WRITE now?', (user & WRITE) ? 'Yes' : 'No');          // No
  console.log('Still has READ?', (user & READ) ? 'Yes' : 'No');          // Yes
  console.log('Still has DELETE?', (user & DELETE) ? 'Yes' : 'No');      // Yes

  // ------------------------------------------------------------
  // 7. Toggle ADMIN using ^ (XOR)
  // ------------------------------------------------------------
  console.log('\n--- 7. Toggle ADMIN with XOR ---');

  // XOR sets a bit to 1 only if the two bits are DIFFERENT. XOR-ing with a
  // flag flips that one bit: off -> on, on -> off. Other bits are unchanged.
  function toggleAdmin(perms) {
    return perms ^ ADMIN;
  }

  console.log('Start:        ', user, '|', bin(user));      // 5  | 0101 (no ADMIN)
  user = toggleAdmin(user);
  console.log('Toggle #1 (on): ', user, '|', bin(user));    // 13 | 1101 (ADMIN on)
  user = toggleAdmin(user);
  console.log('Toggle #2 (off):', user, '|', bin(user));    // 5  | 0101 (ADMIN off)

  // ------------------------------------------------------------
  // 8. Add SUPER_ADMIN with << (left shift), no hardcoded 16
  // ------------------------------------------------------------
  console.log('\n--- 8. Add SUPER_ADMIN with << ---');

  // Left shift moves all bits left, so 1 << n equals 2 to the power n.
  // Each new permission is the next power of 2:
  //   ADMIN is 1000 (8), so shifting it left by 1 gives 10000 (16).
  // Better still, define every flag with << so you never type numbers
  // by hand:  1 << 0 = 1, 1 << 1 = 2, 1 << 2 = 4, 1 << 3 = 8, 1 << 4 = 16
  const SUPER_ADMIN = ADMIN << 1; // 16, binary 10000

  console.log('SUPER_ADMIN =', SUPER_ADMIN, '| binary:', SUPER_ADMIN.toString(2)); // 16 | 10000

  // Our 4-bit helper would cut off the 5th bit, so use a plain toString(2).
  const everything = adminUser | SUPER_ADMIN; // 11111 (31)
  console.log('Everything =', everything, '| binary:', everything.toString(2));
  console.log('Has SUPER_ADMIN?', (everything & SUPER_ADMIN) ? 'Yes' : 'No'); // Yes

  // ============================================================
  // INTERVIEW ANSWERS
  // ============================================================

  // ------------------------------------------------------------
  // Q1. Why use bitwise flags instead of an array like ['read', 'write']?
  // ------------------------------------------------------------
  // Reason 1 - Memory and storage: a whole permission set is ONE integer
  //   (e.g. 5) instead of an array of strings. That is one small database
  //   column, a tiny JWT claim, and a very small network payload.
  // Reason 2 - Speed and simplicity of checks: testing, granting and
  //   revoking a permission is a single CPU operation (&, |, &= ~) with no
  //   looping or string comparison like array.includes('read'). Combining
  //   two permission sets is also one operation: (a | b).
  //   Bonus: no typos like 'raed', since flags are constants.

  // ------------------------------------------------------------
  // Q2. Downsides? When would you NOT use this pattern?
  // ------------------------------------------------------------
  // - Readability: 13 in a database means nothing without decoding it, so
  //   debugging and manual SQL queries are harder than reading 'read,write'.
  // - Hard limit: JavaScript bitwise operators work on 32-bit integers, so
  //   you get at most 31-32 flags (BigInt is needed beyond that).
  // - Inflexible: flags can't hold extra data (e.g. "can edit only
  //   project 42") and renaming/reordering flags breaks stored values.
  // Don't use it when permissions are numerous, dynamic, user-defined, or
  // resource-specific (use roles/ACL tables or an array/object), or when
  // readability matters more than saving a few bytes.

  // ------------------------------------------------------------
  // Q3. Difference between & and &&, and | and ||
  // ------------------------------------------------------------
  // & and | are BITWISE: they compare numbers bit by bit and return a NUMBER.
  // && and || are LOGICAL: they treat each side as true/false, short-circuit
  // (stop early), and return one of the original VALUES.

  console.log('\n--- Q3 demo: the silent bug ---');

  const viewer = WRITE; // this user has ONLY write permission (0010)

  // CORRECT: bitwise & checks the actual READ bit
  console.log('Correct (&):  has READ?', (viewer & READ) ? 'Yes' : 'No');   // No

  // BUG: && only asks "are both values truthy?". viewer (2) is truthy and
  // READ (1) is truthy, so it returns READ (1) and wrongly says Yes. No error
  // is thrown, so the user is silently given access they should not have.
  console.log('Buggy (&&):    has READ?', (viewer && READ) ? 'Yes' : 'No');  // Yes (WRONG)

  // Same trap with | vs ||: combining flags.
  const goodPerms = READ | WRITE;  // 3 (0011) - both flags combined
  const badPerms  = READ || WRITE; // 1 - || short-circuits: READ is truthy,
                                   // so it returns READ and never looks at WRITE
  console.log('READ | WRITE  =', goodPerms); // 3
  console.log('READ || WRITE =', badPerms);  // 1 (WRITE silently lost)
})();




