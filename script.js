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
            topSlide.fadeIn(1000);
            middleSlide.fadeIn(2000);
            bottomSlide.fadeIn(2000);
        }

        // Method to show the middle slide
        var showMiddleSlide = function() {
            topSlide.fadeOut(1000);
            middleSlide.fadeIn(1000);
            bottomSlide.fadeIn(1000);
        }

        // Method to show the bottom slide
        var showBottomSlide = function() {
            topSlide.fadeOut(1000);
            middleSlide.fadeOut(1000);
            bottomSlide.fadeIn(1000);
        }

        var counter = 1;
        var slideDuration = 7000;

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
        //setInterval(changeSlides, slideDuration);
    }

    var minigameSlide = $('#minigames');
    var codingSlide = $('#coding-passion');
    var websiteSlide = $('#stunning-websites');

    slideshow(websiteSlide, codingSlide, minigameSlide);

    // Styling slideshow controls
    $('.slideshow-control-button').hover(function() {
        $(this).animate({backgroundColor: '#808080'}, 200);
    }, function() {
        $(this).animate({backgroundColor: '#333'}, 200);
    });
    // END OF SUMMARY (SLIDESHOW)

    // ABOUT && SKILLSET



    // END OF ABOUT && SKILLSET
});
