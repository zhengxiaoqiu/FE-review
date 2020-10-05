function light(color, delay) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      console.log(color);
      res();
    }, delay);
  });
}

function step() {
  Promise.resolve()
    .then(() => {
      return light("red", 3000);
    })
    .then(() => {
      return light("green", 2000);
    })
    .then(() => {
      return light("yellow", 1000);
    })
    .then(() => {
      step();
    });
}
step();
