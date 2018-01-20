$(document).ready(function() {
    // Method to run page scale check and reveal sections if already visible by user
    var runInitialCheck = function() {
        // Check skill set section
        if (checkIfOnScreen($('#professional-skillset'))) {
            revealSkills();
        }

        // Check recent projects section
        if (checkIfOnScreen($('#top-3-projects'))) {
            displayProjects(topImages, true);
        }
    }
    var runningChecks = setTimeout(runInitialCheck, 10);

    // Check what content is visible on user scroll
    $(document).scroll(function() {
        // Check if skills are visible by user
        if (checkIfOnScreen($('#professional-skillset'))) {
            revealSkills();
        }

        // Check if projects are visible by user
        if (checkIfOnScreen($('#top-3-projects'))) {
            displayProjects(topImages, true);
        }
    });

    // Method to check if a certain element is visible by the user
    var checkIfOnScreen = function(elem) {
        var currentPos = elem.offset();
        var currentTop = currentPos.top - $(window).scrollTop();
        var screenHeight = $(window).height();

        return (currentTop > screenHeight) ? false : true;
    }

    var slideshowNotVisible = function() {
        var topOfWindow = $(window).scrollTop();

        var navbarHeight = $('#nav-bar').height();
        var slideshowHeight = $('#summary').height();
        var spacerHeight = $('#spacer').height();

        var totalHeight = Number(navbarHeight) + Number(slideshowHeight) + Number(spacerHeight);

        return (Number(topOfWindow) >= totalHeight);
    }

    // NAVIGATION BAR

    $('#nav-bar a').hover(function() {
        $(this).animate({color: '#008080'}, 200);
    }, function() {
        $(this).animate({color: '#ffffff'}, 200);
    });

    $('#nav-bar a').on('click', function() {
        switch ($(this).text().toUpperCase()) {
            case "ABOUT JAMES":
                sendUserTo("about-james");
            break;
            case "JAMES' SKILLS":
                sendUserTo("james-skills");
            break;
            case "JAMES' PROJECTS":
                sendUserTo("james-projects");
            break;
            case "CONTACT JAMES":
                sendUserTo("email-james");
            break;
        }
    });

    // Method used to scroll the page to a specific location
    var sendUserTo = function(location) {
        var selectedElem;

        switch (location) {
            case "about-james":
                selectedElem = $('#about-james');
            break;
            case "james-skills":
                selectedElem = $('#professional-skillset');
            break;
            case "james-projects":
                selectedElem = $('#james-recent-projects');
            break;
            case "email-james":
                selectedElem = $('#contact-james');
            break;
        }

        var scrollTo = function(where) {
            $('html, body').animate({scrollTop: where.offset().top}, 1000);
        }

        scrollTo(selectedElem);
    }

    // END OF NAVIGATION BAR

    // SUMMARY (SLIDESHOW)

    // Prepare content for slideshow
    $('#left').addClass('active');
    $('#center').addClass('not-active');
    $('#right').addClass('not-active');

    $('#website-slide-content h1').hide();
    $('#website-slide-content h3').hide();

    $('#website-slide-content h1').slideDown(1000);
    $('#website-slide-content h3').delay(1000).slideDown(1000);

    $('#coding-slide-content h1').hide();
    $('#coding-slide-content h3').hide();

    $('#minigame-slide-content h1').hide();
    $('#minigame-slide-content h3').hide();

    var slideshowTimer;
    var running;
    var paused;
    var initialLoop;

    // Main slideshow method
    var slideshow = function(topSlide, middleSlide, bottomSlide) {
        running = true;
        paused = false;
        initialLoop = true;

        // Pause slideshow if it has left user's viewport
        $(document).scroll(function() {
            if (slideshowNotVisible()) {
                // Stop slideshow in here
                clearInterval(slideshowTimer);
                paused = true;
            } else {
                paused = false;
                if (running && !paused) {
                    clearInterval(slideshowTimer);
                    slideshowTimer = setInterval(changeSlides, 7000);
                }
            }
        });

        // Stop slideshow when user leaves page
        $(window).on('blur', function() {
            clearInterval(slideshowTimer);
            paused = true;
        });

        // Restart slideshow when user comes back
        $(window).on('focus', function() {
            paused = false;
            if (running && !paused) {
                clearInterval(slideshowTimer);
                slideshowTimer = setInterval(changeSlides, 7000);
            }
        });

        // Method to show the top slide
        var showTopSlide = function() {
            if (running) {
                topSlide.hide();
                topSlide.show("slide", {direction: "right"}, 1000);
                bottomSlide.hide("slide", {direction: "left"}, 1000);
            } else {
                topSlide.show("slide", {direction: "right"}, 1000);
                middleSlide.hide("slide", {direction: "left"}, 1000);
                bottomSlide.hide("slide", {direction: "left"}, 1000);
            }

            // Change slide controls
            setSelectedControlTo('#left');
            setNoLongerSelectedTo('#center', '#right');
        }

        // Method to show the middle slide
        var showMiddleSlide = function() {
            if (running) {
                middleSlide.hide();
                middleSlide.show("slide", {direction: "right"}, 1000);
                topSlide.hide("slide", {direction: "left"}, 1000);
            } else {
                middleSlide.hide();
                middleSlide.show("slide", {direction: "right"}, 1000);
                topSlide.hide("slide", {direction: "left"}, 1000);
                bottomSlide.hide("slide", {direction: "left"}, 1000);
            }

            // Introduce content
            $('#coding-slide-content h1').delay(1000).slideDown(1000);
            $('#coding-slide-content h3').delay(2000).slideDown(1000);

            // Change slide controls
            setSelectedControlTo('#center');
            setNoLongerSelectedTo('#left', '#right');
        }

        // Method to show the bottom slide
        var showBottomSlide = function() {
            if (running) {
                bottomSlide.hide();
                bottomSlide.show("slide", {direction: "right"}, 1000);
                middleSlide.hide("slide", {direction: "left"}, 1000);
            } else {
                bottomSlide.hide();
                bottomSlide.show("slide", {direction: "right"}, 1000);
                topSlide.hide("slide", {direction: "left"}, 1000);
                middleSlide.hide("slide", {direction: "left"}, 1000);
            }

            // Introduce content
            $('#minigame-slide-content h1').delay(1000).slideDown(1000);
            $('#minigame-slide-content h3').delay(2000).slideDown(1000);

            // Change slide controls
            setSelectedControlTo('#right');
            setNoLongerSelectedTo('#left', '#center');
        }

        var counter = 2;

        // Method to auto-change slides
        var changeSlides = function() {
            if (counter === 1) {
                showTopSlide();
                counter++;
                initialLoop = false;
            } else if (counter === 2) {
                showMiddleSlide();
                counter++;
            } else if (counter == 3) {
                showBottomSlide();
                counter = 1;
            }
        }
        clearInterval(slideshowTimer);
        slideshowTimer = setInterval(changeSlides, 7000);

        // Only show controls when user hovers over slideshow
        var slideControls = [$('#left'), $('#center'), $('#right')];

        for (let i = 0; i < slideControls.length; i++) {
            slideControls[i].css('opacity', 0);
        }

        var offsetEase;
        var looping = false;

        $('#summary').hover(function() {
            if (!looping) { offsetEase = 0 };
            for (let i = 0; i < slideControls.length; i++) {
                slideControls[i].delay(offsetEase).animate({opacity: '1'}, 400);
                offsetEase += 100;
                looping = true;
            }
            looping = false;
        }, function() {
            offsetEase = 0;
            for (let i = 0; i < slideControls.length; i++) {
                slideControls[i].delay(offsetEase).animate({opacity: '0'}, 400);
                offsetEase += 100;
            }
        })

        // Handle user request to change slide
        $('.slideshow-control-button').on('click', function() {
            running = false;
            if ($(this).is('#left')) {
                clearInterval(slideshowTimer);
                if (counter != 1) {
                    initialLoop = false;
                    showTopSlide();
                    setSelectedControlTo('#left');
                    setNoLongerSelectedTo('#center', '#right');
                    counter = 1;
                }
            } else if ($(this).is('#center')) {
                clearInterval(slideshowTimer);
                if (counter != 2 || initialLoop) {
                    initialLoop = false;
                    showMiddleSlide();
                    setSelectedControlTo('#center');
                    setNoLongerSelectedTo('#left', '#right');
                    counter = 2;
                }
            } else {
                clearInterval(slideshowTimer);
                if (counter != 3) {
                    initialLoop = false;
                    showBottomSlide();
                    setSelectedControlTo('#right');
                    setNoLongerSelectedTo('#left', '#center');
                    counter = 3;
                }
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

    // Link leading user to my github profile
    $('.slideshow-content a').hover(function () {
        $(this).animate({color: '#808080'}, 200);
    }, function() {
        $(this).animate({color: '#ffffff'}, 200);
    });
    // END OF SUMMARY (SLIDESHOW)

    // ABOUT && SKILLSET

    $('.github-repo-link').hover(function () {
        $(this).animate({color: '#808080'}, 200);
    }, function() {
        $(this).animate({color: '#333'}, 200);
    });

    // Prepare document for reveal of skills on scroll
    var topSkillLogos = [$('#c-sharp-logo'), $('#javascript-logo'), $('#sql-logo')];
    var topSkillHeaders = [$('#c-sharp-header'), $('#javascript-header'), $('#sql-header')];
    var topSkillSummaries = [$('#c-sharp-summary'), $('#javascript-summary'), $('#sql-summary')];
    var topGitLinks = [$('#c-sharp-link'), $('#js-link'), $('#sql-link')];

    var bottomSkillLogos = [$('#processing-logo'), $('#html-css-logo'), $('#p5-logo')];
    var bottomSkillHeaders = [$('#processing-header'), $('#html-css-header'), $('#p5-header')];
    var bottomSkillSummaries = [$('#processing-summary'), $('#html-css-summary'), $('#p5-summary')];
    var bottomGitLinks = [$('#processing-link'), $('#html-css-link'), $('#p5-link')];

    var allSkillBasedContent = [topSkillLogos, topSkillHeaders, topSkillSummaries, topGitLinks, bottomSkillLogos, bottomSkillHeaders, bottomSkillSummaries, bottomGitLinks];

    // Keep skillset content hidden initially
    for (let i = 0; i < allSkillBasedContent.length; i++) {
        for (let j = 0; j < allSkillBasedContent[i].length; j++) {
            allSkillBasedContent[i][j].css('opacity', 0);
        }
    }

    // Method to reveal skill set to user
    var revealSkills = function() {
        // Dynamic reveal of skills on scroll
        var interval = 0;

        var fadeReveal = function(elements) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].delay(interval).animate({opacity: '1'}, 500);
                interval += 100;
            }
        }

        // Start cycle
        for (let i = 0; i < allSkillBasedContent.length; i++) {
            fadeReveal(allSkillBasedContent[i]);
        }
    }

    // END OF ABOUT && SKILLSET

    // MY RECENT PROJECTS

    // Code handling reveal of initial 3 projects
    var topImages = [$('#defender-img'), $('#doodle-jump-img'), $('#galaga-img')];
    var bottomImages = [$('#job-app-img'), $('#flappy-bird-img'), $('#pong-img'), $('#car-hire-img')];

    // Method to display project images
    var displayProjects = function(elems, top) {
        var growthOffset;

        if (top) {
            growthOffset = 0;
            for (let i = 0; i < elems.length; i++) {
                elems[i].delay(growthOffset).queue(function(next) {
                    elems[i].addClass('full-size-top');
                });
                growthOffset += 175;
            }
        } else {
            setTimeout(function() {
                for (let i = 0; i < elems.length; i++) {
                    elems[i].addClass('full-size-bottom');
                }
            }, 200);
        }

        growthOffset = 0;
    }

    // Method to shrink off project images
    var hideProjects = function(elems, top) {
        var shrinkOffset;

        if (top) {
            shrinkOffset = 0;
            for (let i = 0; i < elems.length; i++) {
                elems[i].delay(shrinkOffset).queue(function(next) {
                    elems[i].removeClass('full-size-top');
                    shrinkOffset += 175;
                });
            }
        } else {
            for (let i = 0; i < elems.length; i++) {
                elems[i].removeClass('full-size-bottom');
            }
        }

        shrinkOffset = 0;
    }

    // Code handling the user requesting to see more projects
    $('#bottom-4-projects').hide();

    var currentContent = $('#direct-user-down').text();

    $('#drop-down-button').on('click', function() {
        $(this).toggleClass('rotated');
        // Dynamically change user instructions
        if (currentContent.toLowerCase() === "want to see more? click below!") {
            $('#direct-user-down').html("Click again to hide.");
            currentContent = "Click again to hide content.";
            displayProjects(bottomImages, false);
        } else {
            $('#direct-user-down').html("Want to see more? Click below!");
            currentContent = "Want to see more? Click below!";
            hideProjects(bottomImages, false);
        }
        $('#bottom-4-projects').slideToggle(800);
    });

    $('#view-all a').hover(function() {
        $(this).animate({color: '#808080'}, 200);
    }, function() {
        $(this).animate({color: '#333'}, 200);
    });

    // END OF MY RECENT PROJECTS

    // FOOTER

    $('.footer-link a, .redirect-user').hover(function() {
        $(this).animate({color: '#808080'}, 200);
    }, function() {
        $(this).animate({color: '#ffffff'}, 200);
    });

    /* in next update:

        - redo scrolling method to work for the footer
        - apply said method to footer, allowing user to navigate page from footer

    */

    // END OF FOOTER
});
