$(function() {
    // Function to initialize Owl Carousel
    function initializeCarousel() {
      var owl = $("#weatherContainer .owl-carousel");
      owl.owlCarousel({
        items: 8,
        margin: 10,
        loop: false,
        nav: false
      });
    }
    // Create a new MutationObserver instance
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        // Check if the required element has been added to the DOM
        if ($(mutation.addedNodes).find(".owl-carousel").length > 0) {
          // Initialize Owl Carousel on the element
          initializeCarousel();
        }
      });
    });
    // Start observing the weather container for changes
    observer.observe($("#weatherContainer")[0], { childList: true, subtree: true });
  });