# Heap and stack in JavaScript

## Heap

1. The heap is the memory space used to **store values of reference types** (objects, arrays, functions, etc.).
2. The size of heap memory is **not fixed** and can be **dynamically allocated and released**.
3. Heap memory data is **stored in different locations** and **refers to the data in heap memory by reference**.
4. **Heap memory release**: The spatial address variable of the reference type is assigned to null, or no reference points to the data in memory, the heap memory will be released.

## Stack

1. A stack is the memory space used to **store values of primitive types** (such as numbers, strings, booleans, etc.) and **the execution context** (the environment in which the code is executed).
2. The stack memory size is **limited** and has a **fixed space**.
3. Stack memory stores data in **first-in-last-out** (FILO) fashion, tracking function calls, variable declarations, and so on **through the execution context**.
4. **When a function is called, an execution context (including the function's arguments, local variables, etc.) is created and pushed to the top of the stack; When the function completes execution, the execution context is removed from the top of the stack.**
5. **Stack memory release**: Generally, the private scope of the function will be released after the function is executed, and there are special cases:
   1. The function is executed, but the contents of the function's private scope are still in use by the variables outside the stack, and the stack memory cannot release the base value inside. (Closure)
   2. The global stack memory is only released when the page is closed.

## In general

Heaps and stacks play different roles in JavaScript, storing reference type values and primitive type values respectively, as well as information about the execution context.
