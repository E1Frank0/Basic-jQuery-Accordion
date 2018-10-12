// Frank Diaz, DIG 2930, Professor Kahn Mai

// Code was inspired by accordion made by: Inspirational Pixels

// Article and Demo by Inspirational Pixels: http://inspirationalpixels.com/tutorials/creating-an-accordion-with-html-css-jquery

// http://demos.inspirationalpixels.com/Accordion-with-HTML-CSS-&-jQuery/
// "use strict";
$(document).ready(function() {
    "use strict";
    function close_accordion_box() {
        //"use strict";
        $('.accordion-default .accordion-box-title').removeClass('active');
        $('.accordion-default .accordion-box-content').slideUp(300).removeClass('open');
        console.log();
    }
    
    $('.accordion-box-title').click(function(e) {
        
        var grabAnchorValue = $(this).attr('href');
        
        if($(e.target).is('.active')) {
            close_accordion_box();
        }else {
            close_accordion_box();
            
            $(this).addClass('active');
            $('.accordion-default ' + grabAnchorValue).slideDown(300).addClass('open');
            console.log();
        }
        
        e.preventDefault();
    });
});
