let btnForest = document.querySelector('.btn-forest');
let btnDesert = document.querySelector('.btn-desert');
let btnLake =  document.querySelector('.btn-lake');
let btnMountain = document.querySelector('.btn-mountain');
let btnSea = document.querySelector('.btn-sea');


btnForest.addEventListener('click', function() {
gtag('event', 'зайшов на сторінку Ліс', {
});
});
btnDesert.addEventListener('click', function() {
gtag('event', 'зайшов на сторінку Пустеля', {
});
});
btnLake.addEventListener('click', function() {
gtag('event', 'зайшов на сторінку Озеро', {
});
});
btnMountain.addEventListener('click', function() {
gtag('event', 'зайшов на сторінку Гори', {
});
});
btnSea.addEventListener('click', function() {
gtag('event', 'зайшов на сторінку Море', {
});
});