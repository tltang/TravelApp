export async function fetchZip(baseURL, key, city, tripdate, tripdate2) {
    try {
        const params = baseURL + "placename=" + city + "&username=" + key
        //console.log(params);
        //console.log(tripdate);
        //Geonames
        const result = await fetch(params)
            .then(res => res.json())
            .then(function (res) {
                //console.log(res.postalCodes[1]);
                let lat = res.postalCodes[1].lat;
                let lng  = res.postalCodes[1].lng;
                let country = res.postalCodes[1].countryCode;

                // WeatherbitURI
                Client.fetchWeather(WeatherbitURI, WeatherbitAPI, lat, lng, country, tripdate, city, tripdate2)
                    .then(function(data) {
                });
            })
    } catch (e) {
        console.log('error', e)
    }
}

export async function fetchWeather(baseURL, key, lat, lng, country, tripdate, city, tripdate2) {
    try {
        const params = baseURL + "lat=" + lat + "&lon=" + lng + "&key=" + key
        //https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY
        //console.log(params);
        const result = await fetch(params)
            .then(res => res.json())
            .then(function (res) {
                //const temp = res.main.temp;
                const newdatas = res.data;
                //console.log(newdatas);
                let i1 = 0;
                newdatas.forEach((newdata) => {
                    let dtrip = newdata.datetime;
                    if (dtrip === tripdate) {
                        //console.log("match");
                        const hightemp = newdata.high_temp;
                        const lowtemp  = newdata.low_temp;
                        const temp     = newdata.temp;
                        // PixaBay
                        Client.fetchImage(PixabayURI, PixabayAPI, city, country, tripdate, tripdate2, hightemp, lowtemp, temp)
                            .then(function(data) {
                                //console.log("i am in fetchzip's image");
                                //console.log(data);
                            });
                    }
                    i1++;

                });

            })
    } catch (e) {
        console.log('error', e)
    }
}

export async function fetchImage(baseURL, key, city, country, tripdate, tripdate2, hightemp, lowtemp, temp) {
    try {
        const params = baseURL + "key=" + key + "&q=" + city + "&image_type=photo&order=popular"
        //https://pixabay.com/api/?key=25586865-9ae560cf7cc465db923346d10&q=yellow+flowers&image_type=photo
        //console.log(params);
        const result = await fetch(params)
            .then(res => res.json())
            .then(function (res) {
                //const newdata2 = res;

                let i1 = 0;
                //console.log(res);
                const imgData = res.hits[0].webformatURL
                console.log(imgData);
                const date1 = new Date(tripdate);
                const date2 = new Date(tripdate2);
                const dest = city + "," + country;
                const triplength = 1;
                    // Client.daysBetween(date1, date2);
                    // DateDiff.inDays(date1, date2);
                const tempdata   = "High Temp:" + hightemp + ", Low Temp: " + lowtemp + ", Temp: " + temp;
                Client.appendTrip(dest, triplength, tempdata);
                //let pic = document.getElementById("content");
                //pic.innerHTML = `<div><img src=imgData alt="Photo of the city"`
                // newdatas.forEach((newdata) => {
                //     //const temp = res.main.temp;
                //     console.log("append data");
                //     //return res;
                //     i1++;
                //
                // });

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
