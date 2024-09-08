var _a;
// Function to save content to localStorage
function saveContent() {
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (el) {
        localStorage.setItem(el.id, el.innerHTML);
    });
}
// Restore content from localStorage
function restoreContent() {
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (el) {
        var savedContent = localStorage.getItem(el.id);
        if (savedContent) {
            el.innerHTML = savedContent;
        }
    });
}
// Event listener for the Save button
(_a = document.getElementById('saveBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', saveContent);
// Call restoreContent on page load to initialize content
document.addEventListener('DOMContentLoaded', restoreContent);
document.addEventListener('DOMContentLoaded', function () {
    // Select the theme switcher button
    var themeSwitcher = document.getElementById('themeSwitcher');
    // Check if the button exists
    if (themeSwitcher) {
        // Add an event listener to toggle the theme
        themeSwitcher.addEventListener('click', function () {
            // Toggle the 'theme-dark' class on the body
            document.body.classList.toggle('theme-dark');
        });
    }
});
