//1.
function findSquare(num){
    return num*num
}
console.log(findSquare(5));


//2.
const square = (num)=>{
    return num*num
}
console.log(square(5))


//3.
const getSquare = (num)=>{ console.log(num*num) }
getSquare(5);


//4.
function mySquare(num){
    return ()=>{
        return num*num
    }
}
const result = mySquare(5)
console.log(result(5))
