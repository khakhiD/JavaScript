"user strict";

// async & await is syntatic sugar
// clear style of using promise :)
// 꼭 사용해야 하는 것이 아니라, 적재적소에 맞게 사용해야 한다.
// 인간은 위에서 아래로 차근차근 사고하는 것이 편하다.
// async & await을 통해 비동기 처리 패턴을 조금 더 읽기 쉽게 한다.

/*
    aysnc function 함수명() {
        await 비동기_처리_메소드_명();
    }
*/

// 1. async: 자동으로 함수를 promise로 바꿔준다
async function fetchUser() {
  // do network request in 10 secs ...
  return "ellie"; // 자동으로 함수가 promise로 변환됨
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ❗
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

// async function getBanana() {
//     return delay(3000)
//     .then(() => '🍌');
// }

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }
// ❗ Promise도 많이 중첩되면 콜백지옥과 같이 된다.

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise; // 1초
  const banana = await bananaPromise; // 1초 => 총 2초. 비효율적
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
// Promise.all
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// Promise.race
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log); // 바나나가 먼저 전달되어서 출력됨
