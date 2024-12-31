document.addEventListener('DOMContentLoaded', () => {
const Images = [
    'Images/1 Secrets of Ceylon Brochure Cover.png',
    'Images/2 Intro & Contents.png',
    'Images/3 Horathapola Estate.png',
    'Images/4 Peacock Hill.png',
    'Images/5 Floating Mountain Villa.png',
    'Images/6 Ferncliff Bungalow.png',
    'Images/7 Idal Villa.png',
    'Images/8 Hapu Tales.png',
    'Images/9 Wild Culture.png',
    'Images/10 Kulu Safaris.png',
    'Images/11 Kudakalliya Beach Houses.png',
    'Images/12 3 Sisters.png',
    'Images/13 Zylan.png',
    'Images/14 Forgotten Colombo on a Landy.png',
    'Images/15 Last Page.png'
];

    const pageContainer = document.getElementById('page-container');
    let currentPage = 0;

    // Create pages
    Images.forEach((image) => {
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
