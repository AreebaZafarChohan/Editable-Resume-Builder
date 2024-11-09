var _a, _b, _c, _d, _e;
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
// change image functionality
var profileImage = document.getElementById('profileImage');
var imageUpload = document.getElementById('imageUpload');
profileImage.addEventListener('click', function () {
    imageUpload.click(); // Opens the file explorer
});
imageUpload.addEventListener('change', function () {
    var file = imageUpload.files ? imageUpload.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && typeof e.target.result === 'string') {
                profileImage.src = e.target.result; // Set new image source
            }
        };
        reader.readAsDataURL(file);
    }
});
// Add skill, education, experience, and project items dynamically
function addItem(containerId, contentHTML) {
    var container = document.getElementById(containerId);
    if (container) {
        var newItem_1 = document.createElement("div");
        newItem_1.className = "dynamic-item";
        newItem_1.innerHTML = contentHTML;
        var removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "-";
        removeBtn.addEventListener("click", function () { return container.removeChild(newItem_1); });
        newItem_1.appendChild(removeBtn);
        container.appendChild(newItem_1);
    }
}
// Content templates for each section
var skillTemplate = "<p contenteditable=\"true\">\u2022 New Skill</p>";
var educationTemplate = "\n  <h3 contenteditable=\"true\">\u2023 New Education</h3>\n  <p contenteditable=\"true\">\u2022 Institution Name</p>\n";
var experienceTemplate = "\n  <h3 contenteditable=\"true\">\u2023 New Experience</h3>\n  <p contenteditable=\"true\">\u2022 Company Name</p>\n  <p contenteditable=\"true\">\u2022 Description of your role</p>\n";
var projectTemplate = "\n  <h3 contenteditable=\"true\">\u2023 New Project</h3>\n  <p contenteditable=\"true\">\u2022 Description of the project</p>\n";
// Event listeners for adding items
(_b = document.getElementById("addSkill")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return addItem("skillContainer", skillTemplate); });
(_c = document.getElementById("addEducation")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return addItem("educationContainer", educationTemplate); });
(_d = document.getElementById("addExperience")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { return addItem("experienceContainer", experienceTemplate); });
(_e = document.getElementById("addProject")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () { return addItem("projectContainer", projectTemplate); });
