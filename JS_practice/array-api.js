"use strict";

// Dreamcoding Javascript Array Quiz
// 2022. 02. 07 MON
// author: Shin Dong-Ho

// Q1. make a string out of an array
// 주어진 배열을 스트링으로 변환하라
{
  const fruits = ["apple", "banana", "orange"];
  // join() : .join('구분자'); : 배열 원소 전부를 합쳐 하나의 문자열 반환.
  const q1 = fruits.join(" "); // apple banana orange
  console.log(q1);
  // toString() : 배열을 문자열로 바꾸어 반환
  const toString = fruits.toString(); // apple,banana,orange
  console.log(toString);
}

// Q2. make an array out of a string
// 문자열을 배열로 변환하라
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  // split('구분자', 개수) : 구분자를 통해 구분된 개수만큼 배열로 만들어 반환.
  const q2 = fruits.split(",", 3);
  console.log(q2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 해당 배열을 다음과 같이 거꾸로 만들어라.
{
  const array = [1, 2, 3, 4, 5];
  // array.reverse() : 배열안에 들어있는
  const q3 = array.reverse();
  console.log(q3);
  console.log(array); // 배열 값 자체도 변환되어 있다.
}

// Q4. make new array without the first two elements
// 주어진 배열에서 첫 번째와, 두 번째 배열을 제외하여 새로운 배열을 만들어라.
{
  const array = [1, 2, 3, 4, 5];
  // shift 사용하기
  array.shift();
  array.shift();
  console.log(array);
  //    shift: 앞부분 하나 삭제    pop: 뒷부분 하나 삭제
  // unshift: 앞부분 하나 삽입    push: 뒷부분 하나 삽입

  // splice 사용하기
  // splice(몇번부터, 몇번까지): 삭제해서 반환한다. 기존 배열에 영향.
  const array2 = [1, 2, 3, 4, 5];
  const q4 = array2.splice(2, 4);
  console.log(array2); // [1, 2]
  console.log(`Q4 = ${q4}`); // [3, 4, 5]
  // ❗ 기존 배열에서 빼오는 함수이므로 답이 아님!!

  // slice 사용하기: 배열의 특정한 부분을 반환하는 함수.
  // slice(시작, 끝): 끝은 배제된다 ❗ 하나 더 해줘야 함.
  const array3 = [1, 2, 3, 4, 5];
  const q4_2 = array3.slice(2, 5); // 끝은 배제되니까 5로!
  console.log(q4_2); // [3,4,5]가 나오고, 기존 배열은 그대로 있다.
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
// 90점인 학생을 찾아라
{
  // find((callback 함수)):
  // find(predicate: (this, value, index, obj) -> value);
  // 콜백 함수가 true될 때, 처음 찾은 것을 반환한다.
  const newStudent = students.find(function (student, index) {
    return student.score === 90;
  });
  const result = students.find((student) => student.score === 90);
  console.log(newStudent);
  console.log(result);
}

// Q6. make an array of enrolled students
// students 중 수업에 등록한 학생들을 배열로 만들어라
{
  // filter( callback => ) : true인 것들을 반환
  const result = students.filter((student) => student.enrolled);
  const result2 = students.filter(function (student, index) {
    return student.enrolled;
  });
  console.log(result);
  console.log(result2);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// 학생들의 점수만을 원소로 가진 배열을 만들어라.
{
  // map(callback function(value, index, array) => any)
  // 배열의 모든 요소들을 돌면서 전달한 콜백함수의 인자로 넣고 호출한다.
  // 콜백함수의 반환된 값들을 모두 요소로 담아서 새로운 배열을 리턴한다.
  // ❗ 자주 사용되는 메소드
  // 각각의 요소를 함수를 거쳐 새로운 값으로 매핑해주는.. 미친 메소드인듯?

  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// 50점보다 낮은 점수의 학생이 있는지 확인하라. boolean type
{
  // some / every : 배열의 모든 요소에 콜백 돌려서 호출
  // some은 결과에 true가 있으면 true를 반환
  // every는 결과가 모두 true일때만 true를 반환
  const result = students.some(function (student, index) {
    return student.score < 50;
  });
  console.log(result); //true, A 학생은 45점
}

// Q9. compute students' average score
// 학생 평균 점수를 계산하라.
// ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗ ❗
{
  // 배열 메소드 중 매우 강력한 기능을 가진 메서드들
  // 1. map,  2. reduce,  3. forEach

  // reduce는 예시로 덧셈을 많이 들지만, 활용이 무궁무진할 수 있다.
  // reduce((누적값,현잿값,인덱스,요소) => {return 결과} , 초깃값)
  // reduceright()

  /*
    reduce의 params
    1. callback function
    - accumulator : 콜백 함수의 반환값을 누적한 값 (누적값)
    - currentValue : 배열의 현재 요소
    - index(Optional) : 배열의 현재 요소의 인덱스
    - array(Optional) : 호출한 배열
    ❗ callback 함수의 반환 값은 누적값에 할당되고 순회중 계속 누적되어 하나의 값을 반환

    2. initialValue(Optional)
    - 누적값 인수에 제공되는 초기값, 제공하지 않을 경우 배열의 첫 요소 사용
    - 만약 빈 배열에서 초기값이 없을 경우 에러가 발생한다. 
  */
  const result = students.reduce(
    function (acc, cur, i) {
      return acc + cur.score;
    },
    0 // 초기값
  );
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// 학생들의 모든 점수를 스트링으로 변환하라
{
  // 학생들의 배열을 먼저 점수로 변환
  const result = students.map((student) => student.score).join();
  console.log(result); // 점수 배열로 변환 -> join으로 스트링 변환
  // 위와 같은 방식으로 다시
  const stringScore = students //
    .map(function (student, index, students) {
      return student.score;
    })
    .join(",");
  console.log(stringScore);

  // 여기서 만약, 점수가 50점 이상인 아이들만 표시하고 싶다면?
  // filter(콜백)으로 걸러서 사용해보자.
  const over50score = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(over50score);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const q10 = students.map((student) => student.score).sort();
  console.log(q10);

  // ✅ sort details
  // sort((a,b) => a - b)
  // callback의 인자로 이전값 a, 현재값 b를 받아오는데,
  // 만약 (a-b) 값이 마이너스라면 첫번째 값이 뒤의 값보다 작다고 간주되어 정렬해주는 방식

  const q10_2 = students.map((student) => student.score).sort((a, b) => a - b);
  console.log(q10_2);

  // 리턴값을 (b - a)로 하면, 내림차순으로 정리된다.
}
