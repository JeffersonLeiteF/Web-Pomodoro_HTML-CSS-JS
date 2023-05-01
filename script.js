// Variáveis

let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = '00'

// Display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

//Start Timer
function start() {
    //Mudar o botão
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // Mudar o tempo
    seconds = 59;

    let workMinutes = workTime -1;
    let breakMinutes = breakTime -1;

    breakCount = 0;

    //countdown
    let timerFunction = () => {
        //mudar o display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // começar
        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0) {
                    // Começar Break
                    workMinutes = breakMinutes;
                    breakCount++

                    //Mudar o painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else {
                    //Continuar Work
                    workMinutes = workTime;
                    breakCount++

                    //Mudar o painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                    
                }
            }
            seconds = 59;
        }
    }
    //Start Countdown
    setInterval(timerFunction, 1000); //1000= 1s
}