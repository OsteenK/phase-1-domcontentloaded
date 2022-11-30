// Your code goes here
document.addEventListener("DOMContentLoaded", function(){ 
 var p = document.querySelector("p")
 p.textContent = "JavaScript is so cool. It lets me add text to my page programmatically."

  const event = document.createEvent( 'Event' );
    event.initEvent( 'DOMContentLoaded', true, true );
    window.document.dispatchEvent( event )
    var p = document.querySelector("p")
   p.textContent = "This is really cool!"

})