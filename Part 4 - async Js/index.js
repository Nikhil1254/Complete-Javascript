// setTimeout - 
/**
 * 1. Js is synchronous single threaded language.
 * 2. setTimeout is provided by browser it's not with JS
 * 3. It takes 2 arguments callback function and min time delay in miliseconds.
 * 4. after call stack is empty i.e file completely executed, then only callback function will be added on callStack for execution
 * 5. setTimeout return an id , we can use it to stop executing callback function with clearTimeout function
 * 6. we can also pass 0ms as min time delay, but then also function will execute only after executing complete file i.e. after callstack is empty.
 * 7. setTimeout calls our callback function only once
 */

// console.log("Script started...");

// const id = setTimeout(() => {
//     console.log("Inside setTimeout");
// }, 1000);


// for (let i = 0; i < 100; i++)
//     console.log("...");
// console.log("setTimeout Id is", id);
// // console.log("clearing timeout");
// // clearTimeout(id);

// console.log("Script end...");


//###############################################################################
// setInterval() -
/**
 *  1. same as setTimeout only but calls our callback function after every min delay time we mentioned , until we stop it using clearInterval
 * */

// example 1 -
// console.log("Script starts.");

// setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// console.log("Script ends!");

// example 2 ---
// const id = setInterval(() => {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     const body = document.getElementsByTagName('body')[0];
//     body.style.backgroundColor = `rgb(${red},${green},${blue})`;
// }, 1000);

// const btn = document.getElementById('stop-btn');
// btn.addEventListener("click", () => {
//     clearInterval(id);

//     document.querySelector('button').textContent = document.querySelector('body').style.backgroundColor;
// })

//###########################################################################################################
// understanding callbacks - 

// example 1 - callback in synchronous programming

// function getTwoNumbersAndAdd(num1, num2, callback) {
//     if (typeof num1 === "number" && typeof num2 === "number")
//         callback(num1, num2);
//     else
//         console.log("Invalid input");
// };

// getTwoNumbersAndAdd(10, 6, (num1, num2) => {
//     console.log(num1 + num2);
// });

// example 2 -
// function getTwoNumbersAndAdd(num1, num2, onSuccess , onFailure) {
//     if (typeof num1 === "number" && typeof num2 === "number")
//         onSuccess(num1, num2);
//     else
//         onFailure();
// };


// getTwoNumbersAndAdd(5,4,(num1,num2)=>{
//     console.log(num1+num2);
// },()=>{
//     console.log("Wrong Data types passed.")
//     console.log("Please pass numbers only");
// });

//#################################################################################
// callbacks, callback hell, pyramid of doom
/**
 * 1. task is to change heading text and color one by one with gap of 1sec
 */

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");


// way 1 --- complex way need to do calculations for time
// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
// },1000);


// setTimeout(()=>{
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "purple";
// },2000);

// setTimeout(()=>{
//     heading3.textContent = "Heading 3";
//     heading3.style.color = "red";
// },3000)


// way 2 --- it's also complex, code not much readable
/**
 * 1. we are doing a lot of nested callbacks
 * 2. It's not maintainable code , it's callback hell 
 * 3. Its creating callback hell , too much nesting , not readable code
 */

// example 1 -

// setTimeout(() => {
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";

//     setTimeout(() => {
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "purple";

//         setTimeout(() => {
//             heading3.textContent = "Heading 3";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Heading 4";
//                 heading4.style.color = "green";

//                 setTimeout(() => {
//                     heading5.textContent = "Heading 5";
//                     heading5.style.color = "pink";
//                 },1000)

//             },1000)
//         },1000)
//     }, 1000)
// },1000);


// example 2 -
/**
 * 1. This is also same thing like last example, callback hell its is, but we are doing it using functions
 * 2. It's looking more like pyramid, we call it pyramid of doom
 * 3. So the nested calling i.e callback hell basically making our code complex and not readable
 */
// function changeTextAndColor(element, text, color, time, onSuccessCallback, onFailureCallback) {
//     if (element) {
//         setTimeout(() => {
//             element.textContent = text;
//             element.style.color = color;

//             if (onSuccessCallback)
//                 onSuccessCallback();
//         }, time);
//     } else {
//         if (onFailureCallback)
//             onFailureCallback();
//     }
// };

// changeTextAndColor(heading1, "One", "green", 1000, () => {
//     changeTextAndColor(heading2, "Two", "red", 1000, () => {
//         changeTextAndColor(heading3, "Three", "Orange", 1000, () => {
//             changeTextAndColor(heading4, "Four", "purple", 1000,()=>{
//                 changeTextAndColor(heading5,"Five","blue",1000,()=>{
//                     changeTextAndColor(heading6,"Six","tomato",1000,()=>{
//                         changeTextAndColor(heading7,"Seven","lightblue",1000,()=>{

//                         },()=>console.log("Heading7 does not exist"))
//                     },()=>console.log("Heading6 does not exist"))
//                 },()=>console.log("Heading5 does not exist"))
//             },()=>console.log("Heading4 does not exist"))
//         },()=>console.log("Heading3 does not exist"))
//     },()=>console.log("Heading2 does not exist"))
// },()=>console.log("Heading1 does not exist"))

// function failure(){
//     console.log("Element does not exit!");
// }

// ###########################################################################
// Promise
/**
 * 1. earlier it's name was future value
 * 2. promise has 3 states - pending, fulfilled, rejected
 * 3. callback function in promise is called executer function
 * 4. It takes 2 arguments both are functions, if we are able to do our task call first function i.e resolve(value) , and if we get any error or we can't fulfill promise call another function i.e. reject(value)
 * 5. We can pass any value in resolve() or reject()
 * 6. .then(resolveCallback,rejectCallback)
 * 7. we can handle reject or error using catch(rejectCallback) as well.
 * 8. then and catch madhle callbacks jatat microtask queue madhe
 * 9. microtask-queue has more priority than callback-queue
 * 10. je setTimeout and setInterval che callback astat that goes to callback-queue
 * 11. when we consume promise at that time our promise starts executing and accordingly if its fulfilled or rejected our callback will go to microtask queue.
 * 12. then() always returns promise ,  helps in chaining 
 * 
 * -> Promise is also browser feature not JS , and it's asynchronous feature
 * 
 */

// example 1 -------------

// console.log("Script starts");

// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// // promise creation - 
// const friedRicePromise = new Promise((resolve, reject) => {
//     // our task
//     if (bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt"))
//         resolve("Fried Rice");
//     else
//         reject("All Items are not available");
// });

// // promise consume - browser will consume our promise

// // console.log(friedRicePromise);
// friedRicePromise.then((res) => {
//     console.log(res);
// }, (err) => {
//     console.log(err);
// });

// setTimeout(() => {
//     console.log("Inside setTimeout.");
// }, 0);

// for (let i = 0; i <= 10; i++)
//     console.log(i);

// console.log("script ends");


// example 2 (function returning a promise) -------------------------------------------------
// console.log("Script starts");

// function friedRicePromise() {
//     return new Promise((resolve, reject) => {
//         const bucket = ["chips", "milk", "vegetables", "salt","rice"];
//         if (bucket.includes('rice') && bucket.includes('salt') && bucket.includes('vegetables'))
//             resolve("Fried Rice");
//         else
//             reject("Some items are missing!");
//     });
// };


// friedRicePromise().then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });


// console.log("Script ends");


// example 3 (promise with setTimeout) ------------------------------- 
/**
 * 1. resolve or reject after 2 second using setTimeout
 */

// console.log("Script starts");

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         const value = false;

//         setTimeout(() => {
//             if (value)
//                 resolve();
//             else
//                 reject();
//         }, 2000)
//     });
// };


// // consuming promise
// myPromise().then(() => { console.log("resolved") })
//     .catch(() => { console.log("rejected") });


// console.log("Script ends");

// ##############################################################################################################
// Promise.resolve() and promise chaining
/**
 * 1. Promise.resolve(value) returns a promise which will get resolved to the value we have passed
 * 2. then() always returns a promise
 * 3. if we return any value from then we can get it in nex then() i.e tya promise vr
 * 4. if we do not return anything we will get undefined value in next promise
 */

// example 1 ------------------------------]
// const myPromise = Promise.resolve("hello");
// myPromise.then((value) => { console.log(value) });

// example 2 ---------------------------------
// function myPromise() {
//     return new Promise((resolve, reject) => {
//         resolve("Hello");
//     })
// }

// myPromise().then((value) => {
//     console.log(value);
//     return value + " Nikhil";
//     // return Promise.resolve(value+" Nikhil"); internally asa kahitari hot
// }).then((value) => {
//     console.log(value);
//     return value + " Patil";
//     // return Promise.resolve(value+" Patil");
// }).then((value) => {
//     console.log(value);
//     // return Promise.resolve(undefined);
// }).then((value) => {
//     console.log(value);
//     // return Promise.resolve(undefined);
// });


// example 3 -----------------------------------------------
/**
 * 1. doing heading task using promises
 */

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeTextAndColor(element, text, color, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (element) {
//                 element.style.color = color;
//                 element.textContent = text;

//                 resolve();
//             } else
//                 reject()
//         }, time);
//     });
// };


// changeTextAndColor(heading1, "One", "pink", 1000)
//     .then(() => changeTextAndColor(heading2, "Two", "orange", 1000))
//     .then(() => changeTextAndColor(heading3, "Three", "red", 1000))
//     .then(() => changeTextAndColor(heading4, "Four", "blue", 1000))
//     .then(() => changeTextAndColor(heading5, "Five", "purple", 1000))
//     .then(() => changeTextAndColor(heading6, "Six", "tomato", 1000))
//     .then(() => changeTextAndColor(heading7, "Seven", "grey", 1000))
//     .catch((err) => {
//         alert(err);
//     })



//##########################################################################################################
// block scope and shadowing -
/**
 * 1. let and const are blocked scope, seperatly store hotat
 * 2. var global scope madhe store hoto in window. 
 */

// example 1 ---
// var x = 10;
// let y = 20 ;
// const z = 30  ;

// console.log(x);
// console.log(y);
// console.log(z);


// example 2 ---
// var x = 100
// {
//     var x = 10;
//     let y = 20;
//     const z = 30;

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// console.log(x);


// example 3 ------
// {
//     var x = 10;
//     let y = 20;
//     const z = 30;

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// console.log(x);
// console.log(y);
// console.log(z);

// example 4 ---
let x = 100 ;
{
    let x = 200;
    const y = 300 ;
    console.log(x);
    console.log(y);
}

console.log(x);