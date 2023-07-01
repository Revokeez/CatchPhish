// Add an event listener to execute the function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Call the showContent function and pass 'part1' as the argument
    showContent('part1');
  });
  
  // Function to show the content based on the provided part
  function showContent(part) {
    // Get all elements with the class name 'content'
    var contents = document.getElementsByClassName('content');
  
    // Loop through the contents and hide them by setting their display property to 'none'
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
  
    // Display the content with the specified ID by setting its display property to 'block'
    document.getElementById(part).style.display = 'block';
  }
  