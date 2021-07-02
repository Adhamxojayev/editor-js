textarea.onkeyup = () => {
    try {
        view.textContent = eval(textarea.value)
    }catch(error){
        view.textContent = error
        view.style.color = 'red'
    }
}