// Function to implement smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('.navigation a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function for introduction section enhancement
function initIntroToggle() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreInfo = document.getElementById('intro-more-info');

    if (readMoreBtn && moreInfo) {
        readMoreBtn.addEventListener('click', () => {
            const isHidden = moreInfo.style.display === 'none';
            moreInfo.style.display = isHidden ? 'block' : 'none';
            readMoreBtn.textContent = isHidden ? 'Show Less' : 'Read More';
        });
    }
}

// Function to handle project details modal
function initProjectDetails() {
    const projectButtons = document.querySelectorAll('.view-details-btn');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close');

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

    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            const project = projects[projectId];

            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalLink.href = project.link;

            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

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
