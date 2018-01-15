$(document).ready(function() {
    // NAVIGATION BAR
    $('#nav-bar a').hover(function() {
        $(this).animate({color: '#808080'}, 200);
    }, function() {
        $(this).animate({color: '#ffffff'}, 200);
    });
    // END OF NAVIGATION BAR

    // SUMMARY (SLIDESHOW)

    // Different slides in slideshow
    var slideshow = function(topSlide, middleSlide, bottomSlide) {
        // Method to show the top slide
        var showTopSlide = function() {
            topSlide.show();
            middleSlide.show();
            bottomSlide.show();
        }

        // Method to show the middle slide
        var showMiddleSlide = function() {
            topSlide.hide();
            middleSlide.show();
            bottomSlide.show();
        }

        // Method to show the bottom slide
        var showBottomSlide = function() {
            topSlide.hide();
            middleSlide.hide();
            bottomSlide.show();
        }

        var counter = 1;
        var slideDuration = 5000;

        // Method to auto-change slides
        var changeSlides = function() {
            if (counter === 1) {
                showTopSlide();
                counter += 1;
            } else if (counter === 2) {
                showMiddleSlide();
                counter += 1;
            } else if (counter == 3) {
                showBottomSlide();
                counter = 1;
            }
        }
        setInterval(changeSlides, slideDuration);
    }

    var minigameSlide = $('#minigames');
    var codingSlide = $('#coding-passion');
    var websiteSlide = $('#stunning-websites');

    slideshow(websiteSlide, codingSlide, minigameSlide);
    // END OF SUMMARY (SLIDESHOW)

    // ABOUT && SKILLSET



    // END OF ABOUT && SKILLSET
});
