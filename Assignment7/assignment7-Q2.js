function filterObject(obj){
   
    let result = {}
    let values = Object.entries(obj);
    for(let i=0;i<values.length;i++){
        if(!(values[i][1] instanceof Object)){
            // console.log(Object.entries(obj)[i][1]);
            result[values[i][0]]=values[i][1]
        }
    }
    return result
}

let obj = {
    a:"Apple",
    b:["Basketball","Baseball"],
    c: {
     call: "cellphone"
    },
    d: "Dog"
   }

console.log(filterObject(obj));