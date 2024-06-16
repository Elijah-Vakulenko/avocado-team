const submitBtn = document.querySelector('.form-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.btn-close');
const form = document.querySelector('.form');

const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const showModal = (title, message) => {
    const modalHeader = document.querySelector('.modal-header');
    const modalText = document.querySelector('.modal-text');
    modalHeader.textContent = title;
    modalText.textContent = message;
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);
};

const hideModal = () => {
    overlay.classList.remove('visible');
    setTimeout(() => overlay.classList.add('hidden'), 500);
};

const isFormValid = () => {
    let valid = true;
    let emailField = null;

    for (let element of form.elements) {
        if (element.type !== 'submit') {
            if (element.value.trim() === '') {
                valid = false;
                break;
            }
            if (element.type === 'email') {
                emailField = element;
            }
        }
    }

    if (valid && emailField && !emailPattern.test(emailField.value.trim())) {
        alert('Please enter correct e-mail');
        return false;
    }

    return valid;
};

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
        alert('Please fill all the fields');
        return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });


        const result = await response.json();

        form.reset();
        showModal(result.title, result.message);
    } catch (error) {
        alert(`There was an error submitting the form: ${error.message}. Please check your data and try again.`);
    }
});

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    hideModal();
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        hideModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hideModal();
    }
});
