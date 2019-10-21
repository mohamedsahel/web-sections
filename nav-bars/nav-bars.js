
let sm = 300;
let md = 600;
let lg = 900;
let box = document.querySelector('.box');
let sceneArea = document.querySelector('.scene-area');

/* apply right size */
function applySize() {
    let sceneClasses = sceneArea.classList;
    if(window.innerWidth <= sm){
        sceneClasses.remove(sceneClasses[1])
        sceneClasses.add('sm')
    }else if(window.innerWidth > sm && window.innerWidth <= md){
        sceneClasses.remove(sceneClasses[1])
        sceneClasses.add('md')
    }else if(window.innerWidth > sm){
        sceneClasses.remove(sceneClasses[1])
        sceneClasses.add('lg')
    }
}

applySize()
window.addEventListener('resize', applySize)



/* Check responsivenes */
let resp_btns = document.querySelectorAll('.box .respv');
resp_btns.forEach(resp_btn => {
    resp_btn.addEventListener('click', () => {
        let towidth = resp_btn.getAttribute('data-width')
        let classList = resp_btn.parentElement.parentElement.querySelector('.scene-area').classList;
        classList.remove(classList[1]);
        classList.add(towidth)
    })
})



/* toggle menu */
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    document.querySelector('.nav-1 ul').classList.toggle('active');
})