// Array of possible content
var contentArray = ["iloveyou", "imissyou", "want hug", "want kiss", "cuddle"];

// Global record of all previously selected content
var previousContent = [];

// Function to shuffle an array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Function to generate random content
function getRandomContent() {
    // Shuffle the contentArray
    var shuffledArray = shuffleArray(contentArray.slice());
    
    // Iterate through the shuffled array and select the first unique content
    for (var i = 0; i < shuffledArray.length; i++) {
        var newContent = shuffledArray[i];
        
        // Check if the newly selected content has already been used
        // If it has, continue to the next content
        if (previousContent.includes(newContent)) {
            continue;
        } else {
            // Update the record of previously selected content
            previousContent.push(newContent);
            return newContent;
        }
    }
    
    // If all content has been used, reset the record of previously selected content
    previousContent = [];
    
    // Recursively call getRandomContent to select content from the shuffled array
    return getRandomContent();
}

// Apply random content to the pseudo-element for all elements with the class 'tz-gallery .lightbox'
var elements = document.querySelectorAll('.tz-gallery .lightbox');
elements.forEach(function(element) {
    element.style.setProperty('--content', '"' + getRandomContent() + '"');
});

 // Get all accordion headers
 var accHeaders = document.querySelectorAll('.accordion-header');

 // Loop through all accordion headers
 accHeaders.forEach(function(accHeader) {
   // Add click event listener to each accordion header
   accHeader.addEventListener('click', function() {
     // Check if the clicked accordion is already active
     var isActive = this.classList.contains('active');

     // Close all accordion items
     accHeaders.forEach(function(header) {
       header.classList.remove('active');
       header.nextElementSibling.style.display = 'none';
     });

     // If the clicked accordion was not active, open it
     if (!isActive) {
       this.classList.toggle('active');
       this.nextElementSibling.style.display = 'block';
     }
   });
 });