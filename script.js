function ThemeToggle()
{

    var body = document.body;

    // Check the current state before it's toggled
    var isDarkMode = body.classList.contains('dark-mode');

    // Now toggle the class
    body.classList.toggle('dark-mode');


}


window.addEventListener('load', function() {
    document.getElementById('toggle2').checked = false;
  });


  document.getElementById('scrollToTopBar').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('topBar').scrollIntoView({ behavior: 'smooth' });
});