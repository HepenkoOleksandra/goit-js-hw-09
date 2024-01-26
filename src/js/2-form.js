const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// Додавання слухача події input на форму
form.addEventListener('input', onFormInput);

// Отримуємо дані від користувача і зберігаємо їх у локальному сховищі
function onFormInput(e) {
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();

    const data = {
        email: email,
        message: message,
    }

    saveToLS(STORAGE_KEY, data)
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const email = e.target.elements.email.value.trim();
    const message = e.target.elements.message.value.trim();

    if (!email || !message) {
        alert('All form fields must be filled in');
        return;
    }

    const data = {
        email: email,
        message: message,
    }
console.log(data);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}

// Ф-ція для додавання даних до локального сховища
function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

// Ф-ція для отримання і перевірки даних з локального сховища 
function loadFromLS(key) {
    const data = localStorage.getItem(key);

    try {
        const result = JSON.parse(data);
        return result;
    } catch {
        return data;
    }
}

function restoreData() {
    const data = loadFromLS(STORAGE_KEY) || {};

    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
}

restoreData();
