function wrap(p) {
  let obj = {};
  let p1 = new Promise((res, rej) => {
    obj.res = res;
    obj.rej = rej;
  });
  obj.promise = Promise.race([p, p1]);
  return obj;
}

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
});

let obj = wrap(promise);
obj.promise.then((res) => {
  console.log(res);
});

if (Math.random() > 0.5) obj.res("quxiao");
