// Main!

class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter ++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            // 이곳에 꼭..! 아래 부분을 넣어주어야, 함수에 인자를 넣지 않아도 된다.
            // TS로 넘어가면 이 부분이 필요가 없다 ㅎ 퀘스쳔마크로 가능
            this.callback && this.callback(this.counter);
        }
    }
}

const coolCounter = new Counter();

function printSomething(num) {
    console.log(`Wow! ${num}`);
}
function alertNum(num) {
    alert(`Wow! ${num}`);
}

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

// 클래스를 원하는 기능을 끼워넣어 재조립이 가능해진다!
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();