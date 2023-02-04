const start = document.querySelector(".btnStart");
const pause = document.querySelector(".btnPause");
const clear = document.querySelector(".btnClear");
let timer = document.querySelector(".main");
let timePlay;

const play = (segundos) => {

  index = new Date(segundos * 1000);
  return index.toLocaleTimeString('pt-BR',{
    hour12:false,
    timeZone: 'UTC'
  });

}
let segundos =0;
const playTimer=()=>{

   timePlay = setInterval(() => {
    segundos++;
    timer.innerText = play(segundos)
  }, 1000);

}
const stop = () => {


};
const clearTimer = () => {

};

start.addEventListener("click", function () {
  play();
  clearInterval(timePlay)
  playTimer();
  
  console.log("clickedStart");
});
pause.addEventListener("click", function () {
  stop();
  clearInterval(timePlay) 
  console.log("clickedPause");
});
clear.addEventListener("click", function () {
  clearTimer();
  clearInterval(timePlay)
  timer.innerText = '00:00:00 '
  console.log("clikedTimer");
});
