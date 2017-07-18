/* Overlay for images to enhance user experiance and not end up at dead end after each clik on the image */
var $overlay = $('<div id="photos"></div>');
var $image = $("<img>");

$overlay.append($image);
$("body").append($overlay);
$("#photos a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    $image.attr("src", imageLocation);

    $overlay.show();
});

$overlay.click(function() {
    $overlay.hide();

});