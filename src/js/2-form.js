const formData = {
    email: '',
    message: ''
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', function (event) {
    const target = event.target;
    if (target.name === 'email' || target.name === 'message') {
        formData[target.name] = target.value.trim();
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    console.log(formData);
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    localStorage.removeItem("feedback-form-state");
    formData.email = '';
    formData.message = '';
    form.reset();
});