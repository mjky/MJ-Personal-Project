$(document).ready(function(){
    /* Overlay for images to enhance user experiance and not end up at dead end after each clik on the image */
    var $overlay = $('<div id="photos"></div>');
    var $image = $("<img>");

    $overlay.append($image);
    $("body").append($overlay);
    $("#photos a").click(function(e) {
        e.preventDefault();
        var imageLocation = $(this).children('img').attr("src");

        $image.attr("src", imageLocation);

        $overlay.show();
    });

    $overlay.click(function() {
        $overlay.hide();
    });
})