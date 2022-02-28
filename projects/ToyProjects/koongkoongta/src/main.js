const startButton = document.querySelector(".start_btn");
const startWindow = document.querySelector(".inputs");
const startWrap = document.querySelector(".start");

const loading = document.querySelector(".start_loading");
const playWindow = document.querySelector(".playWindow");
const headTitle = document.querySelector(".title");
const titleName = document.querySelector(".header_wrapper");
const inputWindow = document.querySelector(".playContent");
const submit = document.querySelector(".submitBtn");
const inputText = document.querySelector("#submit_value");

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
    alert(
      "인원 수 최대 4명, 단어 수는 최대 6글자, \n시간 제한은 5초에서 30초까지 설정 가능합니다."
    );
    console.log("제한 테스트");
    return false;
  }

  setTimeout(function () {
    startWindow.style.display = "none";
    headTitle.style.display = "none";
    startWrap.style.display = "none";
    titleName.style.margin = "20px 0px 20px 0px";
    playWindow.style.display = "flex";
    inputWindow.style.display = "flex";
  }, 500);

  ruleSet(nopValue_int, wordLengthValue_int, timeLimit_int);
  inputText.focus();
  // koongkoongta(nopValue_int, wordLengthValue_int);
}

// Main logic for game
const koongkoongta = (nop, length) => {
  // var
  let word;
  let newWord;
  let firstTurn = 1;
  let turn = firstTurn;

  const onClickInputBtn = () => {
    console.log(word);
  };

  const onInput = (event) => {
    newWord = event.target.value;
  };
};

// inputText.addEventListener('input', onInput);

// 설정된 규칙 화면에 띄우는 펑션 ruleSet()
function ruleSet(nop, wordLength, timeLimit) {
  const ruleNOP = document.querySelector(".ruleNOP");
  const ruleWL = document.querySelector(".ruleWL");
  const ruleTL = document.querySelector(".ruleTL");
  ruleNOP.innerText = Number(nop);
  ruleWL.innerText = Number(wordLength);
  ruleTL.innerText = Number(timeLimit);

  return true;
}

startButton.addEventListener("click", caution);
