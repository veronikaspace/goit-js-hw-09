const formData = {
    email: '',
    message: ''
};

const form = document.querySelector('.feedback-form');

const saveData = localStorage.getItem("feedback-form-state");

if (saveData) {
    const parsedData = JSON.parse(saveData);
    if (parsedData.email) {
        form.elements.email.value = parsedData.email;
        formData.email = parsedData.email;
    }
    if (parsedData.message) {
        form.elements.message.value = parsedData.message;
        formData.message = parsedData.message;
    }
}

form.addEventListener('input', function (event) {
    const target = event.target;
    if (target.name === 'email' || target.name === 'message') {
        formData[target.name] = target.value.trim();
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem("feedback-form-state");
    formData.email = '';
    formData.message = '';
    form.reset();
});