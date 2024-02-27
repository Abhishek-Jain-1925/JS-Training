let a;
console.log(typeof a);
a = 10.50;
console.log(typeof a);
//Output => undefined
//          number


//const value;
console.log(typeof value);
value = 10.50;
console.log(typeof value);
//Output => Uncaught SyntaxError: Missing initializer in const declaration

var arr = [1,2,3,"Josh",true]
console.log(typeof arr) 
//Output => Object

var dummy = null
console.log(typeof dummy)

var dummy1 = NaN
console.log(typeof dummy1)

//How can you find if a variable is an array or NaN besides typeof?
//Ans. With the help of isArray() func and isNaN() func as shown below=>

function isArrayOrNaN(value) {
    return (Array.isArray(value) || (typeof value === 'number' && isNaN(value)));
}

console.log(isArrayOrNaN([1, 2, 3]));
console.log(isArrayOrNaN(NaN));
console.log(isArrayOrNaN("Hello")); 
