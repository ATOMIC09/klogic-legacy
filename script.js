document.addEventListener('DOMContentLoaded', function () {
    const disclaimerOverlay = document.getElementById('disclaimer-overlay');
    const acceptButton = document.getElementById('accept-button');
    const declineButton = document.getElementById('decline-button');
    const originalPageContent = document.getElementById('original-page-content');
  
    // Show the disclaimer overlay
    disclaimerOverlay.style.display = 'flex';
  
    // Handle accept button click
    acceptButton.addEventListener('click', function () {
        // Hide the disclaimer overlay and show the original content
        disclaimerOverlay.style.display = 'none';
        originalPageContent.style.display = 'block';
    });
    declineButton.addEventListener('click', function () {
        // Redirect to reg.kmutnb.ac./th
        window.location.href = 'https://reg.kmutnb.ac.th';
    });
});
