let bike = document.querySelector('#bike');
// let step1 = document.querySelector('.step-1');
// let step2 = document.querySelector('.step-2');
// let step3 = document.querySelector('.step-3');
// let step4 = document.querySelector('.step-4');
let moveBy = 10;
let rotateLeft = -15;
let rotateTop = 0;
let rotateRight = 15;

window.addEventListener('load', () => {
    bike.style.position = 'absolute';
    bike.style.left = '350px';
    bike.style.top = '620px';
});
// window.addEventListener('load', () => {
//     step1.style.position = 'absolute';
//     step1.style.left = '50%';
//     step1.style.bottom = '3%';
// });
// window.addEventListener('load', () => {
//     step2.style.position = 'absolute';
//     step2.style.left = '50%';
//     step2.style.bottom = '23%';
// });
// window.addEventListener('load', () => {
//     step3.style.position = 'absolute';
//     step3.style.left = '50%';
//     step3.style.bottom = '38%';
// });
// window.addEventListener('load', () => {
//     step4.style.position = 'absolute';
//     step4.style.left = '50%';
//     step4.style.top = '48%';
// });


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            bike.style.left = parseInt(bike.style.left) - moveBy + 'px';
            bike.style.transform = `rotate(${rotateLeft}deg)`
            break;
        case 'ArrowRight':
            bike.style.left = parseInt(bike.style.left) + moveBy + 'px';
            bike.style.transform = `rotate(${rotateRight}deg)`
            break;
        case 'ArrowUp':
            // step1.style.top = parseInt(step1.style.bottom) - moveBy + 'px';
            // step2.style.top = parseInt(step2.style.bottom) - moveBy + 'px';
            // step3.style.top = parseInt(step3.style.bottom) - moveBy + 'px';
            // step4.style.top = parseInt(step4.style.top) - moveBy + 'px';
            bike.style.transform = `rotate(${rotateTop}deg)`
            break;
        case 'ArrowDown':
            // step1.style.top = parseInt(step1.style.bottom) + moveBy + 'px';
            // step2.style.top = parseInt(step2.style.bottom) + moveBy + 'px';
            // step3.style.top = parseInt(step3.style.bottom) + moveBy + 'px';
            // step4.style.top = parseInt(step4.style.top) + moveBy + 'px';
            bike.style.transform = `rotate(${rotateTop}deg)`
            break;
    }
})