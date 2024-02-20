/*
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-02-20 20:40:51
 * @FilePath: /js-basic-knowledge/Array/flatten.js
 * @Description:
 */
// flatten an array

const array = [1, [2, [3, [4, [5, 6]]]]]

const flatten = (arr) => {
  // 1. recurse
  let result = []
  // Loop through every element.
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (Array.isArray(element)) {
      result = result.concat(flatten(element))
    } else {
      result.push(element)
    }
  }
  return result
  // 2. reduce
  // return arr.reduce((pre, curr) => {
  //   return pre.concat(Array.isArray(curr) ? flatten(curr) : curr)
  // }, [])
  // 3. Array.some + ...
  // while (arr.some((item) => Array.isArray(item))) {
  //   arr = [].concat(...arr)
  // }
  // return arr
  // 4. split + toString
  // return arr.toString().split(',')
  // 5. ES6 flat
  // return arr.flat(Infinity)
}

console.log(flatten(array)) // [1, 2, 3, 4, 5, 6]
