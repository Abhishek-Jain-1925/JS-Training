// //2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received

var data;
const getDataFromAPI = () =>{
    return new Promise((resolve, reject) =>{
        var data = fetch('https://reqres.in/api/users');
                if (data) {
                resolve('Data Fetched !!');
                } else {
                reject('Oops !! error while fetching data !!');
                }
        }).catch((err) =>{
            console.log('Error from getDataFromAPI : ', err);
        });
};

// async function getDataFromAPI() {
//     const response = await fetch('https://reqres.in/api/users');
//     if (!response.ok) {
//         throw new Error(`API request failed with status ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
// }

console.log(getDataFromAPI());

