$(document).ready(function() {
    $('.tab-nav li').hover(function() {
        $('.tab-nav li.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.tab-nav li:first-child').addClass('active');
});