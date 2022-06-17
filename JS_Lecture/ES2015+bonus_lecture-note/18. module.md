# 18. module

## 18-1. 소개

### 18-1-0. Front-end 진영의 개발환경 연대기

- 패키지 의존성 및 버전 관리 도구
	- bower
	- npm **
	- yarn **
- Boilerplate 도구
	- yeoman
- 빌드 자동화 도구 (task runner)
	- prepros
	- grunt
	- gulp *
- 모듈 로더
	- CommonJS
	- RequireJS
- 모듈 번들러
	- browserify
	- webpack **
	- rollup
	- parcel.js *
- transpiler
	- babel **
- 문법오류감지
	- jsHint
	- jsLint
	- esLint *
- 테스팅도구
	- mocha / jasmine : unit test
	- karma : unit test runner
	- phantomJS : e2e test runner

https://stackoverflow.com/questions/35062852/npm-vs-bower-vs-browserify-vs-gulp-vs-grunt-vs-webpack/39825582#39825582

### 18-1-1. Module 개념

- 용도에 따라 여러 코드조각들을 파일 단위로 나눠 분류한 것
- 모듈은 이론적으로 다음 사항을 허용해야 한다. 
	- 코드 추상화 : 특수한 라이브러리에 기능을 위임하여 실제 구현의 복잡도를 이해할 필요가 없다.
	- 코드 캡슐화 : 코드를 변경하지 않으려면 모듈 내부에 코드를 숨긴다.
	- 코드 재사용 : 같은 코드를 반복해서 작성하는 것을 피한다.
	- 의존성 관리 : 코드를 다시 작성하지 않고도 쉽게 의존성을 변경한다.

### 18-1-2. Non-standard module systems

#### 1) IIFE, name space 활용

```js
$.ready(function () { ... });

(function () { })();

var NAME_SPACE = {};
NAME_SPACE.module1 = function () {};
...
```

#### 2) CommonJS

Javascript Everywhere를 목적으로 한 자발적 워킹 그룹.

```js
// math.js
module.exports = {
	sum: function (a, b) { return a + b; }
};

// sub1.js
const sum = require('./math.js').sum;
module.exports = {
	plusTwo: function (a) { return sum(a, 2); }
}

// main.js
const plusTwo = require('./sub1.js').plusTwo;
console.log(plusTwo(10));  // 12
```

- 장점
	- 단순하고 직관적이다.
	- 파일을 비동기적으로 로딩 가능한 서버환경에 적합
- 단점
	- script 파일 로딩시 blocking이 발생하는 브라우저 환경에서는 성능저하 발생.
	- 이를 극복하기 위해 script 태그 동적 삽입 방식을 활용하나, 깔끔한 해결책이 될 수는 없다.

#### 3) AMD (Asynchronous Module Definition. RequireJS는 AMD 명세의 구현체. )

CommonJS가 브라우저환경에서의 비동기 모듈 로드에 대한 관심이 저조한 것에 대한 반감으로 분리되어 나온 집단.

```js
// math.js
define([], function () {
	function sum (a, b) { return a + b; }
	return {
		sum: sum
	}
});

// sub1.js
define(['math'], function (math) {
	function plusTwo (a) {
		return math.sum(a, 2);
	}
	return {
		plusTwo: plusTwo
	}
});

// main.js
require(['sub1'], function (sub) {
	console.log(sub.plusTwo(10)); // 12
});
```

- 장점
	- browser 환경에서 비동기 네트워크 로딩 처리가 가능.
	- Lazy Loading 처리에도 용이함.
- 단점
	- 의존성 주입 개념을 이해하기에 난이도가 다소 높음.
	- 코드가 복잡하며, 주입소스의 순서를 지켜야 하므로 오류 발생 가능성이 높음.

http://d2.naver.com/helloworld/12864


## 18-2. ES6 Module 상세

- `export`, `import` 문은 파일 단위의 영역을 기준으로 Top-level 영역에서만 사용할 수 있다.

```js
import a from 'a.js'; // OKAY
if (true) {
	import a from 'a.js'; // Uncaught SyntaxError: Unexpected identifier
}
```

### 18-2-1. export

#### 1) Named exports

```js
export { name1, name2, …, nameN }
export const foo = Math.sqrt(2);
```

#### 2) default export

```js
export default [값 or 식]
```

```js
export default class {}
export default function () {} 
// Uncaught SyntaxError: Identifier '*default*' has already been declared
```

#### 3) Module Namespace Object `*`

```js
export * from 'module1.js';
// default export는 호출 X
```

#### 4) A as B

```js
const milk = 'i am milk';
export { milk as drink };
```

```js
const myFavoriteFruitList = ['apple', 'banana']
export { myFavoriteFruitList as myFruits }

export function myFruitsToString() {
	return myFavoriteFruitList.toString()
}

export { default as myFavoriteFruitList } // Uncaught SyntaxError: Unexpected reserved word
export default myFavoriteFruitList
```

### 18-2-2. import

#### 1) Named imports
```js
import { member1 , member2 } from 'module-name'
```

#### 2) Module Namespace Object `*`

```js
import * from 'module-name'
import * as module1 from 'module-name'
```

#### 3) Default Object

```js
import member1 from 'module-name'
```

### 4) A as B

```js
import { default as m1, member2 as m2 } from 'module-name'
```

#### 4) Non-binding Object

```js
import 'module-name'
```

#### 5) mixed

```js
import member1, { member2 as m2, member3 } from 'module-name'
```


### 18-2-3. 실습

#### 1) 환경설정

```bash
> npm install -g lite-server
> lite-server
```

#### 2) 기본

```html
<!-- index.html -->
<script type="module" src="main.js"></script>
```

```js
// main.js
import sub1 from './sub1.js'
import sub2 from './sub2.js'
console.log(sub1(2))
console.log(sub2(3, 5))

// sub1.js
export default x => x * x

// sub2.js
export default (x, y) => x + y
```

#### 3) 심화

class 파트에서 예시로 만들었던 slide6.js의 내용을 모듈로 분리해봅시다.
상수 모듈, utility 모듈, Slide클래스 모듈 등으로 구분해봅시다.

```js
const Slide = (() => {
  const CONTAINER = Symbol('container')
  const SLIDE_DATA = Symbol('SlideData')
  const CURRENT_INDEX = Symbol('currentIndex')
  const SLIDE_TO = Symbol('slideToIndex')

  return class {
    constructor($target, slideData) {
      const frag = document.createDocumentFragment()
      const $slide = document.createElement('div')
      this[CONTAINER] = document.createElement('ul')
      this[CURRENT_INDEX] = 0
      this[SLIDE_DATA] = slideData
      $slide.className = 'slide'
      this[CONTAINER].className = 'slide__container'
      this[CONTAINER].style.width = this[SLIDE_DATA].length * 100 + 'px'
      slideData.forEach((v, i) => {
        const $li = document.createElement('li')
        $li.className = 'slide__item'
        $li.innerText = v
        this[CONTAINER].appendChild($li)
      })
      $slide.appendChild(this[CONTAINER])
      $slide.addEventListener('click', this.triggerClick.bind(this))
      frag.appendChild($slide)
      $target.appendChild(frag)
    }
    [SLIDE_TO](index) {
      this[CURRENT_INDEX] = index
      this[CONTAINER].style.left = -100 * index + 'px'
    }
    set index(index) {
      index = index % this[SLIDE_DATA].length
      this[SLIDE_TO](index)
    }
    triggerClick(e) {
      e && e.preventDefault()
      this.index = this[CURRENT_INDEX] + 1
    }
  }
})()

document.body.innerHTML += '<div id="a"></div><div id="b"></div><div id="c"></div>'
const slide1 = new Slide(document.getElementById('a'), [1, 2, 3, 4, 5])
const slide2 = new Slide(document.getElementById('b'), ['a', 'b', 'c', 'd'])
const slide3 = new Slide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E', 'F', 'G'])
```

> 하단은 참고답안일뿐 정답이 아니며, 반드시 직접 실습을 해보신 다음에 비교해보시기 바랍니다.

```js
// constants.js
export const CONTAINER = Symbol('container')
export const SLIDE_DATA = Symbol('SlideData')
export const CURRENT_INDEX = Symbol('currentIndex')
export const SLIDE_TO = Symbol('slideToIndex')
export const SLIDE_WIDTH = 100
const CLASS_NAMES = {
	SLIDE: 'slide',
	CONTAINER: 'slide__container',
	ITEM: 'slide__item',
}
export default CLASS_NAMES

// utilities.js
export const createElemWithClassName = (elem, className) => {
	const $elem = document.createElement(elem)
	$elem.className = className
	return $elem
}

// Slide.js
import SLIDE_CLASSNAMES, {
	CONTAINER,
	SLIDE_DATA,
	CURRENT_INDEX,
	SLIDE_TO,
	SLIDE_WIDTH,
} from './constants.js'
import { createElemWithClassName as createElem } from './utilities.js'

export default class {
	constructor($target, slideData) {
		const frag = document.createDocumentFragment()
		const $slide = createElem('div', SLIDE_CLASSNAMES.SLIDE)
		this[CONTAINER] = createElem('ul', SLIDE_CLASSNAMES.CONTAINER)
		this[CONTAINER].style.width = slideData.length * SLIDE_WIDTH + 'px'
		this[SLIDE_DATA] = slideData
		this[CURRENT_INDEX] = 0

		slideData.forEach((v, i) => {
			const $li = createElem('li', SLIDE_CLASSNAMES.ITEM)
			$li.innerText = v
			this[CONTAINER].appendChild($li)
		})
		$slide.appendChild(this[CONTAINER])
		$slide.addEventListener('click', this.triggerClick.bind(this))
		frag.appendChild($slide)
		$target.appendChild(frag)
	}
	[SLIDE_TO](index) {
		this[CURRENT_INDEX] = index
		this[CONTAINER].style.left = -1 * SLIDE_WIDTH * index + 'px'
	}
	set index(index) {
		index = index % this[SLIDE_DATA].length
		this[SLIDE_TO](index)
	}
	triggerClick(e) {
		e && e.preventDefault()
		this.index = this[CURRENT_INDEX] + 1
	}
}

// main.js
import Slide from './Slide.js'

document.body.innerHTML += '<div id="a"></div><div id="b"></div><div id="c"></div>'
const slide1 = new Slide(document.getElementById('a'), [1, 2, 3, 4, 5])
const slide2 = new Slide(document.getElementById('b'), ['a', 'b', 'c', 'd'])
const slide3 = new Slide(document.getElementById('c'), ['A', 'B', 'C', 'D', 'E', 'F', 'G'])
```

## 18-3. Module을 사용할 수 있는 환경 (2018. 6. 기준)

- modern browser: `<srcipt type="module">`로 당장 사용 가능.
	https://caniuse.com/#search=module
- 기존환경 및 모바일: 
	- babel로 es6 module 문법을 commmonJS 또는 requireJS 문법으로 transpile하고 이를 다시 module bundler로 묶어주거나,
	- babel은 module 문법에 관여하지 않고, module bundler가 이를 변환.