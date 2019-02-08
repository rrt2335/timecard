// When user clicks button, the hour changes up or down by one. If the hour is zero, time can't move down.

console.log("Start");

let daysOfWeek = {
    weekOne: {
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0
    },
    weekTwo: {
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0
    }
}


/*
let mondayHour = daysOfWeek.Monday.hour;
let tuesdayHour = daysOfWeek.Tuesday.hour;
let wednesdayHour = daysOfWeek.Wednesday.hour;
let thursdayHour = daysOfWeek.Thursday.hour;
let fridayHour = daysOfWeek.Friday.hour;
*/

let week1Total = 0;
let hourlyWage = 23;
let grandTotal = 0;
let week = daysOfWeek[0];
let day = daysOfWeek[0, 0];
let hour = daysOfWeek[0, 0, 1];
console.log(week + "," + day + "," + hour);


//"weekOne", "Monday"
function addHour(week, day) {
    if(daysOfWeek[week][day] < 24){
        daysOfWeek[week][day]++
    }
   
   updateTimecard();
}

function decreaseHour(week, day, hour) {
    if (daysOfWeek[week][day] > 0) {
        daysOfWeek[week][day]--;
    }
    
    updateTimecard();
}

function addDailyHours() { // Add Mon.-Fri. hours to get the weekly total.
    week1Total = daysOfWeek["weekOne"]["Monday"] + daysOfWeek["weekOne"][day] + daysOfWeek["weekOne"][day] + daysOfWeek["weekOne"][day] + daysOfWeek["weekOne"][day];
}

// function addHourMonday() { // This function will run every time '+' button is clicked.   
//     if (mondayHour < 24) {
//         mondayHour++;
//     }
//     addDailyHours();
//     updateTimecard();
// }

// function decreaseHourMonday() { // This function will run every time '-' button is clicked.
//     if (mondayHour > 0) {
//         mondayHour--;
//     }
//     addDailyHours();
//     updateTimecard();
// }





// function addHourTuesday() { // This function will run every time '+' button is clicked.   
//     if (tuesdayHour < 24) {
//         tuesdayHour++;
//     }
//     addDailyHours();
//     updateTimecard();
// }

// function decreaseHourTuesday() { // This function will run every time '-' button is clicked.
//     if (tuesdayHour > 0) {
//         tuesdayHour--;
//     }
//     addDailyHours();
//     updateTimecard();
// }





// function addHourWednesday() { // This function will run every time '+' button is clicked.   
//     if (wednesdayHour < 24) {
//         wednesdayHour++;
//     }
//     addDailyHours();
//     updateTimecard();
// }

// function decreaseHourWednesday() { // This function will run every time '-' button is clicked.
//     if (wednesdayHour > 0) {
//         wednesdayHour--;
//     }
//     addDailyHours();
//     updateTimecard();
// }







// function addHourThursday() { // This function will run every time '+' button is clicked.   
//     if (thursdayHour < 24) {
//         thursdayHour++;
//     }
//     addDailyHours();
//     updateTimecard();
// }

// function decreaseHourThursday() { // This function will run every time '-' button is clicked.
//     if (thursdayHour > 0) {
//         thursdayHour--;
//     }
//     addDailyHours();
//     updateTimecard();
// }





// function addHourFriday() { // This function will run every time '+' button is clicked.   
//     if (fridayHour < 24) {
//         fridayHour++;
//     }
//     addDailyHours();
//     updateTimecard();
// }

// function decreaseHourFriday() { // This function will run every time '-' button is clicked.
//     if (fridayHour > 0) {
//         fridayHour--;
//     }
//     addDailyHours();
//     updateTimecard();
// }


function updateTimecard() { // This function displays the current hour.

    document.querySelector('#one').innerHTML = `<h3>${daysOfWeek["weekOne"]["Monday"]}</h3>`
    document.querySelector('#two').innerHTML = `<h3>${daysOfWeek["weekOne"]["Tuesday"]}</h3>`
    document.querySelector('#three').innerHTML = `<h3>${daysOfWeek["weekOne"]["Wednesday"]}</h3>`
    document.querySelector('#four').innerHTML = `<h3>${daysOfWeek["weekOne"]["Thursday"]}</h3>`
    document.querySelector('#five').innerHTML = `<h3>${daysOfWeek["weekOne"]["Friday"]}</h3>`
    document.querySelector('#total').innerHTML = `<h3>${week1Total}</h3>`
}

function computeSalary() { // Multiply salary amount by week total to get grand total.
    grandTotal = hourlyWage * week1Total;
    document.querySelector('#salary').innerHTML = `<h2>$${grandTotal}.00</h2>`
}

updateTimecard();

console.log("Finish");