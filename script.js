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
function isMobileView() {
    return window.innerWidth <= 1000; // You can adjust the threshold as needed
}

// Function to redirect to another HTML file if in mobile view
function redirectToMobilePage() {
    if (isMobileView()) {
        window.location.href = '/MobileFilo/index.html'; // Change 'mobile_page.html' to the desired HTML file
    }
}

// Check on initial page load
redirectToMobilePage();

// Check on window resize
window.onresize = function() {
    redirectToMobilePage();
};
