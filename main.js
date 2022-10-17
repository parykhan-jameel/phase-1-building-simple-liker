// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorSection = document.getElementById('modal');
errorSection.className="hidden";
document.addEventListener('DOMContentLoaded',()=>{

  const heart = document.querySelectorAll('.like-glyph');

  heart.forEach(element => {
    element.addEventListener('click',()=>{
      if(element.innerText === FULL_HEART){
        element.innerText = EMPTY_HEART;
        element.className="";
      }
      else{
        mimicServerCall()
        .then(response => {
          element.className="activated-heart";
          element.innerText = FULL_HEART;
        })
        .catch(error => {
          errorSection.className = "";
          const errorHandler = document.getElementById('modal-message');
          errorHandler.innerText = error;
          setTimeout(()=>{
            errorSection.className="hidden";
          }, 3000);
        })
      }

    })
  });
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
