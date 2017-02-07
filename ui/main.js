console.log('Loaded!');

//change the text of index.html
var element = document.getElementById('main-text');

element.innerHTML = 'Click on me';

//to move the daragon image
var img = document.getElementById('dragon');

marginLeft=0;

function moveRight () {
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft + 'px'
};

img.onclick = function () {
    var interval = setInterval(moveRight,100);
   
};