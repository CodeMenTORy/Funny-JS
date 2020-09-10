function my_instanceof(left, right) {
  // 获得类型的原型
  let prototype = right.prototype;
  // 获得对象的原型
  left = left.__proto__;
  // 判断对象的类型是否等于类型的原型
  while (true) {
    // 既可以判断传入的left是否为空对象
    // 也可以判断当left原型链走到顶端时未找到匹配则返回false
    if (left === null) return false;
    if (prototype === left) return true;
    left = left.__proto__;
  }
}