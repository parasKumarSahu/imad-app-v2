console.log('Loaded!');

//change the text of index.html
var element = document.getElementById('main-text');

element.innerHTML = 'Click on me';

//to move the daragon image
var img = document.getElementById('dragon');

img.onclick = function () {
    img.style.marginLeft = '100px';
};