<!--
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-01-07 19:02:15
 * @FilePath: /js-basic-knowledge/2024-01/JavaScript data types.md
 * @Description:
-->

# What data types does JavaScript have?

There are totally eight data types: Null, undefined, Boolean, String, Number, Object, Symbol, BigInt, where Symbol and BigInt are new in ES6:

- Symbol represents data type that is unique and immutable after created, which aims to resolve possible global variable conflicts.

- BigInt is a numeric type of data that can represent integers in any precision format. BigInt can be used to safely store and manipulate large integers, even if this number is out of the safe integer range that the Number can represent.

The above eight data types can be divided into raw data types and reference data types:
**stack**: raw data type(Null, undefined, Boolean, String, Number)
**heap**: reference data type(Object, arrays, functions)

# The difference between the two data types is the storage location

## the original data type

The original data type is directly stored in simple data segments in the stack, which occupies a small space and has a fixed size, and belongs to the frequently used data, so it is stored in the stack.

## the reference data type

The reference data type object is stored in the heap, which occupies a large space and has an unfixed size. If stored in the stack, it will affect the performance of the program. The reference data type stores a pointer in the stack, which points to the starting address of the entity in the heap. When the interpreter looks for a reference value, it first retrieves its address in the stack and then retrieves the entity from the heap.

# The concepts of heap and stack exist in data structures and operating system memory

## In data structure

- The access mode of the data in the stack is first in, last out.
- While the heap is a priority queue that is sorted by priority, which can be specified by size.

## In operating system memory

- The stack memory is automatically allocated and released by the compiler to store the parameter values of functions and the values of local variables. It operates like a stack in the data structure.
- Heap area memory is usually freed by the developer allocation, and if the developer does not free it, it may be reclaimed by the garbage collection mechanism at the end of the program.
