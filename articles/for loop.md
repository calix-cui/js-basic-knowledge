<!--
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-01-23 21:59:39
 * @FilePath: /js-basic-knowledge/2024-01/for loop.md
 * @Description: 
-->
# for...in

```js
let object = {
  a: 1,
  b: 2,
}
for (const key in object) {
  console.log(key) // a b
}

let arr = [1, 2, 3]
for (const key in arr) {
  // not recommended
  console.log(key) // 0,1,2
}
```

The for...in loop iterates over the enumerable properties of an object, including its own properties and inherited properties. Besides, it should not be used to iterate over an array, although this will not throw an error.

# for...of

```js
let arr = [1, 2, 3]
for (const iterator of arr) {
  console.log(iterator) // 1 2 3
}
```

The for...of loop is uesd to iterate over the elements of an iterable object, such as Array, String, Set, Map, etc, treating each element of the object as an iteration variable. Besides, it will throw an error if you use for...of on an object, because a common object is not iterable.
