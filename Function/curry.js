/*
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-02-20 21:25:26
 * @FilePath: /js-basic-knowledge/Function/curry.js
 * @Description: Function currying
 */
function curry(fn, firstArg) {
  // get the length of function parameters
  let length = fn.length

  // handle args
  firstArg = firstArg || []

  return function (...args) {
    // collect all existing parameters
    let newArgs = firstArg.concat(args)

    // judge length of parameters
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}

// another way of currying
function curry2(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry2.bind(null, fn, ...args)
}

function add(a, b, c) {
  return a + b + c
}

const newAdd = curry(add)
console.log(newAdd(1)(2)(3))
console.log(newAdd(1, 2, 3))

const newAdd2 = curry2(add)
console.log(newAdd2(1)(2)(3))
console.log(newAdd2(1, 2, 3))
