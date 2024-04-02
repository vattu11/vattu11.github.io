function ThemeToggle()
{

    var body = document.body;

    
    // Check the current state before it's toggled
    var isDarkMode = body.classList.contains('dark-mode');

    // Now toggle the class
    body.classList.toggle('dark-mode');


}
