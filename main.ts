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
