document.addEventListener('DOMContentLoaded', () => {
const images = [
    'images/1 Secrets of Ceylon Brochure Cover.png',
    'images/2 Intro & Contents.png',
    'images/3 Horathapola Estate.png',
    'images/4 Peacock Hill.png',
    'images/5 Floating Mountain Villa.png',
    'images/6 Ferncliff Bungalow.png',
    'images/7 Idal Villa.png',
    'images/8 Hapu Tales.png',
    'images/9 Wild Culture.png',
    'images/10 Kulu Safaris.png',
    'images/11 Kudakalliya Beach Houses.png',
    'images/12 3 Sisters.png',
    'images/13 Zylan.png',
    'images/14 Forgotten Colombo on a Landy.png',
    'images/15 Last Page.png'
];

    const pageContainer = document.getElementById('page-container');
    let currentPage = 0;

    // Create pages
    images.forEach((image) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.style.backgroundImage = `url(${image})`;
        pageContainer.appendChild(page);
    });

    const totalPages = images.length;

    // Navigation logic
    document.getElementById('next').addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateBook();
        }
    });

    document.getElementById('prev').addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateBook();
        }
    });

    function updateBook() {
        const angle = -currentPage * 180;
        pageContainer.style.transform = `rotateY(${angle}deg)`;
    }

    // Arrow key navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            document.getElementById('next').click();
        } else if (event.key === 'ArrowLeft') {
            document.getElementById('prev').click();
        }
    });
});
