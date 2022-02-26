const startButton = document.querySelector(".start_btn");
const loading = document.querySelector(".start_loading");
const 

function caution() {
  const nopValue = document.querySelector("#nop_value");
  const wordLengthValue = document.querySelector("#wordLength_value");
  const nopValue_int = Number(nopValue);
  const wordLengthValue_int = Number(wordLengthValue);

  if (nopValue.value == "") {
    alert("인원 수가 입력되지 않았습니다.");
    nopValue.focus();
    return false;
  } else if (wordLengthValue.value == "") {
    alert("단어 수가 입력되지 않았습니다.");
    wordLengthValue.focus();
    return false;
  } else if (
    nopValue_int > 4 ||
    nopValue_int < 2 ||
    wordLengthValue_int > 6 ||
    wordLengthValue_int < 1
  ) {
    alert("인원 수는 2~4명, 단어 수는 6글자 이하만 가능합니다.");
    console.log("제한 테스트");
    return false;
  }

  // 아래부터 개발할 것

}

startButton.addEventListener("click", caution);
