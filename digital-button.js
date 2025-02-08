let intervalId;
const shoot = document.getElementById('shoot');
const left = document.getElementById('left');
const right = document.getElementById('right');
const up = document.getElementById('up');
const down = document.getElementById('down');

shoot.addEventListener('mousedown', () => {
    intervalId = setInterval(spaceKeyPressed, 100);
});

shoot.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

shoot.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
});



left.addEventListener('mousedown', () => {
    intervalId = setInterval(leftKeyPressed, 20);
});

left.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

left.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
});



right.addEventListener('mousedown', () => {
    intervalId = setInterval(rightKeyPressed, 20);
});

right.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

right.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
});



up.addEventListener('mousedown', () => {
    intervalId = setInterval(upKeyPressed, 20);
});

up.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

up.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
});



down.addEventListener('mousedown', () => {
    intervalId = setInterval(downKeyPressed, 20);
});

down.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

down.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
});





// touch screen

shoot.addEventListener('touchstart', (event) => {
    intervalId = setInterval(spaceKeyPressed, 100);
    event.preventDefault();
});

shoot.addEventListener('touchend', () => {
    clearInterval(intervalId);
});



left.addEventListener('touchstart', (event) => {
    intervalId = setInterval(leftKeyPressed, 20);
    event.preventDefault();
});

left.addEventListener('touchend', () => {
    clearInterval(intervalId);
});



right.addEventListener('touchstart', (event) => {
    intervalId = setInterval(rightKeyPressed, 20);
    event.preventDefault();
});

right.addEventListener('touchend', () => {
    clearInterval(intervalId);
});



up.addEventListener('touchstart', (event) => {
    intervalId = setInterval(upKeyPressed, 20);
    event.preventDefault();
});

up.addEventListener('touchend', () => {
    clearInterval(intervalId);
});



down.addEventListener('touchstart', (event) => {
    intervalId = setInterval(downKeyPressed, 20);
    event.preventDefault();
});

down.addEventListener('touchend', () => {
    clearInterval(intervalId);
});