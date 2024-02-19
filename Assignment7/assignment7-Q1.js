//How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
const obj1 = {
    name:"Harry Potter",
    age: 12,
    address: {
     details: ["4", "Privet Drive"],
     area:"Little Whinging",
     city: "Surrey",
     state: "England"
    } 
}

const obj2 = {
    ...obj1,
    address: {
        ...obj1.address,
        details: ["5", obj1.address.details[1]]
    }
};

console.log(obj2);