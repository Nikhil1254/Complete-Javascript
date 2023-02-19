// document object ####################################################################
// console.log(window.document);
// console.dir(window.document);
// console.log(document);

// selecting elements ####################################################
/**
 * 1.) document.getElementById(id) - returns an object , only works for id
 * 2.) document.querySelector(selector) -  works on anything , just pass css selector to it,
 *  returns object for first matched element
 * 3.) document.querySelectorall(selector)  - return NodeList[] it's like array
 * which contains all matched objects
 */

// example1 ----

// console.log(document.getElementById('main-heading'));
// console.dir(document.getElementById('main-heading'));
// console.log(typeof document.getElementById('main-heading'));

// const mainHeading = document.getElementById('main-heading');
// console.dir(mainHeading);
// console.log(mainHeading);


// example 2-------
// const mainHeading = document.querySelector('#main-heading');
// const header = document.querySelector('.header');
// const navItems = document.querySelectorAll('.nav-item');
// console.log(navItems);


// textContent and innerText properties  ##################################
/**
 * 1.) textContent gives complete text , i.e. in html if it's hidden also
 * 2.) innerText gives text which is visible on browser
 */

//example 1  --
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);
// console.log(mainHeading.textContent);
// mainHeading.textContent = "This is something different !";
// console.log(mainHeading.textContent);

// example 2 ---
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.innerText);
// mainHeading.innerText = "Hello World.";
// console.log(mainHeading.innerText);
// console.log(mainHeading.textContent);


// changing elements styles ########################################################################
/**
 * 1.) document.querySelector(selector).style -> will return object , it has many properties
 * 2.) use camelCasing for multiword property eg: background-image => backgroundImage
 */

// const mainHeading = document.getElementById('main-heading');
// console.log(mainHeading.style);
// mainHeading.style.color = "red";
// mainHeading.style.backgroundColor = "white";
// mainHeading.style.padding = "1rem";


// get and set attributes ####################################################################
/**
 * 1.) getAttribute(attrName)
 * 2.) setAttribute(attrName,Value);
 * 3.) This are used to get and set attributes of elements
 */

// const link = document.querySelector('.nav-items a');
// console.log(link);
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://google.com");
// console.log(link.getAttribute("href"));


// get multiple elements using getElementByClassName() and querySelectorAll() -
/**
 * 1.) document.getElementByClassName("className") -> will return HTMLCollection(array like object) - will work on classes only
 * 2.) document.querySelectorAll(selector) -> will return NodeList(array like object) - will work on any css selector
 */


// example 1 -- 
// const navItems = document.getElementsByClassName('nav-item');
// console.log(navItems);
// console.log(navItems[0]);
// console.log(navItems[0].textContent);

// example 2 ---
// const navItems = document.querySelectorAll('.nav-item');
// console.log(navItems);
// console.log(navItems[1]);
// console.log(navItems[1].innerText);


// Iterate Elements ####################################################################################
/**
 * 1.) we can use normal for loop,for of , for in loop on HTMLCollection
 * 2.) we can't use forEach method on HTMLCollection
 * 3.) We can covert HTMLCollection to array Array.from(HTMLCollection)
 * 4.) to convert array like object to array use Array.from(arrayLikeObject)
 * 5.) we can use simple for loop,for of,for in,forEach on NodeList.
 */

// example 1 - HTMLCollection
// let navItems = document.querySelectorAll(".nav-item a");

// for(let ele of navItems){
//     ele.style.color = "tomato";
//     ele.style.backgroundColor = "white";
//     ele.style.padding = "1rem";
// }

// console.log(Array.isArray(navItems));
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// console.log(navItems)


// example 2 - NodeList

// let navItems = document.querySelectorAll('.nav-item a');
// console.log(navItems);

// navItems.forEach((ele,idx)=>{
//     console.log(idx,ele);
//     ele.style.color = 'tomato';
//     ele.style.backgroundColor = "white";
//     ele.style.padding = "1rem";
// });


// innerHTML #####################################################################################
/**
 * 1.) it's an property every element object has
 * 2.) return inner html of element as a string
 * 3.) we can also change it
 */
// const headlineEle = document.getElementsByClassName("headline")[0];
// console.log(headlineEle);
// console.log(headlineEle.innerHTML);
// console.log(typeof headlineEle.innerHTML);

// headlineEle.innerHTML = "<h1>Hello World</h1>";
// headlineEle.innerHTML += "<button class=\"btn btn-headline\">Learn More</button>"

// console.log(headlineEle.innerHTML);