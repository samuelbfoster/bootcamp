function countDown(num) {
  num = num - 1;
  let count = 1;
  setTimeout(function () {
    console.log("DONE!");
  }, (num + 1) * 1000);
  console.log("hi");
  while (num > 0) {
    const rN = num;
    setTimeout(function () {
      console.log(rN);
    }, 1000 * count);
    count += 1;
    num -= 1;
  }
}

countDown(8);
