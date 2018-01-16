$(document).ready(function() {
    // NAVIGATION BAR
    $('#nav-bar a').hover(function() {
        $(this).animate({color: '#808080'}, 200);
    }, function() {
        $(this).animate({color: '#ffffff'}, 200);
    });
    // END OF NAVIGATION BAR

    // SUMMARY (SLIDESHOW)

    // Begin slideshow
    $('#left').addClass('active');
    $('#center').addClass('not-active');
    $('#right').addClass('not-active');
    $('.slideshow-control-button').hide();

    var slideshow = function(topSlide, middleSlide, bottomSlide) {
        // Method to show the top slide
        var showTopSlide = function() {
            topSlide.fadeIn(1000);
            middleSlide.fadeIn(2000);
            bottomSlide.fadeIn(2000);

            // Change slide controls
            setSelectedControlTo('#left');
            setNoLongerSelectedTo('#center', '#right');
        }

        // Method to show the middle slide
        var showMiddleSlide = function() {
            topSlide.fadeOut(1000);
            middleSlide.fadeIn(1000);
            bottomSlide.fadeIn(1000);

            // Change slide controls
            setSelectedControlTo('#center');
            setNoLongerSelectedTo('#left', '#right');
        }

        // Method to show the bottom slide
        var showBottomSlide = function() {
            topSlide.fadeOut(1000);
            middleSlide.fadeOut(1000);
            bottomSlide.fadeIn(1000);

            // Change slide controls
            setSelectedControlTo('#right');
            setNoLongerSelectedTo('#left', '#center');
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
        var slideshowTimer = setInterval(changeSlides, slideDuration);

        // Only show controls when user hovers over slideshow
        $('#summary').hover(function() {
            $('.slideshow-control-button').fadeIn(400);
        }, function() {
            $('.slideshow-control-button').fadeOut(400);
        })

        // Handle user request to change slide
        $('.slideshow-control-button').on('click', function() {
            if ($(this).is('#left')) {
                showTopSlide();
                setSelectedControlTo('#left');
                setNoLongerSelectedTo('#center', '#right');
                clearInterval(slideshowTimer);
                counter = 1;
            } else if ($(this).is('#center')) {
                showMiddleSlide();
                setSelectedControlTo('#center');
                setNoLongerSelectedTo('#left', '#right');
                clearInterval(slideshowTimer);
                counter = 2;
            } else {
                showBottomSlide();
                setSelectedControlTo('#right');
                setNoLongerSelectedTo('#left', '#center');
                clearInterval(slideshowTimer);
                counter = 3;
            }
        });

        // Method to change selected slideshow control
        var setSelectedControlTo = function(applyControlTo) {
            var changeMe = $(applyControlTo);

            changeMe.addClass('active');
            changeMe.removeClass('not-active');
        }

        // Method to remove focus from previously selected slideshow controls
        var setNoLongerSelectedTo = function(elem1, elem2) {
            var elemToChange1 = $(elem1);
            var elemToChange2 = $(elem2);

            elemToChange1.addClass('not-active');
            elemToChange1.removeClass('active');

            elemToChange2.addClass('not-active');
            elemToChange2.removeClass('active');
        }
    }

    // Initiate slideshow
    var minigameSlide = $('#minigames');
    var codingSlide = $('#coding-passion');
    var websiteSlide = $('#stunning-websites');
    slideshow(websiteSlide, codingSlide, minigameSlide);
    // END OF SUMMARY (SLIDESHOW)

    // ABOUT && SKILLSET



    // END OF ABOUT && SKILLSET
});
