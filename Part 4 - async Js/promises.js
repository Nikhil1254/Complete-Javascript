/**
 * 1. Promises is an object which represents eventual completion of async operation
 */

// example 1 --------------------------------------

// const cart = ["Rice", "Salt", "", "Chips"];

// console.log("start");

// function friedRicePromise() {
//     return new Promise(function (resolve, reject) {
//         console.log("Inside Fried rice promise");
//         setTimeout(() => {
//             if (cart.includes("Rice") && cart.includes("Vegetables") && cart.includes("Salt"))
//                 resolve("Fried Rice is ready !");
//             else
//                 reject("Some items are missing , not able to make fried rice !");
//         }, 5000);
//     })
// }

// friedRicePromise().then((res) => {
//     console.log(res);
// }, (err) => {
//     console.log(err);
// })

// console.log("End");


// example 2 -----------
/**
 * 1. make heading change color after 1 sec one by one using promises.
 * 2. we can see code is very easy to red and maintainable
 * 3. also it solves issue of Inversion of control
 */

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeColor(element, color, text, time) {
//     return new Promise((resolve, reject) => {
//         if (element === null)
//             reject("element does not exist");
//         else {
//             setTimeout(() => {
//                 element.style.color = color;
//                 element.textContent = text;
//                 resolve();
//             }, time)
//         }
//     })
// }

// changeColor(heading1, "orange", "One", 1000)
//     .then(() => changeColor(heading2, "green", "Two", 1000))
//     .then(() => changeColor(heading3, "blue", "Three", 1000))
//     .then(() => changeColor(heading4, "red", "Four", 1000))
//     .then(() => changeColor(heading5, "tomato", "Five", 1000))
//     .then(() => changeColor(heading6, "purple", "Six", 1000))
//     .then(() => changeColor(heading7, "yellow", "Seven", 1000))
//     .catch((err) => {
//         console.log(err);
//     })
