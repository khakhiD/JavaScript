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
    timeLimit_int > 60
  ) {
    alert(
      "인원 수 최대 4명, 단어 수는 최대 6글자, \n시간 제한은 5초에서 60초까지 설정 가능합니다."
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
  timeBar(timeLimit_int);
  // koongkoongta(nopValue_int, wordLengthValue_int);
}

let totalCount = 0;
let count = 0;
let time = 0;
const t_seconds = document.querySelector(".timeBar_seconds");
const t_bar = document.querySelector(".timeBar");
const t_progress = document.querySelector(".timeBar_progress");

// 시간제한 막대그래프
function timeBar(seconds) {
  clearInterval(time);
  count = seconds * 100; // 일단 5로 설정
  totalCount = count;
  time = setInterval("timer_frame()", 10); // 0.1초 단위로 실행
}

function timer_frame() {
  count = count - 1; // 0.1초씩 뺀다
  t_seconds.innerText = (count / 100).toFixed(1);
  percentage = (count / totalCount) * 100;
  t_progress.style.width = percentage + "%";
  //
  // ✅ 추가 입력에 오류가 없었다면 인터벌 클리어하는 기능 추가할 것
  //
  if (count == 0) {
    clearInterval(time); //시간 초기화
    alert("시간 완료");
  }
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
