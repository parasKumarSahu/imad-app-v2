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

button.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and show it in a variable
    request.onreadystatechange = function () {
       if(request.readyState === XMLHttpRequest.DONE){
           if(request.status === 200){
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       }
    };
    //making the rquest declaration
    request.open('GET',"http://paraskumarsahu.imad.hasura-app.io/counter",true);
    request.send(null);
};

//submit name
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
        //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and show it in a variable
    request.onreadystatechange = function () {
       if(request.readyState === XMLHttpRequest.DONE){
           if(request.status === 200){
                //make a reqest to server and send name
                //capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = "paras";
                for(var i=0; i<names.length; i++) {
                    list +="<li>"+names[i]+"</li>";
                }
                var ul = document.getElementById('nameList');
                ul.innerHTML = list;
           }
       }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;

    //making the rquest declaration
    request.open('GET',"http://paraskumarsahu.imad.hasura-app.io/submit-name?name="+name, true);
    request.send(null);

   
};