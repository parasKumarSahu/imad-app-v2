console.log('Loaded!');

//to move the image
var img = document.getElementById('dragon');

marginLeft=0;

function moveRight () {
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function () {
    var interval = setInterval(moveRight,50);
   
};

/*Counter button witout changing counter endpoint
var button = document.getElementById('counter');
var counter=0;

button.onclick = function () {
    counter=counter+1;
    var span =document.getElementById('count');
    span.innerHTML = counter.toString();
};*/

//Counter button by changing counter endpoint
var button = document.getElementById('counter');
var counter=0;

button.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and show it in a variable
    request.onreadyStateChange = function () {
       if(request.readyState === XMLHttpRequest.DONE){
           if(request.status === 200){
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       }
    };
    //making the rquest declaration
    request.span('GET',"http://paraskumarsahu.imad.hasura-app.io/counter",true);
    request.span(null);
};