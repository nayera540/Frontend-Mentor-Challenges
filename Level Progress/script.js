var next_button = document.getElementById('next');
var prev_button = document.getElementById('prev');
var circles = document.querySelectorAll('.circle');
var progress = document.getElementById('progress');

var currentActive = 1;

next_button.addEventListener('click', ()=>{
    if(currentActive < (circles.length)){
        currentActive++;
        prev_button.disabled = false;
        circles[currentActive-1].classList.add('active');
        progress.style.width = (currentActive-1) * 33.33 + '%';
    }
    if(currentActive == circles.length){
        next_button.disabled = true;
    }
});

prev_button.addEventListener('click', ()=>{
    if(currentActive > 1){
        currentActive--;
        next_button.disabled = false;
        circles[currentActive].classList.remove('active');
        progress.style.width = (currentActive-1) * 33.33 + '%';
    }
    if(currentActive == 1){
        prev_button.disabled = true;
    }
});