// Function to implement smooth scrolling for navigation links
function initSmoothScrolling() {
    // Select all navigation links that point to an anchor
    document.querySelectorAll('.navigation a[href^="#"]').forEach(anchor => {
        // Add a click event listener to each anchor
        anchor.addEventListener('click', function (e) {
            // Prevent the default anchor click behavior
            e.preventDefault();

            // Get the target element's ID from the href attribute
            const targetId = this.getAttribute('href');
            // Find the target element on the page
            const targetElement = document.querySelector(targetId);

            // If the target element exists, scroll to it smoothly
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to handle the "Read More" button in the introduction section
function initIntroToggle() {
    // Get the "Read More" button and the additional information element
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreInfo = document.getElementById('intro-more-info');

    // If both elements exist, add a click event listener to the button
    if (readMoreBtn && moreInfo) {
        readMoreBtn.addEventListener('click', () => {
            // Check if the additional information is currently hidden
            const isHidden = moreInfo.style.display === 'none';
            // Toggle the display of the additional information
            moreInfo.style.display = isHidden ? 'block' : 'none';
            // Change the button text based on the visibility
            readMoreBtn.textContent = isHidden ? 'Show Less' : 'Read More';
        });
    }
}

// Function to manage the project details modal
function initProjectDetails() {
    // Get all "View Details" buttons, the modal, and its components
    const projectButtons = document.querySelectorAll('.view-details-btn');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close');

    // Define the project details in an object
    const projects = {
        'project1': {
            title: 'Suicidal Tendency Detection System',
            description: 'Built a suicidal tendency detection system using Support Vector Machine (SVM) with 85% classification accuracy on a dataset of 500+ user inputs. It classifies the entered text input as either suicidal or non- suicidal. Used HTML, CSS for developing user interface. Integrated frontend and backend to deliver real-time predictions with response time under 1 second. Conducted testing with different datasets to ensure 75%+ model reliability across varied linguistic patterns.',
            link: 'https://github.com/niveditaPritam/suicidalTendencyDetection'
        },
        'project2': {
            title: 'AI-Powered Healthcare Assistant for Rural Areas',
            description: 'Introducing Bloom: an AI-driven healthcare chatbot for rural areas. It offers symptom analysis, SOS alerts, telemedicine, and pharmacy tracking for fast life-saving care.',
            link: '#'
        }
    };

    // Add a click event listener to each "View Details" button
    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the project ID from the data-project attribute
            const projectId = button.getAttribute('data-project');
            // Get the corresponding project details
            const project = projects[projectId];

            // Populate the modal with the project details
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalLink.href = project.link;

            // Display the modal
            modal.style.display = 'block';
        });
    });

    // Add a click event listener to the close button to hide the modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Add a click event listener to the window to hide the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

// Initialize all functionalities when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initIntroToggle();
    initProjectDetails();
});
