const form = document.querySelector('#formContact')
const input_firstName = document.querySelector('.firstName')
const input_lastName = document.querySelector('.lastName')
const input_email = document.querySelector('.email')
const textarea_comment = document.querySelector('.comment')

let log_text = document.querySelector('.log_text')


form.addEventListener('submit', form_contact)

function form_contact(event){

    event.preventDefault()
    input_firstName.value === '' ? input_firstName.style = 'border-color: red' : input_firstName.style = ''
    input_lastName.value === '' ? input_lastName.style = 'border-color: red' : input_lastName.style = ''
    input_email.value === '' ? input_email.style = 'border-color: red' : input_email.style = ''
    textarea_comment.value === '' ? textarea_comment.style = 'border-color: red' : textarea_comment.style = ''

    if(input_firstName.value > '' && input_lastName.value > '' && input_email.value > '' && textarea_comment.value > ''){
        console.log('if is true')
        let validateForms = function(selector, rules, successModal, yaGoal) {
            new window.JustValidate(selector, {
                rules: rules,
                submitHandler: function(form) {
                    let formData = new FormData(form);
        
                    let xhr = new XMLHttpRequest();
        
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                console.log('Отправлено');
                            }
                        }
                    }
        
                    xhr.open('POST', 'php/mail.php', true);
                    xhr.send(formData);
        
                    form.reset();
                }
            });
        }
        
        validateForms('#formContact', { email: {required: true, email: true}, firstName: {required: true} }, '.thanks-popup', 'send goal');

        
        log_text.style = 'color: #18e618; font-weight: 600'
        log_text.textContent = 'Заявка успешно отправлена!'

    }
}