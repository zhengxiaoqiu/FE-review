class FetchLimit {
    constructor(max) {
        this.max = max;
        this.queue = [];
        this.count = 0;
    }

    request(promise, ...args) {
        return new Promise((res, rej) => {
            let task = this.createTask(promise.bind(null, args), res, rej);
            if(this.count >= this.max) {
                this.queue.push(task);
            } else {
                task();
            }
        })
    }

    createTask(promise, res, rej) {
        return () => {
            promise()
            .then((v)=>res(v))
            .catch((e) => rej(e))
            .finally(() => {
                this.count--;
                if(this.queue.length) {
                    let task = this.queue.shift();
                    task();
                }
            })
            this.count++;

        }
    }
}

function delay(time) {
    return new Promise(res => {
        setTimeout(() => res(Date.now()), time);
    })
}

const requestInstance = new FetchLimit(5);

let promises = [];
function test() {
    for(let i=0; i<15; i++) {
        let time = Math.random()*2000;
        console.log('time', i, time);
        promises.push(requestInstance.request(delay, time).then(result => console.log('result',i, result), error => console.log(error)))
    }
}

test();


