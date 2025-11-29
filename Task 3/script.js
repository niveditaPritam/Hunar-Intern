// Fetch movie data and populate rows
async function loadMovies() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Populate trending row
        populateRow('trending-row', data.trending);

        // Populate top rated row
        populateRow('top-rated-row', data.topRated);

        // Populate action row
        populateRow('action-row', data.action);

        // Populate comedy row
        populateRow('comedy-row', data.comedy);

    } catch (error) {
        console.error('Error loading movie data:', error);
    }
}

// Function to populate a row with movie posters
function populateRow(rowId, movies) {
    const row = document.getElementById(rowId);
    row.innerHTML = '';

    movies.forEach(movie => {
        const poster = document.createElement('img');
        poster.src = movie.poster;
        poster.alt = movie.title;
        poster.className = 'row-poster';
        poster.dataset.movieId = movie.id;
        poster.dataset.category = rowId.replace('-row', '');

        poster.addEventListener('click', () => showMovieDetails(movie));

        row.appendChild(poster);
    });
}

// Function to show movie details in modal
function showMovieDetails(movie) {
    const modal = document.getElementById('movie-modal');
    const title = document.getElementById('modal-title');
    const poster = document.getElementById('modal-poster');
    const description = document.getElementById('modal-description');
    const genre = document.getElementById('modal-genre');
    const year = document.getElementById('modal-year');
    const rating = document.getElementById('modal-rating');

    title.textContent = movie.title;
    poster.src = movie.poster;
    poster.alt = movie.title;
    description.textContent = movie.description;
    genre.textContent = movie.genre;
    year.textContent = movie.year;
    rating.textContent = movie.rating;

    modal.style.display = 'block';

    // Close modal when clicking the close button
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Handle play video button
    const playBtn = document.getElementById('play-video-btn');
    playBtn.onclick = () => {
        showVideoPlayer();
    };
}

// Function to show video player modal
function showVideoPlayer() {
    const videoModal = document.getElementById('video-modal');
    const movieModal = document.getElementById('movie-modal');

    // Hide movie details modal
    movieModal.style.display = 'none';

    // Show video modal
    videoModal.style.display = 'block';

    // Close video modal
    const closeVideoBtn = videoModal.querySelector('.close-video');
    closeVideoBtn.onclick = () => {
        videoModal.style.display = 'none';
    };

    // Close video modal when clicking outside
    window.onclick = (event) => {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
        }
    };
}

// Handle hero play button
document.querySelector('.play-btn').addEventListener('click', () => {
    showVideoPlayer();
});

// Handle hero info button
document.querySelector('.info-btn').addEventListener('click', () => {
    // Show details for Stranger Things (featured in hero)
    const strangerThings = {
        id: 3,
        title: "Stranger Things",
        poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
        genre: "Drama, Fantasy, Horror",
        year: 2016,
        rating: "TV-14"
    };
    showMovieDetails(strangerThings);
});

// Load movies when page loads
document.addEventListener('DOMContentLoaded', loadMovies);
