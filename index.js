// =============================================
// STEP 1: Set up the image array 
// =============================================
// Array of all images to cycle through
// Customize these paths to your own images
const images = [
  './assets/image-content/image-1.png',
  './assets/image-content/image-2.png',
  './assets/image-content/image-3.png',
  './assets/image-content/image-4.png',
  './assets/image-content/image-5.png',
  './assets/image-content/image-6.png'
];

// =============================================
// STEP 2: Reference HTML elements 
// =============================================
// Connect to the elements we need to change
const imageContent = document.querySelector('.image-content');  // Image container
const mainButton = document.getElementById('main-button');      // Image switch button
const finalMessage = document.querySelector('.final-message');  // Final message

// =============================================
// STEP 3: Track what image we're at 
// =============================================
// Start with the first image (index 0)
let currentIndex = 0;

// =============================================
// STEP 4: Update image function 
// =============================================
// Function to change images with fade effect
function updateImage() {
  // Fade out current image
  imageContent.style.opacity = 0;
  
  // Preload next image
  const img = new Image();
  img.src = images[currentIndex];
  
  // When image is loaded
  img.onload = () => {
    // Change to new image
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Fade in new image
    imageContent.style.opacity = 1;
  };
}

// =============================================
// STEP 5: Initial image display 
// =============================================
// Show first image when page loads
updateImage();

// =============================================
// STEP 6: Button click handler
// =============================================
// Change image when button is clicked
if (mainButton) {
  mainButton.addEventListener('click', () => {
    // Guard: don't exceed bounds
    if (currentIndex >= images.length - 1) return;

    // Advance to next image index
    currentIndex++;

    // Update to the new image
    updateImage();

    // If we've reached the last image, fade out image and reveal the final message
    if (currentIndex === images.length - 1) {
      // Fade out the image
      imageContent.style.opacity = 0;

      // Hide the button
      mainButton.style.display = 'none';

      if (finalMessage) {
        // Make it participate in layout then trigger staggered animation
        finalMessage.style.display = 'block';
        // small delay to allow browser to apply display before animation starts
        requestAnimationFrame(() => {
          finalMessage.style.opacity = '1';
        });
      }
    }
  });
}
