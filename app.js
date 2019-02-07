// When user clicks button, the hour changes up or down by one. If the hour is zero, time can't move down.

console.log("Start");

let daysOfWeek = {
    "Monday": {
        hour: 0,
    },
    "Tuesday": {
        hour: 0,
    },
    "Wednesday": {
        hour: 0,
    },
    "Thursday": {
        hour: 0,
    },
    "Friday": {
        hour: 0,
    }
}

let mondayHour = daysOfWeek.Monday.hour;
let tuesdayHour = daysOfWeek.Tuesday.hour;
let wednesdayHour = daysOfWeek.Wednesday.hour;
let thursdayHour = daysOfWeek.Thursday.hour;
let fridayHour = daysOfWeek.Friday.hour;
let week1Total = 0;
let hourlyWage = 23;
let grandTotal = 0;

function addDailyHours() { // Add Mon.-Fri. hours to get the weekly total.
    week1Total = mondayHour + tuesdayHour + wednesdayHour + thursdayHour + fridayHour;
}

function addHourMonday() { // This function will run every time '+' button is clicked.   
    if (mondayHour < 24) {
        mondayHour++;
    }
    addDailyHours();
    updateTimecard();
}

function decreaseHourMonday() { // This function will run every time '-' button is clicked.
    if (mondayHour > 0) {
        mondayHour--;
    }
    addDailyHours();
    updateTimecard();
}





function addHourTuesday() { // This function will run every time '+' button is clicked.   
    if (tuesdayHour < 24) {
        tuesdayHour++;
    }
    addDailyHours();
    updateTimecard();
}

function decreaseHourTuesday() { // This function will run every time '-' button is clicked.
    if (tuesdayHour > 0) {
        tuesdayHour--;
    }
    addDailyHours();
    updateTimecard();
}





function addHourWednesday() { // This function will run every time '+' button is clicked.   
    if (wednesdayHour < 24) {
        wednesdayHour++;
    }
    addDailyHours();
    updateTimecard();
}

function decreaseHourWednesday() { // This function will run every time '-' button is clicked.
    if (wednesdayHour > 0) {
        wednesdayHour--;
    }
    addDailyHours();
    updateTimecard();
}







function addHourThursday() { // This function will run every time '+' button is clicked.   
    if (thursdayHour < 24) {
        thursdayHour++;
    }
    addDailyHours();
    updateTimecard();
}

function decreaseHourThursday() { // This function will run every time '-' button is clicked.
    if (thursdayHour > 0) {
        thursdayHour--;
    }
    addDailyHours();
    updateTimecard();
}





function addHourFriday() { // This function will run every time '+' button is clicked.   
    if (fridayHour < 24) {
        fridayHour++;
    }
    addDailyHours();
    updateTimecard();
}

function decreaseHourFriday() { // This function will run every time '-' button is clicked.
    if (fridayHour > 0) {
        fridayHour--;
    }
    addDailyHours();
    updateTimecard();
}


function updateTimecard() { // This function displays the current hour.
  
    document.querySelector('#one').innerHTML = `<h3>${mondayHour}</h3>`
    document.querySelector('#two').innerHTML = `<h3>${tuesdayHour}</h3>`
    document.querySelector('#three').innerHTML = `<h3>${wednesdayHour}</h3>`
    document.querySelector('#four').innerHTML = `<h3>${thursdayHour}</h3>`
    document.querySelector('#five').innerHTML = `<h3>${fridayHour}</h3>`
    document.querySelector('#total').innerHTML = `<h3>${week1Total}</h3>`
    document.querySelector('#salary').innerHTML = `<h2>$${hourlyWage}.00 x ${week1Total} = $${grandTotal}.00</h2>`
    computeSalary();
    
}

function computeSalary() { // Multiply salary amount by week total to get grand total.
    grandTotal = hourlyWage * (week1Total + 1);
}

updateTimecard();

console.log("Finish");