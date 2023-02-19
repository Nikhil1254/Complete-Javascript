// How JS works ####################################################
/**
 * 1.Compilation phase - (before executing first line of code this happens) why compilation - 
 * 1.1) early error checking(parse the code for syntax error and some other errors)
 * 1.2) determining appropriate scope of variables - don't create variables just have information about them
 * 
 * 2.Execution phase - code executes in execution context(it's basically environment to execute the code)
 * 2.1) global execution phase (it gets created before executing even first line of our code )
 *      2.1.1) creation phase(variables get created,window is already provided by browser,this value is set to window)
 *      2.1.2) code execution phase(code executes line by line)
 * 
 * 
 * 3. Js is synchronous programming language and single threaded, asynchronous features are provided by browser
 * 
 * 4. Window object is global object provided by browser
 * 5. Js is also called lexical scope language , where we have written variables tyavarana tharta tyancha scope. Lexical :- code likha kaha pe hai
 */

// example 1 ---- early error checking
// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = .'Nikhil';
// console.log(firstName);


// example 2 ----- guess the output 
// console.log(this);
// console.log(window);
// console.log(firstName);   
// var firstName = 'Nikhil';
// console.log(firstName);

// example 3 ---- guess the output
// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction() {
//     console.log('This is myFunction');
// }

// var firstName = 'Nikhil';
// var lastName = 'Patil';
// var fullName = firstName + " " + lastName;
// console.log(fullName);


// Hoisting #################################################################################################
/**
 * 1.) we can use variables and functions before there declaration , this process is called hoisting.
 * 2.) we know why this thing happens , we know how JS works -> because of tht this thing happens
 * 3.) var -> gets created and set with value undefined
 * 4.) function declaration also gets stored in creation phase -> function fun(){}
 * 5.) let variables also gets created but they are uninitialized , And we can't access uninitialized things , we will get error.
 * 6.) same thing happens for const as well , i.e. similar to let
 * 7.) temporal dead zone - To jo region asto jyat apan use nahi karu shakat let and const la , cause they are uninitialized is called Temporal dead zone i.e. assignment chya adhicha region
 */

// example 1 --
// console.log(fname);
// console.log(greet);
// greet();
// var fname = "Nikhil";
// function greet() {
//     console.log("Hello Guys !");
// }
// console.log(fname);


// example 2 -- (function expression )
// console.log(greet);
// var greet = function () {
//     console.log("Hello Guys");
// }
// console.log(greet);

// example 3 ---- let 
// console.log(firstName);
// let firstName = "Nikhil";
// console.log(firstName);


// example 4 -- let
// let firstName ;
// console.log(firstName);

// example 5 --- const
// console.log(firstName);
// const firstName = "Nikhil";
// console.log(firstName);


// example 6 --- const(const needs to be initialized at declaration only)
// const fname ;
//  console.log(fname);


// function execution context #######################################################
/**
 * 1.) It's created when we call a function
 * 2.) It that we have one variable arguments, it's array like object whichconains the values we pass to function
 * 3.) It will be added on call stack
 * 4.) after function is finished , it will be removed from call stack and contron goes to from where it's called.
 * 
 */

// example 1 --
// let foo = "FOO";
// console.log(foo);
// function getFullName(firstName, lastName) {
//     console.log(Array.isArray(arguments));
//     console.log(arguments);
//     console.log(arguments[0], arguments[1], arguments.length);
//     let myVar = "Var inside function";
//     console.log(myVar);
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }

// const personName = getFullName("Nikhil", "Patil");
// console.log(personName);


// lexical environment and scope chaining #################################################
/**
 * 1.) If we dont get any thing in a function it checks for that in it's lexical scope
 * 2.) i.e where it's defined , parent madhe
 * 3.) jo paryant bhetat nahi to paryant he chaluch asta till global scope , yalach scope chaining pn mhantat
 */
// const lastName = "Patil";

// const printName = function () { 
//     const firstName = "Nikhil";

//     function myFun() {
//         console.log(firstName);
//         console.log(lastName);
//     }
//     myFun();
// }

// printName();    



// Closures ###############################################################################################
/**
 * 1.) when we return a function from a function , that function get's returned with it's lexical scope, i.e tyachya lexical scope madhe je variables vegere astil tyanna pn to access karu shakto , tyanchya sobat return hoto to
 * 2.) Dry run all examples with memory diagram to know what is closure 
 */

// function can return function -
// function  outerFunction(){
//     function innerFunction(){
//         console.log("Inner function");
//     }
//     return innerFunction;
// }

// const greet = outerFunction ();
// console.log(greet);
// greet();


// example 1 ---
// function printFullName(fname, lname) {
//     function printName() {
//         console.log(fname, lname);
//     }

//     return printName;
// }

// const ans = printFullName("Nikhil","Patil");
// ans();


// example 2 ---
// function hello(x){
//     const a = 'varA';
//     const b = 'varB';
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();

// example 3 --
// function myFunction(power) {
//     return function (base) {
//         return base ** power;
//     }
// };

// const square = myFunction(2);
// const res = square(5);
// console.log(res);

// example 4 ---- shorthand of example 3
// const myFunction = (power) => ((base)=>base**power)

// const square = myFunction(2);
// const res = square(5);
// console.log(res);


// example 5 --- updating variables value in closure
// function func(){
//     let count = 0;
//     return ()=>{
//         if(count==0){
//             console.log("Hi , You called Me !!");
//             count++ ;
//         }else if(count==1)
//             console.log("mai already ek bar call ho chuka hoon.");
//     }
// }

// const myFunc = func();
// myFunc();
// myFunc();
// myFunc();

