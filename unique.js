// ES5
function unique(arr) {
  return arr.filter((item, index, array) => array.indexOf(item) === index);
}

// ES6
function unique(arr) {
  return Array.from(new Set(arr));
}

