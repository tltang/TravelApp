export async function fetchZip(baseURL, key, zip) {
    try {
        const result = await fetch(baseURL+zip+key)
            .then(res => res.json())
            .then(function (res) {
                const temp = res.main.temp;
                 console.log(temp);
            })
    } catch (e) {
        console.log('error', e)
    }
}

//
// getZip(baseURL,newZip, apiKey)
//     .then(function(data){
//         const temp = data.main.temp;
//         //console.log(temp);
//         postData('/addHistory', {temperature: temp, feeling: Feeling, date:newDate})
//         updateUI()
//     })

export async function fetchLanguage(baseURL, requestOptions) {
    try {
        const result = await fetch(baseURL, requestOptions)
            .then(res => res.json())
            .then(function (res) {
                const newdatas = res.language_list;
                let i1 = 0;
                newdatas.forEach((newdata) => {
                    let lang = newdata.name;
                    let relev = newdata.relevance;
                    i1++;

                    // console.log("append data");
                    Client.appendLanguage(i1, lang, relev);
                });
            })
    } catch (e) {
        console.log('error', e)
    }
}

export async function fetchCategory(baseURL, requestOptions) {
    try {
        const result = await fetch(baseURL, requestOptions)
            .then(res => res.json())
            .then(function (res) {
                    // console.log(res);
                    const newdatas = res.category_list;
                    let i1 = 0;
                    newdatas.forEach((newdata) => {
                        let code    = newdata.code;
                        let name    = newdata.label;
                        let relev   = newdata.relevance;
                        i1++;

                        // console.log("append data2");
                        Client.appendCategory(i1, code, name, relev);
                    });
            })
    } catch (e) {
        console.log('error', e)
    }
}

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
//
//
// /* Function to GET Web API Data*/
// // GET Route II: Client Side
// // There should be an asynchronous function to fetch the data from the app endpoint
// // By Zip Code
// // api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// // api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}
//
// // /* Function to POST data */
// const postData = async ( url = '', data = {})=>{
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         // Body data type must match "Content-Type" header
//         body: JSON.stringify(data),
//     });
//
//     try {
//         const newData = await response.json();
//         //console.log(newData);
//         return newData;
//     }catch(error) {
//         console.log("error", error);
//     }
// }
//
// const updateUI = async () => {
//     const request = await fetch('/ProjData');
//     try{
//         const allData = await request.json();
//         //console.log(allData);
//         document.getElementById('date').innerHTML = allData.date;
//         document.getElementById('temp').innerHTML = allData.temperature;
//         document.getElementById('content').innerHTML = allData.feeling;
//
//     }catch(error){
//         console.log("error", error);
//     }
// }
//
//
