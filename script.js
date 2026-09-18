// Trends Scrolling
const slider = document.getElementById('trendingSlider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function slideRow(direction) {
    const scrollAmount = slider.clientWidth * 0.75;
    if (direction === 'left') {
        slider.scrollLeft -= scrollAmount;
    } else {
        slider.scrollLeft += scrollAmount;
    }
}

function updateArrowVisibility() {
    const scrollLeftPosition = slider.scrollLeft;
    const maxScrollableWidth = slider.scrollWidth - slider.clientWidth;

    if (scrollLeftPosition <= 5) {
        leftArrow.classList.add('hidden');
    } else {
        leftArrow.classList.remove('hidden');
    }

    if (scrollLeftPosition >= maxScrollableWidth - 5) {
        rightArrow.classList.add('hidden');
    } else {
        rightArrow.classList.remove('hidden');
    }
}

slider.addEventListener('scroll', updateArrowVisibility);

window.addEventListener('load', updateArrowVisibility);


// Questions and Answers
function toggleFaq(headerElement) {
    const currentItem = headerElement.parentElement;

    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(item => {
        if (item !== currentItem) {
            item.classList.remove('active');
        }
    });

    currentItem.classList.toggle('active');
}