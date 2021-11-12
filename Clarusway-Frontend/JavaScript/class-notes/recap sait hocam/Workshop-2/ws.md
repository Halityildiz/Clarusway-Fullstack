### EXECUTION CONTENT

- Code in JavaScript is always ran inside a type of **execution context**. Execution context is simply the `environment within which your code is ran`. There are 2 types of execution context in JavaScript, **global** or **function**. There are 2 stages as well to `each context`, the **creation** and **executing phase**. As the JavaScript engine starts to read your code, it creates something called the **Global Execution Context.**

#### Creation Phase

- Global object created
- Initializes this keyword to global

#### Executing Phase

- Variable Environment created - memory space for var variables and functions created
- Initializes all variables to undefined (also known as hoisting) and places them with any functions into memory

#### Functional Execution Context

- A function context is created by the JavaScript engine when it sees a function call. Each function gets its `own execution context`.

##### Creation Phase

- Argument object created with any arguments
- Sets this to the global object unless in strict mode, where it’s undefined

##### Executing Phase

- Variable Environment created - memory space for variable and functions created
- Initializes all variables to undefined and places them into memory with any new functions

### LEXICAL ENVIRONMENT

- A lexical environment is basically the scope or environment the engine is currently reading code in. A new lexical environment is created when curly brackets {} are used,even nested brackets {{...}} create a new lexical environment. The execution context tells the engine which lexical environment it is currently working in and the lexical scope determines the available variables.

### SCOPE CHAIN

- The scope chain gives us access to variables in the parent environment

### FUNCTION AND BLOCK SCOPE

- Most programming languages are block scoped, meaning every time you see a new { } (curly braces) is a new lexical environment. However, JavaScript is function scoped,meaning it only creates a new local environment if it sees the keyword function on the global scope. To give us access to block scope, in ES6 let and const were added to the language. Using these can prevent memory leaks, but there is still an argument to be made for using var.

### THIS

- this is the **object** that the `function is a property of`
- two main benefits:
  - 1: gives methods access to their object
  - 2: execute same code for multiple objects
- How to bind THIS
  - new keyword binding
  - implicit binding
  - explicit binding
- this refers to whatever is on the left of the . (dot) when calling a method
- everything in JavaScript is **lexically scoped** **except** for the **this** keyword. It doesn't matter where it is written, it matters how it is **called.**(Dynamic Scoped)

### CALL, APPLY, BIND

- call and apply are useful for **borrowing methods** from an object, while bind is useful for us to call functions later on with a certain context or certain this keyword.

#### One more thing

- Context is more about object based context, what's the value of the this keyword, which is a reference to the object that owns that current executing code.
- `Context` is most often determined by how a function is invoked with the value of this keyword and scope refers to the visibility of variables.
- Programs are simply assigning memory, for example assigning a value to a variable and then running a function for the program to do something with those variables.That's all programs are.

### OOP

- Object Oriented Programming, or OOP, is the idea that all code should be grouped into "boxes" (objects) to make your program easier to read and understand. Keeping the data encapsulated helps to keep the program organized. Each object has a state that defines what it does and methods (functions on an object) that can use or modify the state.

#### Factory Functions

#### Constructor Functions

#### Class

### Prototypal Inheritance

- Almost all objects in Javascript pass down properties through a prototype chain. We call this chain, prototypal inheritance. The child of the object "inherits" properties from its parent.

#### Prototype vs (**proto**)
