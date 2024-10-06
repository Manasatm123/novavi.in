const follower = document.getElementById('follow');
let mouseX = 0, mouseY = 0;
let delay = 10;
let timer;

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX - 25; 
    mouseY = e.pageY - 25;

    
    clearTimeout(timer);

    
    timer = setTimeout(() => {
        follower.style.left = `${mouseX}px`;
        follower.style.top = `${mouseY}px`;
    }, delay);
});
