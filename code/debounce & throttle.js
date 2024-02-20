/*
 * @Author: cuixiang cuixiang405@gmail.com
 * @Date: 2024-02-20 22:01:53
 * @FilePath: /js-basic-knowledge/code/debounce & throttle.js
 * @Description:
 */
// 1. debounce: The last trigger takes effect within a specified time
function debounce(fn, delay) {
  let timer = null
  return function () {
    const ctx = this,
      args = arguments

    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      fn.apply(ctx, args)
    }, delay)
  }
}

const logFn = (num) => {
  console.log(num)
  console.log(Date.now())
}

// const log1 = debounce(logFn, 500)

// let n = 0
// let t = setInterval(() => {
//   console.log(n)
//   log1(n)
//   n++
// }, 50)

// setTimeout(() => {
//   clearInterval(t)
// }, 3000)

// 2. throttle
function throttle(fn, delay) {
  let lastTime = 0
  return function () {
    const ctx = this,
      args = arguments,
      currentTime = new Date().getTime()

    if (currentTime - lastTime > delay) {
      fn.apply(ctx, args)
      lastTime = currentTime
    }
  }
}

const log2 = throttle(logFn, 500)

let n = 0
let t = setInterval(() => {
  // console.log(n)
  log2(n)
  n++
}, 50)

setTimeout(() => {
  clearInterval(t)
}, 3000)
