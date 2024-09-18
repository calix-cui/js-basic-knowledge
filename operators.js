// instanceof
function MyInstanceOf(obj, constructor) {
  let proto = Object.getPrototypeOf(obj)
  while (proto) {
    if (proto === constructor.prototype) {
      return true
    }

    proto = Object.getPrototypeOf(proto) // 沿着原型链向上，直到 null
  }

  return false
}

// function A () {}

// let a = new A()

// console.log(a instanceof A)

// console.log(MyInstanceOf(a, A))

// new
function isNonPrimitive(value) {
  return (
    (typeof value === 'object' && value !== null) || typeof value === 'function'
  )
}
function MyNew(constructor = function () {}, ...args) {
  // 创建一个空对象
  const obj = {}
  // 将该对象的原型指向构造函数的原型对象(prototype)
  Object.setPrototypeOf(obj, constructor.prototype)
  // 改变构造函数 this 指向，并执行构造函数
  const res = constructor.apply(obj, args)

  return isNonPrimitive(res) ? res : obj
}

function B() {
  this.a = 'a'
  this.b = 'b'
  return '123'
}

const b = new B()
const _b = MyNew(B)

console.log(b, _b)
