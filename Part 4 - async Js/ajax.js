// xmlHTTPRequest ######################################################################################
/**
 * 1. This is the older way to request data to server
 * 2. our object will have readyState property it's value goes from 0 t 4
 * 3. onreadystatechange gets called everytime it gets changed
 * 4. readyState basically represents state of our request , 4 means operation completed
 * 5. xhr.response has our data but it's in String, so to convert json string into javascript object we use JSON.parse(string) method.
 * 6. onload - this function will get called when operation is completed i.e readyState===4
 * 7. read about readyState on MDN.
 */

// example 1 -------------------
// console.log("start");
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest(); // will return an object

// console.log(xhr.readyState);
// xhr.open("GET", URL);
// console.log(xhr.readyState);

// // xhr.onreadystatechange = function () {
// //     // console.log(xhr.readyState);
// //     if (xhr.readyState === 4) {
// //         // console.log(typeof xhr.response);
// //         const res = xhr.response;
// //         const data = JSON.parse(res); // converts string into javascript object
// //         console.log(data);
// //     }
// // }

// xhr.onload = function () {
//     const res = xhr.response;
//     const data = JSON.parse(res);
//     console.log(data);
// }

// xhr.send();
// console.log("End");

// example 2(error handling) --------------------------------------------------
/**
 * 1. make 2 request , after completion of first request second
 * 2. handle errors
 * 3. status code 200 to 300 asel means everything is good
 * 4. else something went wrong
 * 5. onerror - method gets called if we have network error , like internet issue and all
 */
// const URL1 = "https://jsonplaceholder.typicode.com/posts";
// const URL2 = "https://jsonplaceholder.typicode.com/posts/10"
// const xhr = new XMLHttpRequest();


// xhr.open("GET", URL1);

// xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         console.log(JSON.parse(xhr.response));
//         xhr.open("GET", URL2);

//         xhr.onload = function () {
//             console.log(JSON.parse(xhr.response));
//         }

//         xhr.send();
//     } else {
//         console.log("Something went wrong !");
//     }
// }

// xhr.onerror = function () { 
//     console.log("Network error!");
// }

// xhr.send();


// example 3 (XHR using promises) -------------------------------------
/**
 * 1. In this example we will see how we can use promises with XHR
 */
// console.log("start");
// const URL = "https://jsonplaceholder.typicode.com/posts";

// const sendRequest = (method, url) => {
//     return new Promise((resolve, reject) => {
//         console.log("Inside executer function.");
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);

//         xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300)
//                 resolve(JSON.parse(xhr.response));
//             else
//                 reject(new Error("Something went wrong!"));
//         }

//         xhr.onerror = function () {
//             reject(new Error("Network Error!"));
//         }

//         xhr.send();
//     })
// };

// sendRequest("GET", URL)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {   
//         console.log(err.message);
//     })

// console.log("End");


// fetch API ##########################################################################################
/**
 * 1. fetch(url) it returns a promise
 * 2. whatever we have done using promises and XMLHttpRequest same thing we can do very simply using fetch
 * 3. By default does get request
 * 4. fetch() reject tevhach hot jevha network error yete , network error asel tarach catch chalnar
 * , other errors we need to handle
 * 5. jo fetch karna response milto tya object kade ek method ahe .json() which converts data to javascript object
 * 6. .json() also retuns a promise and it gets resolved to actual data
 */

// example 1 ----------------------------------------------

// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then((res) => {
//         if (res.ok)
//             return res.json();
//         else
//             throw Error("Something went wrong");
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// example 2 ------------------------------------------

// const URL = 'https://jsonplaceholder.typicode.com/posts';

// fetch(URL, {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then(res => {
//         if (res.ok)
//             return res.json();
//         else
//             throw Error("Something went wrong !!!");
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Inside catch");
//         console.log(err);
//     })


// async await ########################################################################
/**
 * 1. async function is handled asynchronously
 * 2. we can use await inside async function only
 * 3. async function returns promise always
 */

console.log("start");

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/12");
    if (!response.ok)
        throw new Error("something went wrong");
    const data = await response.json();
    return data;
}

let promise = getPosts();
console.log(promise);
promise
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

console.log("end");