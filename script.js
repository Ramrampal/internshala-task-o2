const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Save user's preference in local storage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});

// Check if user has previously selected dark mode
const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
if (isDarkMode) {
  document.body.classList.add('dark-mode');
}
