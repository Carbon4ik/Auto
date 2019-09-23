const score = document.querySelector('.score');
const game = document.querySelector('.game');
const start = document.querySelector('.start');
const gameAREA = document.querySelector('.gameAREA');
const car = document.createElement('div');

car.classList.add('car');
 
  start.addEventListener('click',startGame);
    document.addEventListener('keydown',startRun);
    document.addEventListener('keyup',stopRun);

const keys = {
  ArrowRight: false,
  ArrowUp: false,
  Arrowleft: false,
  ArrowDown: false
};

const setting = {
  
  start: false,
  score: 0,
  speed: 3
};
      
      function startGame(){
  start.classList.add('hide');
        setting.start = true;
        gameAREA.appendChild(car);
        requestAnimationFrame(PlayGame);
        
}

  function PlayGame() {
    console.log('PlayGame');
    if (setting.start){
    requestAnimationFrame(PlayGame);
  }
}
      function startRun(event){
        event.preventDefault();
        console.log(event.key); 
        keys[event.key] = true;
      }
      function stopRun(event){
        console.log('stop');
        console.log(event.key);
        keys[event.key] = false;
      }                 