// 버튼 이름들
// start 버튼
// modal 버튼
// share 버튼

const startButton = document.querySelector('.start_btn');
const result = document.querySelector('.result');
const modal = document.querySelector('#modal');
const openButton = document.querySelector('.modal_btn');
const closeButton = document.querySelector('.close_btn');
const shareButton = document.querySelector('.share_btn');
const loading = document.querySelector('.result_loading');

function calculator(){
    const fieldValue = document.querySelector('#field_value');
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if((fieldValue.value) == "") {
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert('입력되지 않았습니다.');
        timeValue.focus()
        return false;
    } else if(timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }
    
    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function(){
        loading.style.display = 'none';
        result.style.display = 'flex';
        // 필드 result 안의 텍스트 값을 넣겠다.
        fieldResult.innerText = fieldValue.value;
        // 10진수로 나눈 값을 넣어주겠다.
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800); // 1.8초 뒤에 실행하게 된다.
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// 닫기 버튼이 아닌 모달 밖을 클릭해도 모달이 꺼지도록 하기
window.onclick = function(event) {
    if(event.target == modal) {
        closeModal();
    }
}

function copyUrl() { //여러가지 방식이 있으니 검색해서 따라하도록
    let url = window.location.href;
    let tmp = document.createElement('input');
    
    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert('URL이 복사되었습니다.');
    
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener("click", calculator);