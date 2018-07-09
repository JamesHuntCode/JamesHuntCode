$(document).ready(function () {
    // Project-Highlights shake on hover:
    $('.highlight-image, .skill-set-image').hover(function () {
        $(this).addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated pulse');
        });
    });

    // Scroll to page elements from the navigation bar:


    // Scroll to page elements from the footer:
    $('#footer a').on('click', function () {

        var linkClicked = $(this).text().toUpperCase();

        switch (linkClicked) {

            case "TOP OF PAGE":

            $('html, body').animate({
                    scrollTop: $("#navbar").offset().top
            }, 2000);


            break;
            case "ABOUT ME":

            $('html, body').animate({
                    scrollTop: $("#about-me").offset().top
            }, 2000);

            break;
            case "MY SKILL SET":

            $('html, body').animate({
                    scrollTop: $("#my-skills").offset().top
            }, 2000);

            break;
            case "PROJECT HIGHLIGHTS":

            $('html, body').animate({
                    scrollTop: $("#projects").offset().top
            }, 2000);

            break;
            case "WORK & INTERESTS":

            $('html, body').animate({
                    scrollTop: $("#current-interests").offset().top
            }, 2000);

            break;
            case "HIRE ME":

            $('html, body').animate({
                    scrollTop: $("#hire-me").offset().top
            }, 2000);

            break;
            case "CONTACT ME":

            $('html, body').animate({
                    scrollTop: $("#contact-me").offset().top
            }, 2000);

            break;
            
        }
    });

    // Set Copyright Date
    var copyrightNotice = $('#copyright');
    var year = new Date().getFullYear();
    copyrightNotice.html("© " + year + " James Hunt All Rights Reserved");
});
