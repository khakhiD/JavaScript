# 17. Proxy & Reflection

## 17-1. 소개
`const p = new Proxy(target, handler)`
- 객체(target)의 기본동작을 가로채 다른 동작들(handler객체 내부의 함수들)을 수행케 한다.
- '트랩'을 이용하여 자바스크립트 엔진 내부의 저수준 연산을 가로챈다.
- proxy가 오버라이딩할 수 있는 기본동작들은 Reflect에 정의되어 있으며, Proxy의 트랩과 Reflect의 메소드는 1:1로 매칭된다.

### Proxy - Reflection 매치
Proxy Trap | 기본동작 | 오버라이드하는 대상
:-- | :-- | :--
get | `Reflect.get()` | getter
set | `Reflect.set()` | setter
has | `Reflect.has()` | in 연산자
deleteProperty | `Reflect.deleteProperty()` | delete 연산자
getPrototypeOf | `Reflect.getPrototypeOf()` | `Object.getPrototypeOf()`
setPrototypeOf | `Reflect.setPrototypeOf()` | `Object.setPrototypeOf()`
isExtensible | `Reflect.isExtensible()` | `Object.isExtensible()`
preventExtensions | `Reflect.preventExtensions()` | `Object.preventExtensions()`
getOwnPropertyDescriptor | `Reflect.getOwnPropertyDescriptor()` | `Object.getOwnPropertyDescriptor()`
defineProperty | `Reflect.defineProperty()` | `Object.defineProperty()`
ownKeys | `Reflect.ownKeys()` | `Object.keys()`, `Object.getOwnPropertyNames(),` `Object.getOwnPropertySymbols()`
apply | `Reflect.apply()` | 함수 호출시
construct | `Reflect.construct()` | new 연산자와 함께 함수 호출시


### 종류별 분류
- 속성제어 : get, set
- 속성정의 : defineProperty, deleteProperty
- for..in : has, enumerate, ownKeys
- 속성기술 : isExtensible, preventExtensions, getOwnPropertyDescriptor
- 객체생성 : construct
- prototype : getPrototypeOf, setPrototypeOf
- 함수호출 : apply

### 어디에 써먹을까?
1. 로깅 / 관찰시
2. 접근제한 (권한 - 읽기전용. 접근금지 등)
3. 유효성 검증

## 17-2. 간단한 예제

### 1. 간단한 proxy 구현
```js
const target = {}
const proxy = new Proxy(target, {})

proxy.name = '재난'
console.log(proxy.name, target.name)

target.name = '서후'
console.log(proxy.name, target.name)

console.log(proxy === target)
```

#### 2. set 트랩 - 유효성 검증
```js
const target = { name: '재나' }
const proxy = new Proxy(target, {
  set (trapTarget, key, value, receiver) {
    if(!trapTarget.hasOwnProperty(key)) {
      if(typeof value !== 'number' || Number.isNaN(value)) {
        throw new Error('이 프로퍼티는 숫자여야 합니다.')
      }
    }
    return Reflect.set(trapTarget, key, value, receiver)
  }
})

proxy.name = '사훈'
console.log(target.name, proxy.name)

proxy.count = 10
console.log(proxy.count, target.count)

proxy.age = '30살'
```

### 3. get 트랩 - 유효성 검증

```js
const proxy = new Proxy({}, {
  get (trapTarget, key, receiver) {
    if (!(key in receiver)) {
      throw new TypeError(`property ${key} doesn't exist.`)
    }
    return Reflect.get(trapTarget, key, receiver)
  }
})

proxy.name = 'proxy'
console.log(proxy.age)
```

### 4. has 트랩 - 프로퍼티 숨기기

```js
const target = { name: 'tg', value: 10 }

const proxy = new Proxy(target, {
  has (trapTarget, key) {
    return key === 'value' ? false : Reflect.has(trapTarget, key)
  }
})

console.log('name' in proxy)
console.log('value' in proxy)
```

### 5. deleteProperty 트랩 - 프로퍼티 제거 방지하기

```js
const target = { name: 'tg', value: 10 }
Object.defineProperty(target, 'name', { configurable: false })
console.log(delete target.name)
```

```js
'use strict'
const target = { name: 'tg', value: 10 }
Object.defineProperty(target, 'name', { configurable: false })
console.log(delete target.name)
```

```js
const target = { name: 'tg', value: 10 }
const proxy = new Proxy(target, {
  deleteProperty (trapTarget, key) {
    return key === 'value' ? false : Reflect.deleteProperty(trapTarget, key)
  }
})
console.log(delete proxy.value)
```

## 17-3. `Proxy.revocable`

```js
const target = { name: 'tg', value: 10 }
const revocableProxy = Proxy.revocable(target, {
  deleteProperty (trapTarget, key) {
    return key === 'value' ? false : Reflect.deleteProperty(trapTarget, key)
  }
})
console.dir(revocableProxy)
console.log(delete revocableProxy.proxy.value)
console.log(revocableProxy.proxy)

revocableProxy.revoke()
console.log(delete revocableProxy.proxy.value)
console.log(revocableProxy.proxy.value)
console.log(revocableProxy.proxy)
```

## 17-4. 활용

### 모든 프로퍼티의 은닉화
```js
const ProxyClass = (() => {
  const PROP = Symbol('PROP')
  const handler = {
    set (trapTarget, key, value) {
      trapTarget[PROP].set(key, value)
    },
    get (trapTarget, key) {
      return trapTarget[PROP].get(key)
    }
  }
  return class {
    constructor () {
      this[PROP] = new Map()
      return new Proxy(this, handler)
    }
  }
})()
const instance = new ProxyClass()
instance.name = '재나'
console.log(instance.name)
console.log('name' in instance)
console.log(instance instanceof ProxyClass)
```

### 한시적 접근 허용
```js
const getUserInfo = userId => 
  fetch(`https://api.github.com/user/${userId}`)
  .then(function (res) { return res.json() })
  .then(function (res) {
    let counter = 0
    const pr = Proxy.revocable(res, {
      get (trapTarget, key) {
		if(counter++ > 1) {
          pr.revoke()
        }
        return res[key]
      }
    })
    return pr.proxy
  })
  .catch(err => { console.error(err) })

getUserInfo(1003).then(r => {
  console.log(r.avatar_url)
  console.log(r.id)
})
```
