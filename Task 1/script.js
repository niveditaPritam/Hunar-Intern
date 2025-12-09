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
