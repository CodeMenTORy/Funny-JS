// 方式一：
function Singleton() {
  // 你的业务逻辑
}
Singleton.getInstance = function (...args) {
  if (!Singleton.instance) {
    Singleton.instance = new Singleton();
  }
  return Singleton.instance;
};
Singleton.instance = null;

// test
const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b); // true

// 方式二：
const Singleton = (function () {
  let instance = null;

  return function () {
    if (instance) {
      return instance;
    }
    // 你的业务逻辑

    return (instance = this);
  };
})();

// test
const a = new Singleton();
const b = new Singleton();

console.log(a === b); // true

// 方式3
class only {
  constructor(...args) {
    if (only.prototype.Instance === undefined) {
      // 业务逻辑
      only.prototype.Instance = this;
    }
    return only.prototype.Instance;
  }
}
// test
const a = new Singleton();
const b = new Singleton();

console.log(a === b); // true
