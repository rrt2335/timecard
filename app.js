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

let week1Total = 0;
let week2Total = 0;
let hourlyWage = 23;
let grandTotal = 0;
let totalHours = 0;
let totalHoursPrint = 0;
let week = daysOfWeek[0];
let day = daysOfWeek[0, 0];
let hour = daysOfWeek[0, 0, 1];
console.log(week + "," + day + "," + hour);

function addHour(week, day) {
    if (daysOfWeek[week][day] < 24) {
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
    week1Total = daysOfWeek["weekOne"]["Monday"] + daysOfWeek["weekOne"]["Tuesday"] + daysOfWeek["weekOne"]["Wednesday"] + daysOfWeek["weekOne"]["Thursday"] + daysOfWeek["weekOne"]["Friday"];
    week2Total = daysOfWeek["weekTwo"]["Monday"] + daysOfWeek["weekTwo"]["Tuesday"] + daysOfWeek["weekTwo"]["Wednesday"] + daysOfWeek["weekTwo"]["Thursday"] + daysOfWeek["weekTwo"]["Friday"];
}

function updateTimecard() { // This function displays the current hour.
    addDailyHours();
    document.querySelector('#one').innerHTML = `<h3>${daysOfWeek["weekOne"]["Monday"]}</h3>`
    document.querySelector('#two').innerHTML = `<h3>${daysOfWeek["weekOne"]["Tuesday"]}</h3>`
    document.querySelector('#three').innerHTML = `<h3>${daysOfWeek["weekOne"]["Wednesday"]}</h3>`
    document.querySelector('#four').innerHTML = `<h3>${daysOfWeek["weekOne"]["Thursday"]}</h3>`
    document.querySelector('#five').innerHTML = `<h3>${daysOfWeek["weekOne"]["Friday"]}</h3>`
    document.querySelector('#six').innerHTML = `<h3>${daysOfWeek["weekTwo"]["Monday"]}</h3>`
    document.querySelector('#seven').innerHTML = `<h3>${daysOfWeek["weekTwo"]["Tuesday"]}</h3>`
    document.querySelector('#eight').innerHTML = `<h3>${daysOfWeek["weekTwo"]["Wednesday"]}</h3>`
    document.querySelector('#nine').innerHTML = `<h3>${daysOfWeek["weekTwo"]["Thursday"]}</h3>`
    document.querySelector('#ten').innerHTML = `<h3>${daysOfWeek["weekTwo"]["Friday"]}</h3>`
    document.querySelector('#total').innerHTML = `<h3>${week1Total}</h3>`
    document.querySelector('#total2').innerHTML = `<h3>${week2Total}</h3>`
    totalHoursPrint = week1Total + week2Total;
    if (totalHoursPrint != totalHours) {
        document.querySelector('#update').innerHTML = `<p class="m-0 pb-1 text-danger"><b>Not updated!</b></p>`
    } else {
        document.querySelector('#update').innerHTML = `<p class="m-0 pb-1 text-success"><b>Up to date!</b></h4>`
    }
}
function computeSalary() { // Multiply salary amount by week total to get grand total.
    totalHours = totalHoursPrint;
    grandTotal = hourlyWage * totalHours;
    document.querySelector('#salary').innerHTML = `<h2>$${hourlyWage}.00/hr x ${totalHoursPrint} = $${grandTotal}.00</h2>`
    document.querySelector('#update').innerHTML = `<p class="m-0 pb-1 text-success"><b>Up to date!</b></h4>`

}

updateTimecard();


console.log("Finish");