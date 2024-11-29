const toggleDarkModeCheckbox = document.getElementById('toggle-dark-mode');
const saveButton = document.getElementById('save-settings');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    if (darkModeEnabled) {
        body.classList.add('dark-mode');
        toggleDarkModeCheckbox.checked = true;
    }
});

toggleDarkModeCheckbox.addEventListener('change', () => {
    body.classList.toggle('dark-mode', toggleDarkModeCheckbox.checked);

});

saveButton.addEventListener('click', () => {
    const isDarkMode = toggleDarkModeCheckbox.checked;
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    alert('Configurações salvas!');
});