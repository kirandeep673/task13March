# Task 1

# What does async and await return?

- When a function is declared with the async keyword, it always returns a Promise. Even if you explicitly return a non-Promise value, JavaScript will automatically wrap it in a resolved Promise.

# Example

- async function example() {
    - return "Hello";
- }

- console.log(example()); // Promise {"Hello"}

- example().then(result => console.log(result)); // "Hello"


# Can we change the answer return by async and await?

- Since an async function always returns a Promise, you can modify what it resolves to by:

- Returning a different value.
- Explicitly returning a Promise.resolve() or Promise.reject().

# What are the stages return by promise? 

## Pending
## Fulfilled(Resolved)
## Rejected

## 1. Pending

- This is the initial state when the Promise is neither fulfilled nor rejected.
- The asynchronous operation is still in progress.

# Example (Pending)

- let promise = new Promise((resolve, reject) => {
    - // Async task happening here (e.g., fetching data)
    - setTimeout(() => resolve("Success!"), 2000);
- });

- console.log(promise); // Promise { <pending> }

## 2. Fulfilled (Resolved)

- The Promise successfully completes the operation and returns a result using resolve(value).
- The .then() method is used to handle the resolved value.

# Example (Fulfilled)

- let promise = new Promise((resolve) => {
    - setTimeout(() => resolve("Data Loaded"), 2000);
- });

- promise.then(result => console.log(result)); // "Data Loaded" after 2 seconds

## 3. Rejected

- The Promise fails due to some reason (e.g., an error in the operation).
- The reject(error) function is called, and .catch() is used to handle the error.

# Example (Rejected)

 - let promise = new Promise((resolve, reject) => {
    - setTimeout(() => reject("Error Occurred!"), 2000);
- });

- promise.catch(error => console.log(error)); // "Error Occurred!" after 2 seconds
   
# What are browser API's?

- Browser APIs (Application Programming Interfaces) are built-in features provided by web browsers that allow developers to interact    with the browser and perform various tasks like handling user interactions, fetching data, manipulating the DOM, and more.

# DOM API
# Fetch API
# Storage API
# Geoloation API
# Clipboard API
# Notification API
# Web Storage API
# Websockets API
# History API
# Speech API

# What are global context?

- The global context in JavaScript refers to the environment in which code is executed outside of any function or block scope. This includes variables, functions, and objects that are accessible from anywhere in the script. 

# How javascript actually runs?

- JavaScript runs in a single-threaded environment but can handle asynchronous tasks using event loops and callbacks. 

- JavaScript is executed by an engine. The engine consists of:

- Memory Heap -> Where variables and function objects are stored.
- Call Stack -> Keeps track of function execution.

# What is the Event Loop in JavaScript?

- The Event Loop is a mechanism in JavaScript that allows asynchronous operations (like setTimeout, fetch, and event listeners) to be handled without blocking the execution of other code.

- JavaScript is single-threaded, meaning it can only execute one task at a time in the Call Stack. However, with the help of the Event Loop, it can handle asynchronous operations efficiently.

# Example - Synchronous execution

- console.log("Start");

- function hello() {
   - console.log("Hello!");
- }
- hello();
- console.log("End");

# Execution flow

 - console.log("Start") -> Executed
 - hello() function is called -> Added to Call Stack
 - console.log("Hello!") -> Executed
 - hello() is removed from the stack
 - console.log("End") -> Executed

 # Output 

- Start
- Hello
- End

 # Asynchronous execution

- console.log("Start");
- setTimeout(() => console.log("Inside Timeout"), 2000);
- console.log("End");

# Execution flow

- console.log("Start") -> Runs immediately.
- setTimeout(() => console.log("Inside Timeout"), 2000);
- Sent to Web API, starts a 2-second timer.
- console.log("End") -> Runs immediately.
- After 2 seconds, console.log("Inside Timeout") moves to the Callback Queue.
- Event Loop moves it to the Call Stack (only when it's empty).
- console.log("Inside Timeout") executes.

# Output

- Start
- End
- Inside Timeout

# What is the Task Queue in JavaScript?

The Task Queue (also called the Callback Queue or Macrotask Queue) is where JavaScript stores asynchronous operations that are ready to be executed after the Call Stack is empty. These tasks come from functions like:

- setTimeout()
- setInterval()
- setImmediate() (Node.js)
- I/O operations (reading files, network requests)
- UI rendering events

# There are two types of task queue in js

- Microtask
- Macrotask

# Example Microtasks Run Before Macrotasks

- console.log("Start");
- setTimeout(() => console.log("Macrotask - setTimeout"), 0);
- Promise.resolve().then(() => console.log("Microtask - Promise"));
- console.log("End");

# Output

- Start
- End
- Microtask - Promise
- Macrotask - setTimeout

# What is JavaScript Execution Context?

- A JavaScript Execution Context is an environment where JavaScript code is executed. It defines the scope in which code runs and determines how functions and variables are accessed during execution.

# 3 types of execution context

- Global Execution Context (GEC)
- Function Execution Context (FEC)  
- Eval Execution Context (EEC)