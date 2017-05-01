// Add smooth scrolling to all <a> elements
function smoothScroll() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-60
            }, 600, function(){
                window.location.hash = hash;
            });
        }
    });
}

// Stop the youtube video from playing when modal is closed
function closeModalVideo() {
    $('#medmag,#boardON').each( function() {
        $(this).on('hidden.bs.modal', function () {
            $("iframe", this).attr("src", $("iframe", this).attr("src")); 
        });
    });
}

function initToolbox() {
    $('.toolboxIcon').each( function() {
        $(this).attr("data-toggle", "tooltip");
        $(this).attr("title", $(this).attr("id"));
        $(this).attr("data-placement", "top");

        if($(this).width() > 40)
        {
            $(this).width("50px");
            $(this).height("auto");
        }
    });
}

function initTooltips() {
    $('[data-toggle="tooltip"]').tooltip({container: 'body'}); 
}

$(document).ready(function(){    
    initTooltips();
    smoothScroll();
    closeModalVideo();
    initToolbox()
});


