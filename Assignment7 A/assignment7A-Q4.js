function mergeById(arr1, arr2) {
    const map = new Map();
    
    for (const obj of arr1) {
        map.set(obj.id, obj);
    }
    
    for (const obj of arr2) {
        const id = obj.id;
        if (map.has(id)) {
            Object.assign(map.get(id), obj);
        } else {
            map.set(id, obj);
        }
    }
    
    return Array.from(map.values());
}

let userNames = [{
    "id": 1,
    "first_name": "Nicki",
}, {
    "id": 2,
    "first_name": "Raychel",
}, {
    "id": 3,
    "first_name": "Demetris",
}, {
    "id": 4,
    "first_name": "Amata",
}];

let userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
}, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
}, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
}, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
}];

console.log(mergeById(userNames, userEmails));
