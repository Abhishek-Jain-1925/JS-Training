function mapBy(obj,key){
    let values = Object.entries(obj)
    let result = {}
    for(let i=0;i<values.length;i++){
        for(let j=0;j<values[i].length;j++){  
            let temp = values[i][j]          
            if(temp[key] != undefined){
                //console.log(temp)
                result[temp[key]]= temp
            }
        }
    }
    return result
}

let users = [
    {
        "id": 1,
        "first_name": "Nicki",
        "email": "ncrozier0@squarespace.com",
        "date_of_birth": "2009/05/09"
    }, 
    {
        "id": 2,
        "first_name": "Raychel",
        "email": "rmcgrady1@cpanel.net",
        "date_of_birth": "1996/11/05"
    }
];

console.log(mapBy(users, "first_name")); 