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
