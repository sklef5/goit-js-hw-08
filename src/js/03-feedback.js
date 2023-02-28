import throttle from "lodash.throttle"
const refs ={
    form: document.querySelector('.feedback-form'),
    email : document.querySelector('.feedback-form input '),
    message : document.querySelector('.feedback-form textarea'),
}


refs.form.addEventListener('submit', onFormSubmit)
refs.form.addEventListener('input', throttle(onFormInput, 500))


const formData = {}
getLocalStorage()

function onFormSubmit(evt){
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
}
function onFormInput(evt){

    formData[evt.target.name] = evt.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function getLocalStorage(){
    const mess = localStorage.getItem("feedback-form-state")
    if(mess){
        const text = JSON.parse(mess)
        refs.email.value = text.email,
        refs.message.textContent = text.message
}
}
