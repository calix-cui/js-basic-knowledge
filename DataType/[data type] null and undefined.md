<!--
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-01-07 19:32:59
 * @FilePath: /js-basic-knowledge/2024-01/[data type] null and undefined.md
 * @Description: 
-->
# The difference between null and undefined

Undefined means undefined, while Null means empty object. Generally speaking, when a variable is declared but not yet defined, it will return undefined. Null is mainly used to assign values to variables that may return values as initialization.

Undefined is not a reserved word in JavaScript, which means that it can be used as a variable name, but this approach is very dangerous as it can affect the judgment of the undefined value. We can obtain secure undefined value through some methods, such as void 0.

When using typeof to judge these two types, Null typing will return 'object', which is a historical problem. It will return true when using '\==' to compare 'null' and 'undefined', and return false when using '\==='.

![Alt text](images/img1.png)
