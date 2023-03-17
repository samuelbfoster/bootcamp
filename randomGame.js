function randomGame() {
  let counter = 0;
  let num;
  const timer = setInterval(function () {
    num = Math.random();
    counter++;
    if (num > 0.75) {
      console.log(counter);
      clearInterval(timer);
    }
  }, 1000);
}
