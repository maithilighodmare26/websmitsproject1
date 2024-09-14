

const galleryContainer = document.getElementById('galleryContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 1; // Start with the second image as the center one

function updateGallery() {
    galleryItems.forEach((item, index) => {
        // Only show 3 items around the current index
        if (index >= currentIndex - 1 && index <= currentIndex + 1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

        // Mark the center image
        if (index === currentIndex) {
            item.classList.add('center');
        } else {
            item.classList.remove('center');
        }
    });
}


nextBtn.addEventListener('click', () => {
    if (currentIndex < galleryItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateGallery();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = galleryItems.length - 1;
    }
    updateGallery();
});

// Initial call to set the gallery on page load
updateGallery();
