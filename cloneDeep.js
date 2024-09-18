function isObject(target) {
  return typeof target === 'object' && target !== null
}

function cloneDeep(src, map = new Map()) {
  if (!isObject(src)) return src

  // 处理特殊类型

  // 处理循环引用
  if (map.has(src)) return map.get(src)

  let newData = Array.isArray(src) ? [] : {}

  map.set(src, newData)

  for (const key in src) {
    if (Object.prototype.hasOwnProperty.call(src, key)) {
      newData[key] = cloneDeep(src[key], map)
    }
  }

  return newData
}

let obj1 = { a: 1, b: { b: 1 } }

let src = { a: 1, b: obj1, c: { c: 1 } }

obj1.a = src

let new_data = cloneDeep(src)

new_data.c.c = 2

console.log(src)
console.log(new_data)
