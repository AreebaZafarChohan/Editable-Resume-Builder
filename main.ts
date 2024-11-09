// Selecting the hamburger menu, navbar, and nav links
const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
const navMenu = document.querySelector('nav ul') as HTMLElement | null;

// Toggle class on click for responsive navigation
hamburger?.addEventListener('click', () => {
  navMenu?.classList.toggle('active');
}); 

// Function to save content to localStorage
function saveContent() {
  const editableElements = document.querySelectorAll('[contenteditable="true"]');
  editableElements.forEach(el => {
      localStorage.setItem(el.id, el.innerHTML);
  });
}

// Restore content from localStorage
function restoreContent() {
  const editableElements = document.querySelectorAll('[contenteditable="true"]');
  editableElements.forEach(el => {
      const savedContent = localStorage.getItem(el.id);
      if (savedContent) {
          el.innerHTML = savedContent;
      }
  });
}

// Event listener for the Save button
document.getElementById('saveBtn')?.addEventListener('click', saveContent);

// Call restoreContent on page load to initialize content
document.addEventListener('DOMContentLoaded', restoreContent);

document.addEventListener('DOMContentLoaded', () => {
  // Select the theme switcher button
  const themeSwitcher = document.getElementById('themeSwitcher') as HTMLButtonElement;

  // Check if the button exists
  if (themeSwitcher) {
      // Add an event listener to toggle the theme
      themeSwitcher.addEventListener('click', () => {
          // Toggle the 'theme-dark' class on the body
          document.body.classList.toggle('theme-dark');
      });
  }
});

// change image functionality
const profileImage = document.getElementById('profileImage') as HTMLImageElement;
const imageUpload = document.getElementById('imageUpload') as HTMLInputElement;

profileImage.addEventListener('click', () => {
    imageUpload.click();  // Opens the file explorer
});

imageUpload.addEventListener('change', () => {
    const file = imageUpload.files ? imageUpload.files[0] : null;
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target && typeof e.target.result === 'string') {
                profileImage.src = e.target.result;  // Set new image source
            }
        };
        reader.readAsDataURL(file);
    }
});

// Add skill, education, experience, and project items dynamically
function addItem(containerId: string, contentHTML: string): void {
  const container = document.getElementById(containerId);
  if (container) {
      const newItem = document.createElement("div");
      newItem.className = "dynamic-item";
      newItem.innerHTML = contentHTML;

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.textContent = "-";
      removeBtn.addEventListener("click", () => container.removeChild(newItem));

      newItem.appendChild(removeBtn);
      container.appendChild(newItem);
  }
}

// Content templates for each section
const skillTemplate = `<p contenteditable="true">• New Skill</p>`;
const educationTemplate = `
  <h3 contenteditable="true">‣ New Education</h3>
  <p contenteditable="true">• Institution Name</p>
`;
const experienceTemplate = `
  <h3 contenteditable="true">‣ New Experience</h3>
  <p contenteditable="true">• Company Name</p>
  <p contenteditable="true">• Description of your role</p>
`;
const projectTemplate = `
  <h3 contenteditable="true">‣ New Project</h3>
  <p contenteditable="true">• Description of the project</p>
`;

// Event listeners for adding items
document.getElementById("addSkill")?.addEventListener("click", () => addItem("skillContainer", skillTemplate));
document.getElementById("addEducation")?.addEventListener("click", () => addItem("educationContainer", educationTemplate));
document.getElementById("addExperience")?.addEventListener("click", () => addItem("experienceContainer", experienceTemplate));
document.getElementById("addProject")?.addEventListener("click", () => addItem("projectContainer", projectTemplate));
