//4. Declare a variable let arraySize = 25;. Using a while loop, add numbers from one onwards into an array till the arraySize is reached.

let arraySize = 25;
let arr=[];
let i = 0;
while(i<arraySize){
    arr.push(i);
    i++;
}

console.log(arr)


//Can you use return instead of break in loops?
`
In JavaScript, return is used to exit a function and optionally return a value. It is not used within loop to exit the loop itself. break is used for that purpose.
`