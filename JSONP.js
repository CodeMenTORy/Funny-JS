/**
 * @description: 封装JSONP跨域请求
 * @param {String} url 传入访问的url
 * @param {String} jsonpCallback 回调函数
 * @param {Function} success 成功的回调函数
 */
function jsonp(url, jsonpCallback, success) {
  let script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.type = 'text/javascript';
  window[jsonpCallback] = function (data) {
    success && success(data);
  };
  document.body.appendChild(script);
}

jsonp('http://xxx', 'callback', function (value) {
  console.log(value);
});

