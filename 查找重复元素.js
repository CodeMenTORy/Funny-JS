function duplicates(arr) {
  var result = [];
  arr.forEach((elem) => {
    if (
      arr.indexOf(elem) !== arr.lastIndexOf(elem) &&
      result.indexOf(elem) === -1
    ) {
      result.push(elem);
    }
  });
  return result;
}
