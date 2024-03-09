document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var okButton = document.getElementById('okButton');

    // Add event listener to the "OK" button
    okButton.addEventListener('click', function() {
        // Hide the popup
        popup.style.display = 'none';
    });

    // Automatically hide the popup after 5 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
});
