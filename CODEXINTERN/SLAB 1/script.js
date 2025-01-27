// Function to set the background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    document.body.style.color = color === 'black' ? 'white' : 'black';
    localStorage.setItem('bgColor', color); // Save the color in local storage
    document.getElementById('toggleButton').setAttribute('aria-pressed', color === 'black');
}

// Event listener for the toggle button
document.getElementById('toggleButton').addEventListener('click', function() {
    const currentColor = document.body.style.backgroundColor;
    const newColor = currentColor === 'black' ? 'white' : 'black';
    setBackgroundColor(newColor);
});

// Event listener for the color selector
document.getElementById('colorSelector').addEventListener('change', function() {
    const selectedColor = this.value;
    setBackgroundColor(selectedColor);
});

// Load the saved background color from local storage
window.onload = function() {
    const savedColor = localStorage.getItem('bgColor') || 'white';
    setBackgroundColor(savedColor);
    document.getElementById('colorSelector').value = savedColor; // Set the select value
};