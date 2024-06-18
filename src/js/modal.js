import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


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
    document.body.classList.add('no-scroll'); 
    setTimeout(() => overlay.classList.add('visible'), 10);
};

const hideModal = () => {
    overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
        document.body.classList.remove('no-scroll'); 
    }, 500);
};

const isFormValid = () => {
    let valid = true;
    let emailField = null;

    for (let element of form.elements) {
        if (element.type !== 'submit') {
            if (element.value.trim() === '') {
                iziToast.warning({
                    title: 'Caution',
                    message: 'Please fill all the fields.',
                           position: "center",
        messageColor: 'black',
        backgroundColor: '#CCEFE1',
        progressBarColor: '#009156',
                });
                valid = false;
                break;
            }
            if (element.type === 'email') {
                emailField = element;
            }
        }
    }

    if (valid && emailField && !emailPattern.test(emailField.value.trim())) {
        iziToast.warning({
            title: 'Caution',
            message: 'Please enter a correct email address.',
            position: "center",
        messageColor: 'black',
        backgroundColor: '#CCEFE1',
        progressBarColor: '#009156',
        });
        return false;
    }

    return valid;
};

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
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
        showModal(
            'Thank you for your interest in cooperation!',
            'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.'
        );
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: error.message,
                   position: "center",
        messageColor: 'black',
        backgroundColor: '#CCEFE1',
        progressBarColor: '#009156',
        });
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