const textarea = document.querySelector('#exampleFormControlTextarea1')
const email = document.querySelector('#exampleFormControlInput1')
const form = document.querySelector('#form')

form.addEventListener('submit', FORM)

function FORM(){
    email.value === '' ? email.style = "border: 3px solid red" : email.style = ""
    textarea.value === '' ? textarea.style = "border: 3px solid red" : textarea.style = ""
    if(email.value != '' && textarea.value != ''){
        alert("Вас зовут: " + email.value + "\n" + "Вы отправили текст: " + textarea.value) 
    }
    
}
