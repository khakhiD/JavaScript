"use strict";

// ----------------------------------------------------------------------
// Dreamcoding Javascript Array Quiz
// 2022. 02. 07 MON 재풀이
// author: Shin Dong-Ho
// 다시 풀어보기
// 배열 메소드들은 매우 많이 사용되므로, 자유자재로 사용하는 것을 목표로 공부할 것
// ---------------------------------------------------------------------

// Q1. make a string out of an array
// 주어진 배열을 스트링으로 변환하라
{
  const fruits = ["apple", "banana", "orange"];
  // 스트링으로 변환은 join
  const result = fruits.join(", ");
  console.log(result);
}

// Q2. make an array out of a string
// 문자열을 배열로 변환하라
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  // 배열로 반환은 split / splice / slice
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 해당 배열을 다음과 같이 거꾸로 만들어라.
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
// 주어진 배열에서 첫 번째와, 두 번째 배열을 제외하여 새로운 배열을 만들어라.
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);

  // slice(a?, b?): a부터 b-1까지 복사하여 새로운 배열 반환
  // splice(a, b?): a부터 b까지 잘라낸 배열을 반환, 기존 배열 변화됨
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
  // find 메소드 활용
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// students 중 수업에 등록한 학생들을 배열로 만들어라
{
  // filter 메소드 활용
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// 학생들의 점수만을 원소로 가진 배열을 만들어라.
{
  // map 메소드 활용
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// 50점보다 낮은 점수의 학생이 있는지 확인하라. boolean type
{
  const result = students.some((student) => student.score < 50);
  console.log(result); // true
}

// Q9. compute students' average score
// 학생 평균 점수를 계산하라.
{
  const result = students.reduce((pre, cur) => pre + cur.score, 0);
  console.log(result / students.length); // 73.8
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// 학생들의 모든 점수를 스트링으로 변환하라
{
  const result = students.map((student) => student.score).join(", ");
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// 10번 문제의 문자열을 오름차순 정렬하여 출력하라
{
  const result = students
    .map((student) => student.score)
    .sort()
    .join(", ");
  console.log(result);
}
