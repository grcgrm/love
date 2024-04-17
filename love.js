const carousel = document.querySelector(".carousel");
const dotsContainer = document.querySelector(".dots-container");

// Populate dots based on number of images
const images = carousel.querySelectorAll("img");
images.forEach(() => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
});

let startX, scrollLeft, isDragging = false;

carousel.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].clientX;
  const walk = (x - startX) * 2; // Adjust the multiplier to control sensitivity
  carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener("touchend", () => {
  isDragging = false;
});

// Function to update dot color when active
function updateActiveDot() {
  const scrollLeft = carousel.scrollLeft;
  const currentIndex = Math.round(scrollLeft / carousel.offsetWidth);
  const dots = dotsContainer.querySelectorAll(".dot");

  // Remove 'active' class from all dots
  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  // Add 'active' class to the current dot
  dots[currentIndex].classList.add("active");
}

// Call the updateActiveDot function when the carousel is scrolled
carousel.addEventListener("scroll", updateActiveDot);
updateActiveDot();
