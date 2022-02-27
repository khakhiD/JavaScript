const startButton = document.querySelector(".start_btn");
const loading = document.querySelector(".start_loading");
const playWindow = document.querySelector(".playWindow");
const inputWindow = document.querySelector(".inputs");
const startWindow = document.querySelector(".start");
const headTitle = document.querySelector(".title");
const titleName = document.querySelector(".header_wrapper");

function caution() {
  const nopValue = document.querySelector("#nop_value");
  const wordLengthValue = document.querySelector("#wordLength_value");
  const timeLimitValue = document.querySelector("#timeLimit_value");
  const nopValue_int = Number(nopValue.value);
  const wordLengthValue_int = Number(wordLengthValue.value);
  const timeLimit_int = Number(timeLimitValue.value);

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
    wordLengthValue_int < 1 ||
    timeLimit_int < 4 ||
    timeLimit_int > 30
  ) {
    alert("인원 수 최대 4명, 단어 수는 최대 6글자, \n시간 제한은 5초에서 30초까지 설정 가능합니다.");
    console.log("제한 테스트");
    return false;
  }

  // 아래부터 개발할 것
  setTimeout(function () {
    inputWindow.style.display = "none";
    startWindow.style.display = "none";
    headTitle.style.display = "none";
    titleName.style.margin = "20px 0px 20px 0px";
    playWindow.style.display = "flex";
  }, 500);

  koongkoongta(nopValue_int, wordLengthValue_int);
}

startButton.addEventListener("click", caution);




// Main logic for game
function koongkoongta(nop, length) {
  const inputWord = document.querySelector(".inputWord");
  const submit = document.querySelector(".submitBtn");
  const input = document.querySelector("input");

  // 기존 제시어
  let word;
  let newWord;

  function onClickEvent() {
    if(nop) {
      if(!word || word[word.length - 1] === newWord[0]) {
        if(newWord.length === 3) {
          word = newWord;
          word.textContent = word;
          const order = Number(order.textContent);
          if(order+1 > nop) {
            order.textContent = 1;
          } else {
            order.textContent = order+1;
          }
        } else {
          alert('${length}글자 단어를 입력하세요.');
        }
      } else {
        alert('틀렸습니다.');
      }
      input.value = '';
      input.focus();
    } else {
      alert('참가 인원이 정해지지 않았습니다.');
    }
  };
}

function onInput() {
  newWord = event.target.value;
}
