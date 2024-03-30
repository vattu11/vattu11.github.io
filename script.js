

function ThemeToggle()
{

    var body = document.body;
    var icon = document.querySelector('.btn');
    
    // Check the current state before it's toggled
    var isDarkMode = body.classList.contains('dark-mode');

    // Now toggle the class
    body.classList.toggle('dark-mode');

    // Set the icon based on the previous state
    if (isDarkMode) {
        icon.textContent = 'Light mode';
    } else {
        icon.textContent = 'Dark mode';
    }

}
