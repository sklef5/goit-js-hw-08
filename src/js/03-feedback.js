import throttle from "lodash.throttle"

const formInput= document.querySelector('.feedback-form')
let formData = {}

formInput.addEventListener('input', throttle(onFormInput, 500))

function onFormInput(evt){
    formData[evt.target.name] = evt.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}


if(localStorage.getItem("feedback-form-state")){
        const {email, message} = JSON.parse(localStorage.getItem("feedback-form-state"))
        formInput.email.value = email,
        formInput.message.value  = message,
        formData.email = email,
        formData.message= message
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(evt){
    evt.preventDefault()
    console.log(formData)
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
    formData = {}
}