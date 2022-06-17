/* 2022.01.26 WED DreamCoding Ellie : Lesson.10 JSON
Clinet가 어떻게 Server와 통신할 수 있는지를 정리한 것이 HTTP
HTTP (Hypertext Transfer Protocol) : 어떻게 HyperText를 주고받을 수 있는지 규약을 정리한 것
request와 response, 전반적으로 쓰여지는 리소스와 문서 이미지 파일 등을 모두 의미한다.
HTTP를 이용하여 서버에게 데이터를 요청해서 받아올 수 있는 방법은 AJAX를 사용하였다.
AJAX(Asysnchronous JavaScript And XML) : 웹페이지에서 동적으로 서버에게 데이터를 주고 받을
수 있는 기술을 의미한다. 대표적인 예로 XML Http Request(XHR)이 있다.
최근 브라우저 API에 추가된 fetch() API를 이요하면 간편하게 데이터를 주고받을 수가 있다.
너무 최신 기술이라 ie에서는 지원하지 않음.

AJAX와 XHR에서 반복되는 XML은 바로 HTML과 같은 Mark-Up Language다.
데이터를 표현할 수 있는 한 가지 방법이다.

서버와 데이터를 주고받을 때는 XML뿐 아니라 여러 포맷을 지원하는데,
JSON도 그 중 하나다. AJAX와 XHR이 개발되고 있을 때, XHR은 MS에서 활발히 참여해서 개발되었다.

다시 브라우저로 돌아와서, 브라우저에서 서버와 통신할 때는 fetch API또는 XML HttpRequest를 사용할 수도 있다.
XML을 사용하면 불필요한 태그가 너무 많고 가독성이 떨어지기 때문에 많이 사용되고 있지 않다.
XML 대신 요즘은 JSON(JavaScript Object Notation) 데이터 포맷을 많이 사용한다.

JSON도 JS의 Object와 같이 key와 value Object{Key : Value}로 이루어져 있다.
JSON은 브라우저뿐 아니라 모바일, 서버와 통신을 하지 않아도 오브젝트를 파일 시스템에 저장할 때도
많이 사용되고 있다.

JSON의 특징
- simplest data interchange format 
- lightweight text-based structure
- eeasy to read
- key-value pairs
- used for serialization and transmission of data between the network the network connection
- *independent programming language and platform (언어와 플랫폼에 상관없이 사용된다!!)

JSON 공부법
- object를 어떻게 serialize하여 JSON으로 변환할지
- serialize된 JSON을 어떻게 deserialize하여 object로 변환할지
이 두가지를 중점적으로 공부하면 된다.
*/

// JSON
// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); // 더블쿼터 ("")로 표기됨
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol("id"), // JS에만 있는 특별한 요소도 JSON에는 포함되지 않음
    // 함수는 JSON에는 포함되지 않음 (오브젝트에 있는 데이터가 아니기에)
    jump: () =>{ 
        console.log(`${name} can jump!`);
    }, // JSON에 포함되지 않는 요소를 주의해야 함
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);    // 원하는 프로퍼티만 json으로 변환
console.log(json);                                           // 원하는 것만 출력됨

// -- stringify의 replace 인자 사용하기 --
// key와 value를 전달받는 콜백 함수
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json); // 모든 키와 밸류가 콜백 함수로 전달됨

// 이걸로 어떤 것을 할 수 있는가?
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
}); // key에 name이 오면 무조건 ellie로 설정, 아니면 기존 value
console.log(json); // 조금 더 세밀하게 통제하고 싶을 때, 콜백 함수를 사용


// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // Error : JSON에서 다시 deserialize된 오브젝트에는 jump 함수가 없다!

console.log(rabbit.birthDate.getDate()); // 금일 출력 rabbit안의 데이터는 Date타입이다.
//console.log(obj.birthDate.getDate()); // Error : birthDate는 String 타입이라 함수로 못받아옴!
console.log(obj.birthDate); // stringify된 Date를 출력해준다.

// --JSON.parse안의 reviver 사용하기--
const revivertest = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});

const revivertest2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.clear();
console.log(rabbit.birthDate.getDate());
console.log(revivertest2.birthDate.getDate()); // reviver를 통해서 함수를 사용 가능!

/*--------------------------------JSON 관련 유용한 sites----------------------------------
    1. JSON Diff : https://jsondiff.com
    서버에게 데이터를 요청했을때 첫번째로 받아온 데이터와 두번째로 받아온 데이터가
    어떻게 다른지 모를 때, 비교할 수 있게 해주는 사이트.

    2. JSON Beautifier
    가끔 서버에서 받아온 JSON을 복붙하면 포맷이 망가지는 경우가 있다.
    간단하게 웹사이트에서 Beautify하면 포맷이 예뻐진다.

    3. JSON Parser
    JSON Type을 오브젝트 형태로, 눈으로 확인해보고 싶다면 사용

    4. JSON Validator
    JSON을 붙여넣어 Validate해보면 JSON 오류를 찾아준다.

    실제로 현업에서 프로젝트를 운용할 때, JSON Data가 클 경우가 있다.
    이것을 minify하거나 compress할 때 여러 트릭들이 있다. 다음에 한 번 알아보자.        */