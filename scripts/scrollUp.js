$(function () {
    $('.scrollup').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
})

const footer = $('.footer');
const scrollBtn = $('.scrollup');
const padding = 25;

$(window).scroll(function () {
    var distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());

    if (distanceFromBottom <= footer.innerHeight()) {
        scrollBtn.css('bottom', (footer.innerHeight() - distanceFromBottom) + padding);
    } else {
        scrollBtn.css('bottom', padding);
    }

    if ($(this).scrollTop() > 50) {
        scrollBtn.fadeIn();
    } else {
        scrollBtn.fadeOut();
    }
});
