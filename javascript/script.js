$(document).ready(function () {
    // Project-Highlights shake on hover:
    $('.highlight-image, .skill-set-image').hover(function () {
        $(this).addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated pulse');
        });
    });

    // Scroll to page elements from the footer:
    $('#footer a').on('click', function () {

        var linkClicked = $(this).text().toUpperCase();

        var scrollToElem = function (where) {

            // Handle scrolling here...

        }

        switch (linkClicked) {
            case "TOP OF PAGE":

            scrollToElem("navbar");

            break;
            case "ABOUT ME":

            scrollToElem("about-me");

            break;
            case "MY SKILL SET":

            scrollToElem("my-skills");

            break;
            case "PROJECT HIGHLIGHTS":

            scrollToElem("projects");

            break;
            case "WORK & INTERESTS":

            scrollToElem("current-interests");

            break;
            case "HIRE ME":

            scrollToElem("hire-me");

            break;
            case "CONTACT ME":

            scrollToElem("contact-me");

            break;
        }
    });

    // Set Copyright Date
    var copyrightNotice = $('#copyright');
    var year = new Date().getFullYear();
    copyrightNotice.html("© " + year + " James Hunt All Rights Reserved");
});
