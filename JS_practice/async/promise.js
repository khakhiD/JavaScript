"use strict";

const { resolve } = require("path");

// Promise is a JavaScript object for asynchronous operation.
// 1) State
// 2) Producer and Consumer

// state: pending -> fulfilled or rejected
// Producer vs Consumer

//--------------------------------------------------------------------------
// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  // 무거운 작업 (네트워크 통신 등)은 비동기적으로 처리하는 것이 좋음
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error('no network'));
  }, 2000); // 2초정도 있다 resolve라는 콜백함수를 호출하며 ellie를 전달
});

// 만약 네트워크 요청을 사용자가 요구했을 때에만 해야하는 경우라면?
// 위와 같이 작성하면 안될 것이다.
// 프로미스를 만드는 순간 executer(resolve)가 실행된다는 것을 이해할 것

//--------------------------------------------------------------------------
// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    // value라는 파라미터는 resolve를 통해 전달된 값이 들어온다.
    console.log(value);
    // then은 promise가 정상적으로 수행되어 최종적으로 resolve를 통해 전달된
    // 값이 value에 들어오는 것을 알 수 있다.
    // 만약 resolve가 아닌 reject를 사용한다면 reject의 에러가 전달된다.
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//-------------------------------------------------------------------------
// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num)); // 5가 출력될 것
// ! then은 값을 바로 전달할 수도 있지만, Promise를 전달해도 된다는 점을 유의
// ! 최종적으로 1초 + 1초로 2초 후에 5가 출력된다.

// -----------------------------------------------------------------------
// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  // .then(hen => getEgg(hen))
  .then(getEgg) // 윗줄을 조금 더 깔끔하게 생략할 수 있다. (받아온 인자를 사용)
  .catch((error) => {
    return "🍞"; // 계란을 받아오는 것에는 실패했으나 빵을 대신 전달하였다.
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
// catch를 사용하면서 error가 발생한 부분을 가장 밑으로 내려 출력해준다.


const fakeRequest = (url) => {
  return new Promise ((res, rej) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve('YOUR FAKE DATA HERE');
      }
      reject('REQUEST ERROR!');
    }, 1000)
  })
}

fakeRequest('/dogs/1')
  .then((data) => {
    console.log("DONE WITH REQUEST!");
    console.log('data is:', data)
  })
  .catch((err) => {
    console.log("oh no!", err);
  })