function mySetInterval(fn, delay){
  function interval(){
    setTimeout(interval, delay);
    fn();
  }
  setTimeout(interval, delay)
}