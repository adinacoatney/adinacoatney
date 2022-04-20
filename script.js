const dark = document.getElementById('dark')
const light = document.getElementById('light')

function toggleDark(){
    dark.classList.add('d-none')
    light.classList.remove('d-none')
    document.getElementById('bodyBackground').style.backgroundColor = "#533B34"
    document.body.style.background= "#533B34"
    document.body.style.color = "#FFF5EC"
}

dark.addEventListener('click', toggleDark)

function toggleLight(){
    light.classList.add('d-none')
    dark.classList.remove('d-none')
    document.getElementById('bodyBackground').style.backgroundColor = "#FFF5EC"
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