// 作为一个方法
Function.prototype.new = function () {
  let that = Object.create(this);

  let other = this.apply(that, arguments);

  return (typeof other === 'object' && other) || that;
};

// 作为一个独立的函数
function oNew() {
  // 创建一个空的对象
  let obj = new Object(); 
  // 获得构造函数
  let Con = Array.prototype.shift.call(arguments);
  // 链接到原型
  obj.__proto__ = Con.prototype;
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments);
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj;
}
