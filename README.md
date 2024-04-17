# TypeScript

## Table of Contents

- [Introduction](#introduction)
- [What is TypeScript?](#what-is-typescript)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Your First TypeScript Program](#your-first-typescript-program)
- [Configuring the TypeScript Compiler](#configuring-the-typescript-compiler)
- [Debugging TypeScript Applications](#debugging-typescript-applications)
- [Fundamentals](#fundamentals)
  - [Built-In Types](#built-in-types)
  - [The any Type](#the-any-type)
  - [Arrays](#arrays)
  - [Tuples](#tuples)
  - [Enums](#enums)
  - [Functions](#functions)
  - [Objects](#objects)
- [Advanced Types](#advanced-types)
  - [Type Aliases](#type-aliases)
  - [Union Types](#union-types)
  - [Intersection Types](#intersection-types)
  - [Literal Types](#literal-types)
  - [Nullable Types](#nullable-types)
  - [Optional Chaining](#chaining)


# introduction
# what-is-typescript

TypeScript is a programming language that builds upon JavaScript by adding static typing with optional type annotations.Type script add some other cool features to make javascript more robust and maintainable application.
we have two type of programming language Static and Dynamic type so in static type like c#, c++, java. and Dynamic type like javaScript, Python and Ruby.
We use TypeScript for type safety so we get type checking.

Benifits 
- Static Typing
- Code Completion
- Refactoring
- Shorthand notations

Drawback
- compilation
- Dicipline on writing code

# setting-up-the-development-environment

To install TypeScript in VS Code:

Install Node.js (if not already installed).
Open VS Code.
Press Ctrl + ` to open the terminal.
Run npm install -g typescript in the terminal.
TypeScript is now installed globally on your system and ready to use in VS Code.

# configuring-the-typescript-compiler


Configuring the TypeScript compiler involves creating or modifying a tsconfig.json file in your project directory. This file contains compiler options that dictate how TypeScript should compile your code.

Create tsconfig.json: Start by creating a tsconfig.json file in your project directory.

Compiler Options: Inside tsconfig.json, set options like target, module, outDir, strict, esModuleInterop, etc.

Customize: Adjust options based on your project's needs, like setting module to "commonjs" for Node.js projects.

Include/Exclude Files: Use include and exclude properties to specify which files should be compiled.

Additional Configuration: Install type definitions if needed (@types/package) and include them in tsconfig.json.

Compile: Run tsc in the terminal to compile your TypeScript code.

Watch Mode: Optionally, use tsc -w to enable watch mode for automatic recompilation on file changes.

# debugging-typescript-applications

Compile Error-Free: Ensure your TypeScript code compiles without errors using tsc.

Generate Source Maps: Enable source maps (sourceMap: true) in tsconfig.json to debug TypeScript code directly in the browser or debugger.

Use Debugging Tools: Utilize browser DevTools, Node.js Inspector, or VS Code for debugging. Set breakpoints, inspect variables, and step through code execution.

Debugger Statements: Insert debugger; statements in your code to pause execution at specific points.

Logging: Use console.log() strategically to output variable values and track code flow.

Unit Testing: Write unit tests using frameworks like Jest or Mocha to catch bugs early and ensure expected behavior.

Static Analysis: Employ static analysis tools like ESLint or TSLint to catch common errors and enforce coding standards.

Remote Debugging: If needed, use remote debugging techniques provided by your IDE or debugging tools to debug code running on remote servers.

# fundamentals

JS have built in type like number, string, boolean, null, undefined, object whereas,
TypeScript have any, unknown, never, enum, tuple .

lets see how to interact with premetive type:-

# advanced-types

1. Type aliases
2. Unions and Intersections
3. Type narrowing
4. Nullable Types

# type-aliases


Type aliases in TypeScript provide a way to create custom names for types. They are particularly useful for defining complex types or types that are used repeatedly throughout your code.

# union-types

Union types in TypeScript allow you to declare a type that can be one of several possible types. This provides flexibility in handling different types of data within your code. 

# intersection-types

Intersection types in TypeScript allow you to combine multiple types into one. This creates a new type that has all the properties and methods of each constituent type.

# literal-type

Literal types in TypeScript allow you to specify exact values that a variable can have. Unlike traditional types that represent a range of possible values, literal types represent specific, concrete values.

# nullable-types

TypeScript does not have nullable types per se, it provides "strict null checks" to help catch errors related to null and undefined values during compile time. By using union types with null or undefined, developers can explicitly handle nullable values in their code.

# chaining

Chaining, in the context of programming, refers to a practice where multiple method calls or property accesses are chained together in a single expression. This allows you to perform a sequence of operations on an object or value in a concise and readable manner.