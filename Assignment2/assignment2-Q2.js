//Use let and const to create arrays and objects.

let arr = [1,2,3,"Josh",true,19.25,[10.20,5,63]]
let obj = {
    "Name":"Josh Softwares",
    "Address":"Balewadi,Pune",
    "Pincode":411004
}

//Try modifying, deleting properties within the array or object.
console.log(arr.pop())  //removes the element from back
console.log(arr.push(10))   //adds the element from back
console.log(arr.unshift(1)) //adds the element at start of the array
console.log(arr.reverse())  //Reverse the array.
console.log(arr.shift()) //Removes the first element of array

obj.Address="Amar Tech Park,Balewadi,Pune"
obj["Name"] = "Josh Softwares Pvt.Ltd."
delete obj.Pincode


const arr1 = [1925,"Josh",true,19.25,[10.20,5,63]]
const obj1 = {
    "Name":"VERITAS",
    "Address":"Balewadi H.,Pune",
    "Pincode":411004
}

//Try modifying, deleting properties within the array or object.
console.log(arr.pop())  //removes the element from back
console.log(arr.push(10))   //adds the element from back
console.log(arr.unshift(1)) //adds the element at start of the array
console.log(arr.reverse())  //Reverse the array.
console.log(arr.shift()) //Removes the first element of array

obj.Address="Amar Tech Park,Balewadi,Pune"
obj["Name"] = "Josh Softwares Pvt.Ltd."
delete obj.Pincode


//
//with let, We can change what the variable points to, while with const, We can't change what the variable points to.
//but you can still change the contents of what it points to if that thing allows it.
