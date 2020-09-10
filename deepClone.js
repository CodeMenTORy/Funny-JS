// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

// 浅拷贝
// 1. ...实现
let copy1 = { ...{ x: 1 } };

// 2. Object.assign实现

let copy2 = Object.assign({}, { x: 1 });
