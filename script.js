// Wait for the HTML to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Grab the form element and the success message element
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    // Listen for the user hitting the "submit" button
    contactForm.addEventListener("submit", function(event) {
        
        // Prevent the page from refreshing (the default form behavior)
        event.preventDefault();

        // Normally, you would send data to a server here.
        // For this beginner version, we will just show a success message.
        
        // Hide the form
        contactForm.style.display = "none";
        
        // Show the success message by removing the "hidden" class
        formMessage.classList.remove("hidden");
    });

});