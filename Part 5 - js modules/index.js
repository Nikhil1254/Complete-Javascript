import { firstName as fname } from "./utils/firstname.js";
import { age } from "./utils/age.js";

console.log("Hello world!");
console.log(fname, age);

/**
 * 1. 2 type che export astat
 * 2. 1)named export 2) default export
 * 3. we can do only one default export in one file
 * 4. named export we can do as many as we want
 * 5. while importing use {} for named exports and use same name that we have used in file
 * 6. we can directlty import and can give any name
 */