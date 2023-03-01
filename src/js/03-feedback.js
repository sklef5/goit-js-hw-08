import throttle from "lodash.throttle"

const formInput= document.querySelector('.feedback-form')
const STORAGE_KEY ="feedback-form-state"
const storage = localStorage.getItem(STORAGE_KEY)

formInput.addEventListener('input', throttle(onFormInput, 500))
formInput.addEventListener('submit', onFormSubmit)


if(storage){
    const {email, message} = JSON.parse(storage)
    console.log(storage)
    formInput.email.value = email,
    formInput.message.value  = message
} else {
    formInput.email.value ="";
    formInput.message.value  = "";
    }

function onFormInput(evt){
    const formData ={
        email: formInput.elements.email.value,
        message :formInput.elements.message.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(evt){
    evt.preventDefault()
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}