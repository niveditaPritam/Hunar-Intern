// Function to implement smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('.navigation a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Optional: Adjust for fixed header offset
                // You can get the header height dynamically if needed
                const headerHeight = 60; // Approximate height of your fixed header
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize smooth scrolling when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initSmoothScrolling);
// ... (existing initSmoothScrolling function and DOMContentLoaded event listener)

// Function for introduction section enhancement
function initIntroToggle() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreInfo = document.getElementById('intro-more-info');

    if (readMoreBtn && moreInfo) {
        readMoreBtn.addEventListener('click', () => {
            // Toggle visibility of the additional information
            const isHidden = moreInfo.style.display === 'none';
            moreInfo.style.display = isHidden ? 'block' : 'none';

            // Change button text
            readMoreBtn.textContent = isHidden ? 'Show Less' : 'Read More';
        });
    }
}

// Call the new function in the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initIntroToggle(); // <--- Add this
});
