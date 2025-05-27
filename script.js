const clickMe = document.getElementById('click-me')

console.log(clickMe);
const container = document.getElementById('container')

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/

console.log(container);
clickMe.addEventListener('click', (e) => {
    e.preventDefault()

    let para = document.getElementById('error-value')

    if (!para) {
        para = document.createElement('p')
        para.setAttribute('id', 'error-value')
    }

    const input = document.getElementById('input')
    const errorContainer = document.getElementById('error-content')

    input.style.borderColor = 'red'
    para.style.color = 'red'

    if (!input.value) {
        para.innerHTML = 'Please enter your email';
    } else if (!emailRegex.test(input.value)) {
        para.innerHTML = 'Please enter a valid email';
    } else {
        input.style.borderColor = 'green'
        para.style.color = 'green'
        para.innerHTML = 'email validation successfull!';
    }
    console.log(errorContainer);

    console.log(para);

    errorContainer.appendChild(para)

    setTimeout(() => {
        para.remove()
    }, 1000);



})
