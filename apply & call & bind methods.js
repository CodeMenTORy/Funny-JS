//call 方法的原生实现
Function.prototype.myCall = function (obj) {
  var obj = obj || window,
    result;
  // 将调用call方法的函数绑定到传入对象的一个属性上
  obj.fn = this;
  var arr = [...arguments];
  arr.shift();
  // 在传入对象上调用方法并且传入其余参数
  result = obj.fn(...arr);
  // 最后删除对象上的方法
  delete obj.fn;
  return result;
};

// apply 方法的原生实现
Function.prototype.myApply = function (obj, arr) {
  var obj = obj || window,
    result;
  obj.fn = this;
  // 思路与call方法一致
  // 注意判断传入数组的情况
  if (!arr) {
    result = obj.fn();
  } else {
    result = obj.fn(...arr);
  }
  delete obj.p;
  return result;
};

//bind 方法的polyfill实现
Function.prototype.myBind = function (obj) {
  // 检查被绑定的是否为函数（假设此例为foo）
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }
  // 将foo传给that保存
  var that = this,
    // 取出传入的参数
    oldArr = Array.prototype.slice.call(arguments, 1),
    fnVoid = function () {}, // 定义一个空函数用于之后的原型链绑定
    fnNew = function () {
      return that.apply(this instanceof fnVoid ? this : obj, [
        // 判断this的指向，如果是使用new调用，则this绑定到新对象，此时新对象的原型为构造函数，即this instanceof fnVoid
        // 此时需要将新对象this传入that（foo）函数，将构造函数的属性绑定到新对象上
        // 如果不是使用new调用，则传入obj，将foo函数绑定到传入的obj上
        ...oldArr,
        ...arguments,
      ]);
    };
  if (this.prototype) {
    fnVoid.prototype = this.prototype;
  }
  fnNew.prototype = new fnVoid();
  return fnNew;
};

