let num = 1234567894516.3;
console.log(num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'));
