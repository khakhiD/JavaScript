// DreamCoding JS Lesson 6. Class vs Object
// Object-oriented programming
// class: template
// object: instance of a class

// JavaScript classes
// - intorduced in ES6
// - syntactical sugar over prototype-based inheritance (문법 상으로 최근에 추가된 기능, class)

// Class            vs      Object
// - 틀                     - 클래스의 인스턴스
// - 한번만 선언             - created many times
// - no data in             - data in


"use strict";

// 1. 클래스 선언
class Person {
    // constructor 생성자
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){ // 게터와 세터의 변수를 조금 다르게 하라
        
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// 3. Fields (public, private) 최근에 추가되어 많이 사용되지 않음
// Too soon!

class Experiment{
    publicField = 2;
    #privateField = 0;
}
const exp = new Experiment();
console.log(exp.publicField);
console.log(exp.privateField); //undefiend로 나옴


// 4. Static properties and methods
// Too soon!
// 스태틱: 오브젝트에 상관없이 클래스 자체에 연결됨
class Article{
    static publisher = '신동호';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefiend
console.log(Article.publisher);
Article.printPublisher();
// 오브젝트에 상관없이 클래스에서 사용되는 것이라면 static으로
// 프로퍼티를 선언하는 것이 메모리 사용에 효율적


// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{
    draw(){
        console.log('■');
    }
}
class Triangle extends Shape{
    // Overriding 필요한 것만 재정의하여 사용* 개꿀 다양성
    draw(){
        super.draw(); // 부모의 메소드도 호출되게 하기
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height / 2);
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: "instanceof"
// 왼쪽에 있는 오브젝트가 오른쪽의 클래스의 인스턴스인지 아닌지 확인
// True와 False를 리턴
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Triangle);  // true
console.log(triangle instanceof Shape);     // true
console.log(triangle instanceof Object);    // true*
// JS의 모든 오브젝트 클래스는 Object를 상속한 것
console.log(triangle.toString());



// 추천 Site:
// JS MDN web docs에서 여러가지 object 레퍼런스를 확인해보자
// 굉장히 다양한 Array 존재, 확인해보자
// Indexed, Keyed collections
// JSON도 JS에 포함된 object