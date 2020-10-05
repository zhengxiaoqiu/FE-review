let a = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("11111111111");
      resolve("第一个异步进程");
    }, 3000);
  });
};
let b = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2222222222");
      resolve("第二个异步进程");
    }, 2000);
  });
};
let c = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3333333333333");
      resolve("第三个异步进程");
    }, 1000);
  });
};

let promiseArr = [a, b, c];
function step() {
  Promise.resolve()
    .then(() => a())
    .then(() => b())
    .then(() => c());
}
// step();

function step2() {
  let res = Promise.resolve();
  for (let i = 0; i < promiseArr.length; i++) {
    res = res.then(() => promiseArr[i]());
  }
}
// step2();

promiseArr.reduce((pre, ele) => {
  return pre.then(() => ele());
}, Promise.resolve());
