// Don't give up
// 포기하지 마세요 🙏

// 함수에는 두 가지 타입이 있다.
// 1. 기능을 수행하는 타입의 함수
// 2. 값을 리턴하는 타입의 함수

// 함수 선언
// 함수 호출

// 함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
  
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출

// doSomething(add());     // 함수를 호출해버린 경우! NaN(Not a Number)
// doSomething(add);       // 함수를 인자로 전달한 경우!
// doSomething(add(1, 2)); // 함수를 전달할 때는, 함수의 이름만 적어야 한다!

// JS는 UI적 요소가 없기 때문에,
// Console log를 이용하며 눈으로 확인하면서 배워야 합니다.
// 간단한 예제로 항상 Console log로 한 줄 한 줄 따라가야 합니다.

const addFun = add;
console.log(addFun); // addFun은 add 함수 자체만 가리키게 된다.
addFun(1, 2);

// 인자 값을 적는 것과 적지 않는 것을 꼭 구분해야 한다 ✔
// 인자 값을 적지 않는 것은 함수 자체를 전달하는 것이다! ✔