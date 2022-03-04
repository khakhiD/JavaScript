const startButton = document.querySelector(".start_btn");
const startWindow = document.querySelector(".inputs");
const startWrap = document.querySelector(".start");

const loading = document.querySelector(".start_loading");
const playWindow = document.querySelector(".playWindow");
const headTitle = document.querySelector(".title");
const titleName = document.querySelector(".header_wrapper");
const inputWindow = document.querySelector(".playContent");
const submit = document.querySelector(".submitBtn");
const submit_value = document.querySelector("#submit_value");

const firstOrder = document.querySelector("#firstOrder");
const firstOrder_value = document.querySelector("#firstOrder_input");
const firstOrder_submitBtn = document.querySelector(".firstOrder_submitBtn");
const firstOrder_quitBtn = document.querySelector(".firstOrder_quitBtn");

const modalWindow = document.querySelector("#modal");
const modalButton = document.querySelector(".modal_okayBtn");

// 게임 시작 함수
function gameStart() {
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
    wordLengthValue_int > 6 ||
    wordLengthValue_int < 1 ||
    timeLimit_int < 4 ||
    timeLimit_int > 60
  ) {
    alert(
      "단어 수는 최대 6글자, \n시간 제한은 5초에서 60초까지 설정 가능합니다."
    );
    console.log("제한 테스트");
    return false;
  } else if (nopValue_int != 2) {
    alert("현재는 2인 모드만 지원합니다.\n죄송합니다 :(");
    return false;
  }

  setTimeout(() => {
    startWindow.style.display = "none";
    headTitle.style.display = "none";
    startWrap.style.display = "none";
    titleName.style.margin = "20px 0px 20px 0px";
    playWindow.style.display = "flex";
    inputWindow.style.display = "flex";
    ruleSet(nopValue_int, wordLengthValue_int, timeLimit_int);
    openFirstOrder(wordLengthValue_int);
    firstOrder_value.focus();
  }, 500);

  timeBar(timeLimit_int);
}

let totalCount = 0;
let count = 0;
let time = 0;

// 시간제한 막대그래프 1
function timeBar(seconds) {
  clearInterval(time);
  count = seconds * 100;
  totalCount = count;
  time = setInterval("timer_frame()", 10); // 0.01초 단위로 실행
}
// 시간제한 막대그래프 구현 2
function timer_frame() {
  const t_seconds = document.querySelector(".timeBar_seconds");
  const t_progress = document.querySelector(".timeBar_progress");
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

// 첫 제시어 입력 모달 오픈
function openFirstOrder(wordLength) {
  firstOrder_setPlaceholder(wordLength);
  firstOrder.style.display = "flex";
}

// 첫 제시어 입력 모달 끄기
function closeFirstOrder() {
  firstOrder.style.display = "none";
}

// 첫 제시어 입력 모달 placeholder 단어 수 받아오기
function firstOrder_setPlaceholder(wordLength) {
  let wl = wordLength;
  firstOrder_value.placeholder = wl + "글자 단어 입력";
  firstOrder_value.focus();
}

function wordSubmit() {
  const inputText = document.querySelector("#submit_value").value;
}

function firstWordSubmit() {
  const wordLength = document.querySelector("#wordLength_value").value;
  const firstWord = document.querySelector("#firstOrder_input").value;
  console.log(firstWord);
  const player1Balloon_text = document.querySelector(".player1_balloon_text");
  if (firstWord.length == wordLength) {
    closeFirstOrder();
    player1Balloon_text.innerText = firstWord;
  } else {
    modalOpen();
    closeFirstOrder();
    setTimeout(openFirstOrder(), 200);
  }
}

function modalOpen(){
  modalWindow.style.display = "flex";
  modalButton.focus();
}
function modalClose() {
  modalWindow.style.display = "none";
  console.log(firstOrder.style.display);
  if(firstOrder.style.display == "flex") { 
    firstOrder_value.innerText = "";
    firstOrder_value.focus();
  }
}

// EventListeners
startButton.addEventListener("click", gameStart);
// submit.addEventListener("click", wordSubmit);
// submit_value.addEventListener("keyup", (e) => {
//   if (e.keyCode === 13) wordSubmit();
// }); // Enter Key Auto Submit

firstOrder_submitBtn.addEventListener("click", firstWordSubmit);
firstOrder_value.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) firstWordSubmit();
}); // Enter Key Auto Submit
firstOrder_quitBtn.addEventListener("click", closeFirstOrder);
modalButton.addEventListener("click", modalClose);
modalButton.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) modalClose();
});