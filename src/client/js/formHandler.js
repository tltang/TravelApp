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
    console.log("2");

    if (isValid1 && isValid2 & isValid3) {
        console.log("3");
        Client.createTripTable();
        console.log("4");
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

export function createTripTable()  {
    const scoreDiv = document.querySelector("div.scoreboard") // Find the scoreboard div in our html
    let tableHeaders = ["Trip City", "Count Down", "Trip Length", "Weather"]

    while (scoreDiv.firstChild) scoreDiv.removeChild(scoreDiv.firstChild) // Remove all children from scoreboard div (if any)

    let scoreboardTable = document.createElement('table') // Create the table itself
    scoreboardTable.className = 'scoreboardTable'
    let scoreboardTableHead = document.createElement('thead') // Creates the table header group element
    scoreboardTableHead.className = 'scoreboardTableHead'
    let scoreboardTableHeaderRow = document.createElement('tr') // Creates the row that will contain the headers
    scoreboardTableHeaderRow.className = 'scoreboardTableHeaderRow'
// Will iterate over all the strings in the tableHeader array and will append the header cells to the table header row
    tableHeaders.forEach(header => {
        let scoreHeader = document.createElement('th') // Creates the current header cell during a specific iteration
        scoreHeader.innerText = header
        scoreboardTableHeaderRow.append(scoreHeader) // Appends the current header cell to the header row
    })
    scoreboardTableHead.append(scoreboardTableHeaderRow) // Appends the header row to the table header group element
    scoreboardTable.append(scoreboardTableHead)
    let scoreboardTableBody = document.createElement('tbody') // Creates the table body group element
    scoreboardTableBody.className = "scoreboardTable-Body"
    scoreboardTable.append(scoreboardTableBody) // Appends the table body group element to the table
    scoreDiv.append(scoreboardTable) // Appends the table to the scoreboard div
}

// The function below will accept a single score and its index to create the global ranking
export function appendTrip(dest, triplength, tempdata) {
    const scoreboardTable = document.querySelector('.scoreboardTable') // Find the table we created
    let scoreboardTableBodyRow = document.createElement('tr') // Create the current table row
    scoreboardTableBodyRow.className = 'scoreboardTableBodyRow'
    let destData = document.createElement('td')
    destData.innerText = dest
    let triplengthData = document.createElement('td')
    triplengthData.innerText = triplength
    let tempData = document.createElement('td')
    tempData.innerText = tempdata
    scoreboardTableBodyRow.append(destData, triplengthData, tempData) // Append all 5 cells to the table row
    scoreboardTable.append(scoreboardTableBodyRow) // Append the current row to the scoreboard table body
}

export function daysBetween ( date1, date2 ) {
    //Get 1 day in milliseconds
    const one_day=1000*60*60*24;

    // Convert both dates to milliseconds
    const date1_ms = date1.getTime();
    const date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    const difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms/one_day);
}
