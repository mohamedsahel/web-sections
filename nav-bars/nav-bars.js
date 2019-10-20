
let sm = 300;
let md = 600;
let lg = 900;
let box = document.querySelector('.box');
let sceneArea = document.querySelector('.scene-area');

if(window.innerWidth <= sm){
    sceneArea.classList.add('sm')
}else if(window.innerWidth > sm && window.innerWidth <= md){
    sceneArea.classList.add('md')
}else if(window.innerWidth > sm){
    sceneArea.classList.add('lg')
}


// Check responsivenes

let resp_btns = document.querySelectorAll('.box .respv');
resp_btns.forEach(resp_btn => {
    resp_btn.addEventListener('click', () => {
        let towidth = resp_btn.getAttribute('data-width')
        let classList = resp_btn.parentElement.parentElement.querySelector('.scene-area').classList;
        console.log(classList)
        classList.remove(classList[1]);
        classList.add(towidth)
    })
})




let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    document.querySelector('.nav-1 ul').classList.toggle('active');
})