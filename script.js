document.addEventListener('DOMContentLoaded', () => {
    const colorBoxes = document.querySelectorAll('.color-box');
    const previewArea = document.querySelector('.preview-area');
    const resetButton = document.querySelector('.reset-button');

    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const color = box.dataset.color;
            previewArea.style.backgroundColor = color;

            // Adjust text color based on the background
            previewArea.style.color = ['#F0F4EF', '#E6AACE', '#BFCC94'].includes(color) ? '#0D1821' : '#F0F4EF';
            previewArea.textContent = `Background Color: ${color}`;
        });
    });

    resetButton.addEventListener('click', () => {
        previewArea.style.backgroundColor = '#F0F4EF';
        previewArea.style.color = '#344966';
        previewArea.textContent = 'Click a color above to apply it here.';
    });
});
