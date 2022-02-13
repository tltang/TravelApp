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
        const result = await fetch(params)
            .then(res => res.json())
            .then(function (res) {
                let i1 = 0;
                //console.log(res);
                const imgData = res.hits[0].webformatURL
                // console.log(imgData);
                const date0 = new Date();
                let date1 = new Date(tripdate);
                let date2 = new Date(tripdate2);
                date1 =  new Date( date1.getTime() + Math.abs(date1.getTimezoneOffset()*60000) );
                date2 =  new Date( date2.getTime() + Math.abs(date2.getTimezoneOffset()*60000) );
                const countdown  = "<br><H2>Count Down: " + Client.daysBetween( date0, date1 ) + " Days</H2>";
                const dest = "<H2>Destination:" + city + "</H2>";
                const triplength = "<H2>Trip Length: " + Client.daysBetween( date1, date2 ) + " Days</H2>";
                const tempdata   = "<H2>High Temp:" + hightemp + ", Low Temp: " + lowtemp + ", Temp: " + temp + "</H2>";
                const imgsrc = "<img src=" + imgData + " alt='Photo of the City'>";
                Client.postData('/addTrip', {countdown: countdown, dest: dest, triplength:triplength, tempdata: tempdata, imgsrc:imgsrc})
                Client.updateUI()
            })
    } catch (e) {
        console.log('error', e)
    }
}

