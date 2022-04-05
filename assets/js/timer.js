
// Loggout timer
var startingMinutes = 10;
var time = startingMinutes * 60;

var countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);
function updateCountdown(){
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    time = time < 0 ? 0 : time;

   //signOut() function to sign out when time = 0
}


// Show current day for the balance
var currentTime = moment();
$('.currentDate').html(currentTime.format('MM/DD/YYYY'));


