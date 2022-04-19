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