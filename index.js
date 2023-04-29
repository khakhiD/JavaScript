function solution(s) {
  const arr = s.split(" ");
  const lowerArr = arr.map((str) => str.toLowerCase());
  for (let i = 0; i < lowerArr.length; i++) {
    lowerArr[i].charAt(0).toUpperCase();
  }
  var answer = "";
  return answer;
}

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
