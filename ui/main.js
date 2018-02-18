//Counter 
var button = document.getElementById("counter");

button.onclick = function() {
  // Make a request to the counter endpoinnt
  var request = new XMLHttpRequest();
  // Capture the response and store it in a variable
  request.onreadystatechange = function() {
    if( request.readyState === XMLHttpRequest.DONE ) {
        //Take some action
        if (request.status == 200)
        {
            var counter = request.responseText;
             var span = document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    }  
    // Not done yet
  };
    // Make the Request 
    request.open('GET','http://nikhilkamat2.imad.hasura-app.io/counter',true);
    request.send(null);
};
var nameInput = document.getElementById("name");
//submit name
submit.onclick = function () {
  //make a request to the server and send the name
  var request = new XMLHttpRequest();
  // Capture the response and store it in a variable
  request.onreadystatechange = function() {
    if( request.readyState === XMLHttpRequest.DONE ) {
        //Take some action
        if (request.status == 200)
        {
              var names = request.responseText;
              names = JSON.parse(names);
              var list = '';
              for (var i=0; i < names.length; i++) {
                    list += '<li>'+names[i]+'</li>';
                }
              var ul = document.getElementById("namelist");
              ul.innerHTML = list;
        }
    }  
    // Not done yet
  };
    var nameInput = document.getElementById("name");
    var name = nameInput.value;

    // Make the Request 
    request.open('GET','http://nikhilkamat2.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
  //Capture a list of names and render it as a list

};