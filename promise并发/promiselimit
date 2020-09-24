class  Scheduler{
    constructor(max){
        this.max = max;
        this.count = 0;
        this.queue = [];
    }

    add(promiseCreator) {
        this.queue.push(promiseCreator);
        this.next();
    }

    next() {
        while(this.count < this.max && this.queue.length) {
            this.count++;
            let task = this.queue.shift();
            task().then(() => {
                this.count--;
                this.next();
            })
        }
    }
}



class  Scheduler2 {
    constructor(max){
        this.max = max;
        this.count = 0;
        this.queue = [];
    }

    add(promiseCreator) {
        return new Promise((res, rej) => {
            let task = this.next(promiseCreator, res, rej);
            if(this.count >= this.max) {
                this.queue.push(task);
            } else {
                task();
            }
        }) 
    }

    next(promise, res, rej) {
       return () => {
        promise()
        .then(v => res(v))
        .catch(e => rej(e))
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




const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time);
})

const scheduler = new Scheduler(2);
const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');


const scheduler2 = new Scheduler2(2);
const addTask2 = (time, order) => {
    scheduler2.add(() => timeout(time)).then(() => console.log(order))
}



addTask2(1000, '1');
addTask2(500, '2');
addTask2(300, '3');
addTask2(400, '4');

