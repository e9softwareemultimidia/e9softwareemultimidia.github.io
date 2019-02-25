$(document).ready(function () {

    $("#demo").sliderUi({
        // Options
        caption: true

    });

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    $("#myBtn").on('click',function() {
        window.scrollTo(0,0);
    });

    $(function(){
        $('.navbar-toggle, nav').click(function(){
            $('.navbar-toggle').toggleClass('navbar-on');
            $('nav').fadeToggle();
            $('nav').removeClass('nav-hide');
        });
    });

});