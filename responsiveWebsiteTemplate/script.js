$(function () {
    var pagePath = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    console.log(pagePath);
    $('#header ul li a[href^="' + pagePath + '"]').addClass('selected');

})