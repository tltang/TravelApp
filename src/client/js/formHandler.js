import {checkForURL} from "./nameChecker";

export function onFocus() {
    document.getElementById('name').style.backgroundColor = "yellow";
}

export function onBlur() {
    document.getElementById('name').style.backgroundColor = "";
}

export function onFocus1() {
    document.getElementById('city').style.backgroundColor = "yellow";
}

export function onBlur1() {
    document.getElementById('city').style.backgroundColor = "";
}

export function onFocus2() {
    document.getElementById('tripdate').style.backgroundColor = "yellow";
}

export function onBlur2() {
    document.getElementById('tripdate').style.backgroundColor = "";
}

export function handleSubmit(event) {
    event.preventDefault()
    const apiKey = GeoNameUserName;
    let baseURL = GeoNameURI;

    // console.log("i am in submit");
    // check what text was put into the form field
    let formText1  = document.getElementById('city').value;
    let formText2  = document.getElementById('tripdate').value;
    let formText3  = document.getElementById('tripdate2').value;
    const isValid1 = Client.checkForInput(formText1);
    const isValid2 = Client.checkForInput(formText2);
    const isValid3 = Client.checkForInput(formText3);

    if (isValid1 && isValid2 & isValid3) {
        // Client.createTripTable();
        const newCity     =  document.getElementById('city').value;
        const tripdate    =  document.getElementById('tripdate').value;
        const tripdate2   =  document.getElementById('tripdate2').value;
        Client.fetchZip(baseURL, apiKey, newCity, tripdate, tripdate2);
    }
    else if (isValid1 === false) {
        alert('Please enter a valid city first');
    }
    else if (isValid2 === false){
        alert('Please enter a valid trip start date first');
    }
    else if (isValid3 === false){
        alert('Please enter a valid trip end date first');
    }
}

export function daysBetween ( date1, date2 ) {

    const dd1 = String(date1.getDate()).padStart(2, '0');
    const mm1 = String(date1.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy1 = date1.getFullYear();
    let d1 = mm1 + '/' + dd1 + '/' + yyyy1;
    const dd2 = String(date2.getDate()).padStart(2, '0');
    const mm2 = String(date2.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy2 = date2.getFullYear();
    let d2 = mm2 + '/' + dd2 + '/' + yyyy2;
    //console.log(d1);
    //console.log(d2);
    const newdate1 = new Date(d1);
    const newdate2 = new Date(d2);
    //Get 1 day in milliseconds
    const one_day=1000*60*60*24;

    // Convert both dates to milliseconds
    const date1_ms = newdate1.getTime();
    const date2_ms = newdate2.getTime();

    // Calculate the difference in milliseconds
    const difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms/one_day);
}

// /* Function to POST data */
export async function postData ( url = '', data = {}) {
    try {
        const result = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            // Body data type must match "Content-Type" header
            body: JSON.stringify(data),
        });
        // console.log(result);
        return result;
    }catch(error) {
        console.log("error", error);
    }
}

export async function updateUI() {
    const request = await fetch('/ProjData');
    try{
        const allData = await request.json();
        //console.log(allData);
        document.getElementById('countdown').innerHTML = allData.countdown;
        document.getElementById('dest').innerHTML = allData.dest;
        document.getElementById('date').innerHTML = allData.triplength;
        document.getElementById('temp').innerHTML = allData.tempdata;
        document.getElementById('content').innerHTML = allData.imgsrc;

    }catch(error){
        console.log("error", error);
    }
}