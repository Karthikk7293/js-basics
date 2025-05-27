const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.getElementById('name-input')
    const email = document.getElementById('email-input')
    const phoneNumber = document.getElementById('phone-input')
    const password = document.getElementById('password-input')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/;
    const passwordRegex = /^\d{8,12}$/;
    let errorFlag = false;

    if (!name.value) {
        name.style.borderColor = 'red'
        name.style.borderWidth = '2px'
        alert('please enter you name')
        errorFlag = true

    } else {
        name.style.borderColor = 'transparent'
    }

    if (!email.value) {
        email.style.borderColor = 'red'
        email.style.borderWidth = '2px'
        alert('please enter you email')
        errorFlag = true

    } else {
        if (emailRegex.test(email.value)) {
            email.style.borderColor = 'transparent'
        } else {
            email.style.borderColor = 'red'
            email.style.borderWidth = '2px'
            alert('please enter a valid email')
            errorFlag = true

        }
    }

    if (!phoneNumber.value) {
        phoneNumber.style.borderColor = 'red'
        phoneNumber.style.borderWidth = '2px'
        alert('please enter your Phone number')
        errorFlag = true
    } else {
        if (phoneRegex.test(phoneNumber.value)) {
            phoneNumber.style.borderColor = 'transparent'
        } else {
            phoneNumber.style.borderColor = 'red'
            phoneNumber.style.borderWidth = '2px'
            alert('please enter a valid phone number')
            errorFlag = true
        }
    }

    if (!password.value) {
        password.style.borderColor = 'red'
        password.style.borderWidth = '2px'
        alert('please enter your password ')
        errorFlag = true
    } else {
        if (passwordRegex.test(password.value)) {
            password.style.borderColor = 'transparent'
        } else {
            password.style.borderColor = 'red'
            password.style.borderWidth = '2px'
            alert('password must contain morethan 8 digits')
            errorFlag = true
        }
    }

    if (!errorFlag) {
        alert("Registration completed!")
    }








})
