function init() {

    var timerId;
    var seconds = 0;

    //Get buttons with selector
    var resetBtn = document.getElementById('reset');
    var startBtn = document.getElementById('start');
    var pauseBtn = document.getElementById('pause');

    //Add listeners
    resetBtn.addEventListener('click', function(){
        //Stop the timer
        clearInterval(timerId);
        //Clear the secs counter
        seconds = 0;
        document.getElementById('timer').innerHTML = 'Stop Watch';
    });

    startBtn.addEventListener('click', function(){
        //Call increment timer every 1 sec (1000 milisec)
        timerId = setInterval(updateTime, 1000);

    });

    pauseBtn.addEventListener('click', function(){
        //Stop the secs counter
        clearInterval(timerId);
    });

    function updateTime() {
        seconds++;
        document.getElementById('timer').innerHTML= 'Time elapsed: ' + seconds;
    }
}

init();
