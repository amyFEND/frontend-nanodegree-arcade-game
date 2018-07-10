const player = new Player();

const allEnemies = [...Array(3)].map((_,i)=> new Enemy(0,i+1));

const endMsg = document.querySelector('.endMessage');

let time = 60;
let clockID;
let timerOff = true; // sets timer to start in the off position.

let score = 0;

let crashes = []; //holds number of collisions

$('.popReturn').click(togglePop); // "closes" modal




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {

    var allowedKeys = {
        37: 'left',     // left arrow
        38: 'up',       // up arrow
        39: 'right',    // right arrow
        40: 'down',     // down arrow
        65: 'left',     // A
        87: 'up',       // W
        68: 'right',    // D
        83: 'down'      // S
    };

    player.handleInput(allowedKeys[e.keyCode]);

    if (allowedKeys[e.keyCode]) {
      if (timerOff) {
        startDaClock();
        timerOff = false;
      }
    }
});


function startGame () {
    const keyMove = event.target;
}

/*
 * Function that sets up timer.
 */
 function startDaClock () {
   clockId = setInterval(() => {
       let minutes = Math.floor(time / 60);
       let seconds = (time % 60);
       time--;

       if (time < 0) {
         endMsg.innerHTML = 'Time\'s up!';
         togglePop();
         stopDaClock();
       } if (seconds < 10) {
         clock.innerHTML = `${minutes}:0${seconds}`;
         popClock.innerHTML = `${minutes}:0${seconds}`;
       } else {
         clock.innerHTML = `${minutes}:${seconds}`;
         popClock.innerHTML = `${minutes}:${seconds}`;
       }
   }, 1000);

  const clock = document.querySelector('.clock');

  const popClock = document.querySelector('.popClock');
 }

 // stops timer
function stopDaClock () {
   clearInterval(clockId);

   return stopDaClock;
}

function addScore () {
  const showScore = document.querySelector('.score');
  showScore.innerHTML = score;

  const showPopScore = document.querySelector('.popScore')
  showPopScore.innerHTML = score;
}

// counts number of collisions and removes heart with each
function countCrash () {
  if (player.isOutofBoundsY && !this.moving && !this.win) {
    player.x = 2;
    player.y = 5;
  } else {
    crashes.push(1);
  }

  const delHeart1 = document.querySelector('.life1');
  const delHeart2 = document.querySelector('.life2');
  const delHeart3 = document.querySelector('.life3');
  const delPopHeart1 = document.querySelector('.popLife1');
  const delPopHeart2 = document.querySelector('.popLife2');
  const delPopHeart3 = document.querySelector('.popLife3');

  if (crashes.length === 3){
      delHeart3.classList.add('hide');
      delPopHeart3.classList.add('hide');
      endMsg.innerHTML = 'No more lives!';
      document.querySelector('.popLives').innerHTML = 'Lives Remaining: none';
      stopDaClock();
      togglePop();
  } else if (crashes.length === 2) {
      delHeart2.classList.add('hide');
      delPopHeart2.classList.add('hide');
  } else if (crashes.length === 1) {
      delHeart1.classList.add('hide');
      delPopHeart1.classList.add('hide');
  }
}

/*
 * Function toggles winning pop-up message
 */
function togglePop () {
  const modal = document.querySelector('.modal');

  modal.classList.toggle('hidden');


  // return togglePop;
}
