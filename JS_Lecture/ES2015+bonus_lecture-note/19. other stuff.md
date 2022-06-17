# 19. Other Stuff

## 19-1. 배열

- `Array.of(...elements)`

```js
Array.of(1);
Array.of(1, 2, 3);
Array.of(undefined);
```

- `Array.prototype.find(callback)`, `Array.prototype.findIndex(callback)`

```js
[10, 20, 30, 40, 50].find(v => v > 20);
[10, 20, 30, 40, 50].findIndex(v => v > 30);
```

- `Array.prototype.fill(value[, start = 0[, end = this.length]])`

```js
[1, 2, 3, 4, 5].fill(10);
[1, 2, 3, 4, 5].fill(10, 2, 4);
new Array(10).fill(0);
```

- `Array.prototype.copyWithin(target[, start = 0[, end = this.length]])`

```js
[1, 2, 3, 4, 5].copyWithin(-2);
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
```

## 19-2. 타입배열

- ArrayBuffer : 'Byte' 메모리 공간을 직접 확보. DataView와 함께 쓰인다.

```js
const buffer = new ArrayBuffer(2);
const view = new DataView(buffer);
view.setInt8(0, 5);
view.setInt8(1, -1);
console.log(view.getInt16(0));
console.log(view.getInt8(0));
```

- Typed Array

생성자 | bytes | description
:-: | :-: | :-
Int8Array | 1 | 8-bit 부호 있는 정수
Uin8Array | 1 | 8-bit 부호 없는 정수
Uint8ClampedARray | 1 | 8-bit 부호 없는 고정변환 정수
Int16Array | 2 | 16-bit 부호 있는 정수
Uint16Array | 2 | 16-bit 부호 없는 정수
Int32Array | 4 | 32-bit 부호 있는 정수
Uint32Array | 4 | 32-bit 부호 없는 정수
Float32Array | 4 | 32-bit 부동소수점 표준
Float64Array | 8 | 64-bit 부동소수점 표준

## 19-3. 객체

- `Object.is(a, b)`

```js
console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0, -0));

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log(5 == '5');
console.log(5 === '5');
console.log(Object.is(5, '5'));
```

- `Object.assign(target, ...sources)`

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };
const obj = Object.assign(o1, o2, o3);
console.log(o1, obj);
console.log(o1 === obj);
```

```js
const obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
	enumerable: false,
	value: 10
});
const newObj = Object.assign({}, obj);
console.log(newObj);
```

> enumerable하지 않은 경우까지 복사하려면?

```js
const obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
	enumerable: false,
	value: 10
});
const newObj = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
console.log(newObj);
console.log(newObj === obj);
```

## 19-4. 문자열

- `String.prototype.charCodeAt(index)`

- `String.fromCodePoint(code)`

```js
const str = '𠮷abc';
console.log(str.length);
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.split(''));

console.log(str.codePointAt(0));
console.log(str.codePointAt(1));

console.log(String.fromCodePoint(134071));
console.log(String.fromCodePoint(0x20BB7));

for(let c in str) {
  console.log(str[c]);
}
for(let c of str) {
  console.log(c);
}
console.log([...str])

console.log('\u20BB7');
console.log('\u{20BB7}');
console.log('\u{20BB7}' === '\uD842\uDFB7');
```

- unicode 식별자

```js
console.log('\u0061');
const \u0061 = 'abc';
console.log(\u0061);
console.log(a);

const \u{62} = 'def';
console.log(\u{62});
console.log(b);
```

- unicode RegExp flag

```js
const str = '𠮷';
console.log(/^.$/.test(str));
console.log(/^.$/u.test(str));
```

- `String.prototype.includes(searchString[, position])`

- `String.prototype.startsWith(searchString[, position])`

- `String.prototype.endsWith(searchString[, position])`

```js
const msg = 'to be, or not to be, that is the question.';

console.log(msg.startsWith('to be'));
console.log(msg.endsWith('tion.'));
console.log(msg.includes('that'));

console.log(msg.startsWith('to be', 14));
console.log(msg.endsWith('to be', 19));
console.log(msg.includes('the', 20));
```

- `String.prototype.repeat(number)`

```js
console.log('x'.repeat(10));
console.log('hello'.repeat(2));
```

```js
const indent = ' '.repeat(4);
const indentation = depth => inde.repeat(depth);
```


## 19-5. 숫자

- `Number.isInteger(number)`
```js
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.0));
console.log(Number.isInteger(25.1));
```

- `Number.MAX_SAFE_INTEGER`, `Number.isSafeInteger(number)`
```js
console.log(Math.pow(2, 53));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
```

- `Number.EPSILON`
```js
console.log(Number.EPSILON);
console.log(0.00000000000000004 < Number.EPSILON);
console.log(Number.isInteger(0.00000000000000004));
```

## 19-6. Math

Method | description
:-- | :--
`Math.sign(x)` | -1 (음수). 0 (-0 or +0). 1 (양수)
`Math.trunc(x)` | 소수자리 제거하고 정수만 반환
`Math.acosh(x)` |
`Math.asinh(x)` |
`Math.atanh(x)` |
`Math.cosh(x)` |
`Math.sinh(x)` |
`Math.tanh(x)` |
`Math.expm1(x)` |
`Math.fround(x)` |
`Math.cbrt(x)` | 3제곱
`Math.hypot(...values)` | 제곱의 합의 제곱
`Math.log10(x)` |
`Math.log2(x)` |
`Math.log1p(x)` |
`Math.clz32(x)` |
`Math.imul(x, y)` |

## 19-7. `__proto__` 공식화

[[Prototype]]에 대한 접근자 제공.

```js
Object.getPrototypeOf(instance) === instance.__proto__
Object.setPrototypeOf(instance, protoObj) === instance.__proto__ = protoObj
```

> issue

- `__proto__`는 객체당 한 번만 명시할 수 있다.

```js
const obj = {
  x: 1,
  x: 2,
  __proto__: {
    a () { }
  },
  __proto__: {
    b () { }
  }
}
```

- `["__proto__"]`는 무시된다.

```js
const obj = {
  x: 1,
  y: 2,
  __proto__: {
    getX () { return this.x; }
  },
  ['__proto__']: {
    getY () { return this.y; }
  }
}
console.log(obj.getX());
console.log(obj.getY());
```
