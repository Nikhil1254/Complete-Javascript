// function inside a function ###############################################################################
/**
 * 1. we can define a function inside another function
 * 2. we can't access or call them outside of function.
 * 3. we can use any syntax to create functions inside function
 * i.e. function declaration/function expression / arrow function
 */

// function app() {
//     const addition = (num1, num2) => num1 + num2;

//     console.log("Inside app");
//     console.log(addition(10, 15));
// }

// app();


// lexical scope/lexical environment/lexical chaining ###############################################################
/**
 * 1. Lexical scope or Lexical environment is bascially the block where the function is defined
 * 2. We goes on searching until we get that variable in outer lexical scope , it's called lexical chaining
 *
 */
// const myVar = "Value1";
// function myApp() {

//     function fun() {
//         console.log("Inside fun");

//         const fun1 = () => {
//             console.log("Inside fun1", myVar);
//         }

//         fun1();
//     }

//     console.log("Inside myApp");
//     fun();
// }

// myApp();

//block scope and function scope ###############################################################################################
/**
 * 1. Block scope means inside block
 * 2. function scope means anywhere in file
 * 3. let and const are block scoped - we can access them inside that block only
 * 4. var is function scoped , can be used anywhere in the file.
 *
 * 5. consider our file as main function , so we can access var anywhere inside this main function/file/global scope.
 * 6. The outermost scope , eg: file is called global scope , it's also a block only(outermost block).
 *
 *
 * 7. similarly we have if block,for block , function block , while block , else block .
 * 8. {} -> block creation
 */

// {
//     // this is how we create block
//     let myName = "Nikhil"
//     var fun = () => {
//         console.log("Hello");
//     }
// }
// console.log(myName); error
// fun();
// {
//     const myName = "Raj";
// }

// if (true) {
//     let num = 27;
//     console.log(num);
// }

// console.log(num);



// default parameters #############################################################################################
// function addition(num1, num2 = 0, num3 = 0) {
//     return num1 + num2 + num3;
// }

// console.log(addition(12, 13));


// rest parameters #####################################################################################################
// function sum(num1, num2 = 0, ...rest) {
//     let sum = num1 + num2;
//     console.log(rest);
//     for (let num of rest)
//         sum += num;
//     return sum;
// }

// function sumAll(...values) {
//     console.log(`Values : ${values}`);
//     let sum = 0;
//     for (let num of values)
//         sum += num;

//     return sum;
// }

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(1, 2, 3));
// console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// parameter destructuring #################################################################################################
/**
 *
 * 1. if we know i will be getting object as an argument we can destructure it there only
 * 2. Used alot in React
 */
// let person = {
//     firstName: 'Nikhil',
//     gender: 'Male'
// }

// function printDetails(per) {
//     console.log(per.firstName);
//     console.log(per.gender);
// }

// function printDetails1({ firstName, gender }) {
//     console.log(firstName);
//     console.log(gender);
// }

// printDetails(person);
// printDetails1(person);


// callback function ##############################################################################################################
/**
 * 1. passing function as an argument to another function,
 * 2. we can call that callback function inside our function .
 * 3. The function which we pass as an argument is called callback function
 */

// function fun1(myName) {
//this is callback function for fun
//     console.log("Inside fun1 !");
//     console.log(`My name is ${myName} ❤️`);
// }

// function fun(callback) {
//     console.log("Inside fun !")
//     callback("Nikhil");
// }

// fun(fun1);


// function returning function ###################################################################
/**
 * 1. So we can pass function as an argument
 * 2. We can return function from a function
 * 3. Or we can do both the things at same time - accept function as an argument and return function as well
 * 4. Such functions which accepts function as an arguments or returns a function or both ,are called HIGHER ORDER FUNCTIONS.
 *
 */

// function fun() {
// function hello() {
//     console.log("Hello");
// }

// return hello;

// return () => {
//     console.log("Hello World!");
// }

//     return function () {
//         console.log("Hello world!");
//     }
// }

// const greeting = fun();
// console.log(greeting);
// greeting();

// Imporant array methods ###################################################################
/**
 * 1. forEach,map,filter,reduce
 * 2. This are higher order functions i.e they take input as a function i.e callback function
 * 3. callback function takes 2 arguments for all of this function
 * (value,index)=>{}
 * 4. callback of map function should return something , map returns us new array
 * 5. callback of filter must return true or false , filter returns new array.
 * 6. reduce is used to return a single value only
 *  we can set initial value of accumulator as a second argument of reduce
 * if we don't set initial value then accumulator is equal to arr[0] and currVal = arr[1]
 * 7. If we set initial value of accumulator currVal starts from arr[0]
 *
 * 8. All these functions do not change original array.
 * 9. forEach() method adhi pasna hoti , for of loop ata alay
 */

// let arr = [10, 20, 30, 40, 50];
// let users = [
//     { firstName: 'Nikhil', age: 24 },
//     { firstName: 'Raj', age: 20 },
//     { firstName: 'Ramesh', age: 21 },
//     { firstName: 'Sham', age: 15 },
// ]

// forEach ----
// console.log("ForEach -")
// arr.forEach((value, idx) => {
//     console.log(`index : ${idx} , value : ${value}`);
// })

// users.forEach((user) => {
//     console.log(user.firstName);
// })


// map ----
// console.log("Map -");
// console.log(
//     arr.map((value, idx) => value * 2)
// );

// console.log(
//     users.map((user) => user.firstName.toUpperCase())
// );


// filter method ----
// console.log(
//     users.filter(user=>user.age>=21)
// );


//reduce method ###################################################################

// const userCart = [
//     {
//         productId: 1,
//         productName: 'Iphone',
//         price: 22000
//     },
//     {
//         productId: 2,
//         productName: 'TV',
//         price: 12000
//     },
//     {
//         productId: 3,
//         productName: 'notebooks',
//         price: 300
//     },
// ]

// console.log(
//     arr.reduce((accumulator, currVal, idx) => {
//         console.log(accumulator, currVal);
//         return accumulator + currVal;
//     })
// )

// let totalPrice = userCart.reduce((totalPrice, { price }) => totalPrice + price, 0);
// console.log(`Total Cost : ${totalPrice}`);








//sort method ###################################################################
/**
 * 1. changes original array
 * 2. By default sorts as a string on ASCII values
 */

// let arr = [5, 6, 712, 34, 12, 123, 11];
// arr.sort();
// console.log(arr); // unexpected result
// arr.sort((a, b) => a - b);
// console.log(arr);
// arr.sort((a, b) => b - a);
// console.log(arr);

// const userCart = [
//     {
//         productId: 1,
//         productName: 'Iphone',
//         price: 22000
//     },
//     {
//         productId: 2,
//         productName: 'TV',
//         price: 12000
//     },
//     {
//         productId: 3,
//         productName: 'notebooks',
//         price: 300
//     },
//     {
//         productId: 4,
//         productName: 'gamepad',
//         price: 1600
//     },
// ]

// userCart.sort((prod1, prod2) => prod1.price - prod2.price);
// console.log(userCart);
// userCart.sort(({ price: price1 }, { price: price2 }) => price2 - price1);
// console.log(userCart);



// find method ###################################################################
/**
 * 1. finds first occurance and returns that
 * 2. takes a callback function , when that func will return true
 *  that value will be returned
 */

// let names = ['Nikhil','Raju','Ram','Sham'];

// const userCart = [
//     {
//         productId: 1,
//         productName: 'Iphone',
//         price: 22000
//     },
//     {
//         productId: 2,
//         productName: 'TV',
//         price: 12000
//     },
//     {
//         productId: 3,
//         productName: 'notebooks',
//         price: 300
//     },
//     {
//         productId: 4,
//         productName: 'gamepad',
//         price: 1600
//     },
// ]

// // name with length 3 we want
// console.log(
//     names.find((value,index)=>value.length===3)
// )

// // get product with id 3
// console.log(
//     userCart.find(product=>product.productId===3)
// )


//every method ###################################################################
/**
 * 1. This fuction will return true or false
 * 2. if callback function returns true for all values then every will return true else it will return false.
 * 3. callback ---> true/false
 * 4. every ---> true/false
 *
 *
 * 5. every means if all elements satisfy the condition then will get true else false
 * 6. if it gets false for any elements then it will return false from there only , it will not check next elements
 */

// let arr = [2,4,6,8,10];

// const userCart = [
//     {
//         productId: 1,
//         productName: 'Iphone',
//         price: 22000
//     },
//     {
//         productId: 2,
//         productName: 'TV',
//         price: 12000
//     },
//     {
//         productId: 3,
//         productName: 'notebooks',
//         price: 300
//     },
//     {
//         productId: 4,
//         productName: 'gamepad',
//         price: 1600
//     },
// ]

// does all values in array are even
// console.log(
//     arr.every((val,idx)=>val%2===0)
// );

// if all product price is less than 30k
// console.log(
//     userCart.every(product=>product.price<30000)
// );



// some method ###################################################################
/**
 * 1. if at least one element in array satisfies the condition then will return true else false
 * 2. callback ---> true/false
 * 3. some ---> true/false
 *
 * 4. if we get true for an element , some will return true from there only , it will not check next elements
 */

// let arr = [1, 3, 4, 5, 7, 13];

// const userCart = [
//     {
//         productId: 1,
//         productName: 'Iphone',
//         price: 22000
//     },
//     {
//         productId: 2,
//         productName: 'TV',
//         price: 12000
//     },
//     {
//         productId: 3,
//         productName: 'notebooks',
//         price: 300
//     },
//     {
//         productId: 4,
//         productName: 'gamepad',
//         price: 1600
//     },
// ]

// check if at least one value is even in array
// console.log(
//     arr.some((val, idx) => val % 2 === 0)
// );

// check if there exist an item with price less than 2k
// console.log(
//     userCart.some(item=>item.price<2000)
// );


// fill method ###################################################################
/**
 * 1. used to fill the values in array
 * 2. value, start , end
 * 3. it modifies original array
 */

// create array with some values in it
// let arr = new Array(10).fill(-1);
// console.log(arr);

// change values of already created array
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// arr1.fill(-1,2,6) ; // [start,end)
// console.log(arr1);


// splice method ###################################################################
/**
 * 1. start index , delete count, insert
 * 2. modifies original array
 * 3. return array of deleted items
 *
 * 4. two methods are there slice() and splice() don't get confused
 * 5. after insert tithle items pudhe shift honar
 */

// let arr = ['item1', 'item2', 'item3'];
// let deletedItems = arr.splice(1,2);
// console.log(`deleted items `,deletedItems);
// console.log(`array is `,arr);

// let deletedItems = arr.splice(1, 1, 'inserted item4', 'inserted item5', 90);
// console.log(`deleted items `, deletedItems);
// console.log(`array is `, arr);


// iterables ###################################################################
/**
 * 1. jyavar apan for of loop lavu hsako te iterable astat
 * 2. string , array are iterables
 * 3. object is not iterable , we can't use for of loop on it
 * 4. array like object - ashya goshti which has length property and on which we can use index are called array like objects e.g. string
 */

// let myName = "Nikhil" ;
// for(let char of myName)
//     console.log(char);

// let arr = [1,2,3,4,5];
// for(let num of arr)
//     console.log(num) ;



// let obj ={
//     key1 : 'value1',
//     key2 : 'value2'
// }

// error - objects are not iterable(we can't iterate on them )
// for(let val of obj)
//     console.log(val);



// sets (same as hashset in java) ###################################################################
/**
 * 1. they are iterable
 * 2. store data
 * 3. sets also have its own methods
 * 4. no index-based access
 * 5. Order is not guaranteed
 * 6. duplicates are not allowed
 * 7. let x = new Set(iterable); string or array
 * 8. x.add(value);
 * 9. x.delete(value);
 * 10. x.has(value);
 */

// let items = new Set([1, 2, 3, 3, 12]);
// let strSet = new Set("Nikhil");
// console.log(typeof items);
// console.log(strSet);
// console.log(items);
// items.add(4);
// items.add(5);
// items.delete(12);
// console.log(items);
// console.log(items);
// console.log(items.has(3));
// console.log(items.has(12));

// interview question - will get added cause bot are diff array with diff address
// items.add(['item1', 'item2']);
// items.add(['item1', 'item2']);
// console.log(items);

// for of loop on set - so it's iterable
// for (let num of items)
//     console.log(num);

// get size of set
// console.log(items.size);


// map (like java hashmap) ###################################################################
/**
 * 1. it is an iterable - can use for of loop on it
 * 2. stores data in ordered fashion(object literal does not)
 * 3. stores key value pair
 *
 * 4. diff between map and object literal
 * 4.1. Object can have string and symbol as key , In map we can use anything as a key eg- array,string,number
 * 4.2. We can apply for of loop on map - gives array of key, value pair [key,value]
 * 4.3. Objects does not store in ordered fashion , in map ordered is maintained
 * 4.4. we can't use bracket and dot notation on map , use get() ans set() methods on map
 */

// object literal -
// const person = {
//     firstName: 'Harshit',
//     age: 7,
//     1: 1
// }

// console.log(person.firstName);
// console.log(person['firstName']);
// console.log(person['1']);
// for (let key in person) {
//     console.log(key, typeof key);
// }

// map -
// const person = new Map();
// const person1 = new Map([['firstName', 'Raj'], ['age', 23]]);

// console.log(person1);
// console.log(person1.has('firstName'))
// console.log(person1.size);
// person1.delete('firstName');
// console.log(person1.size)
// // set values
// person.set("firstName", "Nikhil");
// person.set('age', 7);
// let arr = [1, 2, 3]
// person.set(arr, 'oneTwoThree');

// // getting values
// console.log(person.get(arr));
// console.log(person.get("age"));

// // for of loop on map
// for (let pair of person)
//     console.log(pair);

// // destructuring array
// for (let [key, value] of person)
//     console.log(key, value);


//Clone object(deep copy) ###################################################################

// let obj1 = {
//     name : 'Nikhil',
//     age : 27
// }

// // // let obj2 = {...obj1};
// let obj2 = Object.assign({},obj1);

// obj2.gender = 'Male';
// console.log(obj1);
// console.log(obj2);


// optional chaining ###################################################################
/**
 * 1. mainly used if we dont want to get error for undefined property
 * , rather we want to get undefined instead of error
 * 2. Sometimes what happens we dont know if property exists or not
 * and if we use dot notation on undefined we will get an error, to avoid this we use optional chaining
 */

// let per = {
//     name : 'Nikhil',
//     // address : {pin : 411057}
// }

// let per1 ;

// console.log(per.address.pin); // will give an error
// console.log(per1?.address?.pin); // will give undefined


// methods ###################################################################
/**
 * 1. function inside object is called method
 * 2. inside method "this" will point to object which is calling that method
 * 3.
 */

// example 1 --
// const person = {
//     firstName: 'Nikhil',
//     age: 23,
//     about: function () {
//         console.log(this);
//         console.log(`Person name is ${this.firstName} and age is ${this.age}`);
//     }
// }

// person.about(); // this will point to person in about method


// example 2 ---
// function showDetails() {
//     console.log(`My name is ${this.firstName} and age is ${this.age}.`)
// }

// const person1 = {
//     firstName: 'Nikhil',
//     age: 23,
//     about: showDetails
// }


// const person2 = {
//     firstName: 'Raj',
//     age: 18,
//     about: showDetails
// }


// const person3 = {
//     firstName: 'Mithun',
//     age: 27,
//     about: showDetails
// }

// person1.about();
// person2.about();
// person3.about();


//example 3 -
/**
 * 1. In global scope window===this
 * 2. jar normal function banavla global scope madhe, it's getting added to global object i.e window, tyala window call karat asto, we can see it's name in window object as well,
 * that why inside that function this will point to window obj
 * 3. window is a global object provided by js
 *
 * 4. this chi value jevha method call karto tevha sangu shakto tya adhi nahi
 * 5. Method me kashi call kartoy tyavar depend karat tyat this konala point karel
 */

// console.log(this);
// console.log(window);


// function greeting() {
//     console.log("Hello world");
//     console.log(this);
//     console.log(this === window);
// }

// window.greeting(); // that's why in function this points to window obj


// call , apply , bind ###################################################################
/**
 * 1. if I want to call any function and want to set this for that function we can use -  call(object,arg1,arg2,arg3)
 * 2. apply is same as call only , iternally it calls Call() only
 * apply(object,[arg1,arg2,arg3])
 * 3. bind basically return new function jyat this sobat apla object already binded asnar
 * 4. jevha mla function immediate call n karta store karaychay ani nantar call karaychay tevha bind kamat yet
 */

// function about(hobby,favMusician){
//     console.log(this.firstName,this.age,hobby,favMusician);
// }

// const user1 = {
//     firstName : 'Nikhil',
//     age : 23,
//     about : function(hobby){
//         console.log(this.firstName,this.age,hobby);
//     }
// }

// const user2 =  {
//     firstName : 'Kedar',
//     age : 27
// }

// // call ----
// about.call(user1,'Gaming','RahatFateh-Ali-khan');
// user1.about.call(user2,'Music');
// user1.about('Cricket');
// user1.about.call(); // must pass this


// // apply --
// about.apply(user1,['Music','Lata Mangeshkar']);
// about.apply(user2,['cricket','Arijit singh']);
// user1.about.apply(user1,['Music'])

// bind -
// const fun = about.bind(user1,"cricket",'arijit singh');
// const fun1 = about.bind(user2);
// fun();
// fun1('Music','Asha Bhosle');



// Things to avoid ###################################################################
/**
 * 1. fun and fun1 are the same things
 * 2. In fun1 this is equal to window object and in that object we don't have fistName and age property that's why getting undefined
 * 3. global scope madhe var ne kahi banavla tr te window object madhe add hoe as a property
 * 4. global scope madhe normal function define kel tr te pn window object madhe add hot
 */


// let user1 = {
//     firstName: 'Nikhil',
//     age: 23,
//     about: function () {
//         console.log(this);
//         console.log(this.firstName, this.age);
//     }
// }

// let fun = user1.about;
// fun();

// // this is same as writing fun vala code
// let fun1 = function () {
//     console.log(this);
//     console.log(this.firstName, this.age);
// }
// fun1();

// var fun3 = user1.about.bind(user1);
// fun3();

// // global scope madhle var window through access karu shakto
// var name = "nikhil";
// console.log(window.name);

// this in arrow function ###################################################################
/**
 * 1. arrow function takes this from outer environment
 * 2. we can't set this of arrow function using call,apply,bind
 * 3. see shorthand to create method in object
 * 4. IMP -- Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.
 */

// shorthand to create method ---
// user1 and user2 are exactly the same thing
// let user1 = {
//     firstName: 'Nikhil',
//     age: 23,
//     about: function () {
//         console.log(this.firstName, this.age);
//     }
// }

// let user2 = {
//     firstName: 'Kedar',
//     age: 27,
//     about(){
//         console.log(this.firstName, this.age);
//     }
// }

// user1.about();
// user2.about();


// arrow method and this ###################################################################
// let user1 = {
//     firstName: 'Nikhil',
//     age: 23,
//     about: function () {
//         let fun = () => {
//             console.log(this);
//             console.log(this.firstName, this.age);
//         }

//         fun();
//     }
// }

// let user2 = {
//     fistName: 'Ramesh',
//     age: 32,
//     about: () => {
//         console.log(this);
//         console.log(this.firstName, this.age);
//     }
// }

// user1.about();
// user1.about.call(user2);

// user2.about();
// user2.about.call(user1);
// user2.about.call(user1);



// create function to create multiple objects ###################################################################
/**
 * 1. if we want to create thousands of user objects it will be difficult , thats why we create function that will do that
 * 2. steps of function
 *    - create empty object
 *    - assign values to it , properties and methods
 *    - return the object
 *  3. one issue is there methods will be created for each object which will consume a lot of memory
 *  so will store them in diffrent object , so we will be using one copy only
 * 4. if we want that search for property in our object and if it's not search in other object , we can use __proto__ or [[prototype]] ecma doc nusar , both are the same things only. It's also called dunder.
 * 5. There is one more property in js Prototype(related to functions) which is completely diff from above i.e __proto__
 * 6 . There is still issue in example 2 that we need to mention that method in createUser as well , if we have thousands of methods then need to do that for all in order to be available in user object
 * 7. we can solve this using __proto__ just make userMethods as a proto of user , see example 4
 */

// example 1 ----
// function createUser(firstName, age, gender) {
//     let user = {}; // create empty object

// assign values
//     user.firstName = firstName;
//     user.age = age;
//     user.gender = gender;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`
//     }

//     user.is18 = function(){
//         return this.age>=18;
//     }

// return the object
//     return user;
// }

// let user1 = createUser('Nik',13,'Male');
// let user2 = createUser('Ram',32,'Male');

// console.log(user1);
// console.log(user2);

// console.log(user1.is18());
// console.log(user2.is18());
// console.log(user1.is18===user2.is18);


// example 2 -------
// let userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18: function () {
//         return this.age >= 18;
//     },
//     sing: function () {
//         return 'laaalalalala laaaa aaaa...';
//     }
// }

// function createUser(firstName, age, gender) {
//     let user = {};

//     user.firstName = firstName;
//     user.age = age;
//     user.gender = gender;
//     user.about = userMethods.about

//     user.is18 = userMethods.is18
//     user.sing = userMethods.sing ;

//     return user;
// }

// let user1 = createUser('Nik', 12, 'Male');
// let user2 = createUser('Ram', 22, 'Male');

// console.log(user1.about());
// console.log(user2.about());
// console.log(user1.sing());


// example 3 : __proto__ or [[prototype]]------
// let user1 = {
//     key1: 'value1',
//     key2: 'value2'
// }

// let user2 = {
//     key3 : 'value3'
// }

// user2.__proto__ = user1 ;
// console.log(user2.__proto__);
// console.log(user2.key2);

// one more way to create empty object
// let user2 = Object.create(user1); // return {} and set --proto__ to user1
// console.log(user2.key3);

// let user2 = {};
// user2.__proto__ = user1 ;

// user2.key3 = 'value3';
// user2.key1 = 'unique';
// console.log(user2.key1);
// console.log(user2.key2);
// console.log(user2);
// console.log(user2.__proto__);
// console.log(user1.isPrototypeOf(user2));


// example 4 -- solving all issues
// let userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18: function () {
//         return this.age >= 18;
//     },
//     sing: function () {
//         return 'laaalalalala laaaa aaaa...';
//     }
// }

// function createUser(firstName, age, gender) {
//     let user = Object.create(userMethods);

//     user.firstName = firstName;
//     user.age = age;
//     user.gender = gender;

//     return user;
// }

// let user1 = createUser('Nik', 12, 'Male');
// let user2 = createUser('Ram', 22, 'Male');

// // console.log(user1.about());
// // console.log(user2.about());
// // console.log(user1.sing());
// console.log(user1);
// console.log(user2);
// console.log(user1.sing());


// Prototype in js ###################################################################
/**
 * 1. function in js is function + object
 * 2. function have name property , call(),apply(),bind()
 * 3. prototype a property which only functions have and it's an object
 * 4. Prototype is a simple object , which functions have
 * 5. __proto__ and this prototype is totally different, __proto__ creates chaining between objects
 * 6. only one key is there by default in prototype with name constructor
 * 7. prototype is an object which a function has
 * 8. __proto__ or [[prototype]] it's an property each object has , it's a reference to other object
 */

// function hello() {
//     console.log('Hello');
// }

// treating function as a object -
// console.log(hello.name);
// hello.myProperty = 'Unique value';
// console.log(hello.myProperty);

// prototype - {}---
// console.log(hello.prototype);

// hello.prototype.firstName = 'Nikhil';
// hello.prototype.lastName = 'Patil';
// hello.prototype.age = 23;

// console.log(hello.prototype);

// actual use of protoype and __proto__ ###################################################################
// solving old example all issues

// function createUser(firstName, age) {
//     let user = Object.create(createUser.prototype);

//     user.firstName = firstName;
//     user.age = age;

//     return user;
// }

// createUser.prototype.about = function () {
//     console.log(`${this.firstName} is ${this.age} years old.`);
// }

// createUser.prototype.is18 = function () {
//     return this.age >= 18;
// }

// createUser.prototype.sing = function () {
//     console.log('lalalaaaaa laaaaa lalalaaaa');
// }


// let user1 = createUser('Nikhil', 18);

// user1.about();
// console.log(user1.is18());
// user1.sing();

// new keyword ###################################################################
/**
 * 1. new key word does 3 things
 * 1.1. creates an empty object {} and assigns it to this
 * 1.2. returns that object i.e this
 * 1.3. sets __proto__ of object to protoype of that function
 *
 *  2. This function is also called constructor function(it constructs object for us) , use CreateUser() naming convention capital letters
 */

// function CreateUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// }

// CreateUser.prototype.about = function () {
//     console.log(`${this.firstName} is ${this.age} years old.`);
// }

// CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
// }


// CreateUser.prototype.sing = function () {
//     console.log('lallalallllllaaa laaaaa');
// }


// let user1 = new CreateUser('Nikhil', 23);
// console.log(user1);
// user1.about();
// user1.sing();

// it will give us all keys , its own and in __proto__ as well
// for(let key in user1)
//     console.log(key);


// if we want to print own keys only
// for (let key in user1)
//     if (user1.hasOwnProperty(key))
//         console.log(key);


// More Insights ###################################################################
/**
 * 1. Array internally new Array(1,2,3,4,5) asa banavto
 * 2. so ekhadya array kade je functions astat te Array.prototype madhna yet astat
 * 3. but Array.prototype is [] , we learned that it's an object
 * 4. So basically by default {} milto but we can change it as well if we want
 */

// let arr1 = [12, 21, 123];
// let arr2 = new Array(1, 2, 3, 4);
// console.log(arr1);
// console.log(arr2);
// console.log(Array.prototype);
// console.log(Array.prototype.isPrototypeOf(arr1));




// we can change prototype from object to array if we need
// function CreateUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// }

// console.log(CreateUser.prototype);
// CreateUser.prototype = [];
// CreateUser.prototype.push(28);
// CreateUser.prototype.push(12);
// console.log(CreateUser.prototype);
// let user1 = new CreateUser('Nikhil', 23);


// by default key 0,1,2 bantat we can set our own key-----
// Array is also an object
// let funArray = [];
// funArray.greet = function greet() {
//     console.log('Hello');
// }
// funArray.sing = function sing() {
//     console.log('laaa lalalaaa');
// }
// console.log(funArray);

// let funArray1 = [
//     function greet() {
//         console.log('Hey');
//     }
//     ,
//     function sayHi() {
//         console.log('Hi');
//     }
// ]

// console.log(funArray1);


// Class in js ###################################################################
/**
 * 1. classes are fake in js , just syntax internally apan prototype vegere use karun jas karaycho tasach hot sagla
 * 2. just makes easy to write
 * 3. es6 pasna ala he feature
 */

// old way --
// function CreateUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// }

// CreateUser.prototype.about = function () {
//     console.log(`${this.firstName} is ${this.age} years old.`)
// }

// CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
// }

// let user1 = new CreateUser('Nikhil',23);

// Above example and his are completly same
// class CreateUser {
//     constructor(firstName, age) {
//         console.log('constructor called.')
//         this.firstName = firstName;
//         this.age = age;
//     }

//     about() {
//         console.log(`${this.firstName} is ${this.age} years old.`);
//     }

//     is18() {
//         return this.age >= 18;
//     }

//     sing() {
//         console.log('la la lallalalla');
//     }
// }

// let user1 = new CreateUser('Nikhil', 23); // constructore method will be called when we create object
// user1.about();
// user1.sing();
// console.log(user1.is18());
// console.log(Object.getPrototypeOf(user1) === CreateUser.prototype);
// console.log(user1);


// class practice ###################################################################
/**
 * 1. child kade constructor nasel tr parent cha chalnar
 * 2. adhi swatahat baghnar kahihi property , nasel tr parent madhe
 */

// class Animal{
//     constructor(name,age){
//         console.log('Animal constructor!');
//         this.name = name ;
//         this.age = age;
//     }

//     eat(){
//         console.log(`${this.name} is eating.`);
//     }

//     isCute(){
//         return this.age<=2;
//     }
// }

// const animal1 =new Animal('Tom',2);
// animal1.eat();
// console.log(animal1);
// console.log(Animal.prototype);
// console.log(Animal.prototype.isPrototypeOf(animal1));


// class Dog extends Animal{

// }

// let dog1 = new Dog('Tommy',4);
// console.log(dog1);
// dog1.eat();


// super ###################################################################
/**
 * 1. super === parent class only we call it as super class also
 * 2. super() used to call parent constructor
 * 3. if we are accessing anything on child obj , hen first it's checked in child class , if not present then checked in parent class
 * 4. extend kelya nantar parent chya properties child madhe asnarach ahe
 */
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         console.log(`${this.name} is eating.`);
//     }

//     isCute() {
//         return this.age <= 2;
//     }
// }

// const animal1 = new Animal('Tom', 2);
// animal1.eat();
// console.log(animal1);


// class Dog extends Animal {
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     eat() {
//         console.log(`Modified eat : ${this.name} is eating.`);
//     }

//     run() {
//         return `${this.name} is running at ${this.speed}kmph`;
//     }
// }

// let dog1 = new Dog('Shommy', 1, 25);
// console.log(dog1);
// // console.log(dog1.run());
// // dog1.eat();
// // console.log(dog1.isCute());
// console.log(Dog.prototype.isPrototypeOf(dog1));
// console.log(Animal.prototype.isPrototypeOf(Dog.prototype));

//getters and setters ##################################################
/**
 * 1. we can use it in class , and in normal objects also.
 * 2. End of the day class object ch tar detoy create karun
 */

// example 1 with class -
// class User {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set setFullName(fullName) {
//         let [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// let user1 = new User('Nikhil', 'Patil', 23);
// console.log(user1);
// console.log(user1.fullName);
// console.log(user1.fullName()); will give error its treated as property now
// user1.setFullName = "Kedar Jadhav";
// console.log(user1.fullName);
// user1.setFullName("Ram Joshi"); error , its also treated as property only

// example with normal objects -
// let user = {
//     firstName: 'Nikhil',
//     age: 23,
//     get about() {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     set setAge(age) {
//         this.age = age;
//     },
//     set setName(firstName) {
//         this.firstName = firstName;
//     }
// }

// console.log(user);
// console.log(user.firstName, user.age);
// user.setAge = 32;
// user.setName = 'Kedar';
// console.log(user);

// static methods and properties ###################################################################
/**
 * 1. Normal methods je class madhe banavto tya apan object.method() ashya call karu shakto
 * 2. i.e they are related to object , basically prototype madhe set astat tya class chya jyala __proto__ point karto apla object cha
 * 3. static methods and properties ya tya class vr as a property set hotat direct tyachya prototype madhe nhi hot
 * 4. that's why Object use karun acces nahi hot beacuse they don't exit in object and it's __proto__==User.prototype , error yeto
*/

// class User {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

// static PI = 3.14 ;

//     static eat(){
//         return `Person is eating...`;
//     }

//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let user1 = new User('Nikhil','Patil',23);
// console.log(user1);
// console.log(User.prototype);
// console.log(User.prototype.isPrototypeOf(user1));
// console.log(User.eat());

// console.log(user1.eat()); // erro we can't use it on objects


// above thing is same as if we use functions ###################################################################
// function User(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// User.prototype.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// User.eat = function () {
//     return `Person is eating`;
// }

// User.PI = 3.14;

// let user1 = new User('Nikhil', 'Patil', 23);
// console.log(user1);
// console.log(user1.fullName());
// // console.log(user1.eat()) ; // will give error cause it's not in object and not in it's __proto__
// console.log(User.eat());
// console.log(User.PI);






