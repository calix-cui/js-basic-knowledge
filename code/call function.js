// usage of call: 以给定的 this 值和逐个提供的参数调用该函数
// difference with apply: apply 的参数放在数组中一起传递进去

// implementation of call function
Function.prototype.myCall = function (context, ...args) {
  // check if the caller is function
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myCall - caller must be a function");
  }

  // Check if the passed-in context object exists; if not, set it to window.
  context = context || window;

  // Use Symbol as a unique key and attach the function as a property of the context object
  let fn = Symbol("fn");
  context[fn] = this;

  // Invoke the function with passed-in args and save the result.
  let result = context[fn](...args);

  // delete the attached function on the context
  delete context[fn];

  return result;
};

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.myCall(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// Expected output: "cheese"
