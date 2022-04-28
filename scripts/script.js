const dark = document.getElementById('dark')
const light = document.getElementById('light')

function toggleDark(){
    dark.classList.add('d-none')
    light.classList.remove('d-none')
    document.body.style.background= "#533B34"
    document.body.style.color = "#FFF5EC"
}

dark.addEventListener('click', toggleDark)

function toggleLight(){
    light.classList.add('d-none')
    dark.classList.remove('d-none')
    document.body.style.background= "#FFF5EC"
    document.body.style.color = "#533B34"
}
light.addEventListener('click', toggleLight)


topArrow= document.getElementById("topArrow");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topArrow.style.display = "block";
    } else {
      topArrow.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  }); 
