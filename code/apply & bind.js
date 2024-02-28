// usage of call: 以给定的 this 值和逐个提供的参数调用该函数
// difference with apply: apply 的参数放在数组中一起传递进去

// implementation of call function
Function.prototype.myApply = function (context, argsArr) {
  // check if the caller is function
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myApply - caller must be a function");
  }

  // Check if the passed-in argsArr is an array; if not, throw an error
  if (argsArr && !Array.isArray(argsArr)) {
    throw new TypeError("Function.prototype.myApply - the second parameter must be an array");
  }

  // Check if the passed-in context object exists; if not, set it to window.
  context = context || window;

  // If the argsArr parameter doesn't exist, assign an empty array to it
  argsArr = argsArr || [];

  // Use Symbol as a unique key and attach the function as a property of the context object
  let fn = Symbol("fn");
  context[fn] = this;

  // Invoke the function with passed-in args and save the result.
  let result = context[fn](...argsArr);

  // delete the attached function on the context
  delete context[fn];

  return result;
};

Function.prototype.myBind = function (context, ...args) {
  // check if the caller is function
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myApply - caller must be a function");
  }

  // Check if the passed-in context object exists; if not, set it to window.
  context = context || window;

  // keep a reference to current function
  const _this = this;

  // return a new function
  return function fn(...innerArgs) {
    // check if fn is called by new operator
    if (this instanceof fn) {
      return new _this(...args, ...innerArgs);
    }

    // Invoke function within context object
    return _this.apply(context, args.concat(innerArgs));
  };
};

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.myApply(this, [name, price]);
  // Product.myApply(this, name, price);  // a TypeError will be threw out
  this.category = "food";
}

function test(a) {
  return a + this.b;
}

let obj = {
  b: 100,
};

let test2 = test.myBind(obj, 11);

console.log(new Food("cheese", 5).name);
console.log(test2());
// Expected output: "cheese"
