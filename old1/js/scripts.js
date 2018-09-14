$(window).scroll(function() {
    var sticky = $('header'),
        scroll = $(window).scrollTop();
    if (scroll > 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

/* SCROLL ANIMATION */

$.fn.visible = function(partial) {

    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};

var win = $(window);
var allMods = $(".who_ .blog .col_");
/*var allMods1 = $(".top_blog ");*/
var allMods2 = $(".agency .inner > *");
var allMods3 = $(".technology .right_col .inner ");
var allMods4 = $(".technology .left_col img ");

win.scroll(function(event) {
    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){
                el.addClass("come-in"); 
            },i*200);
        } 
    });
});  
/*win.scroll(function(event) {
    allMods1.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){
                el.addClass("come-in"); 
            },i*200);
        } 
    });
});  */
win.scroll(function(event) {
    allMods2.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){
                el.addClass("come-in"); 
            },i*200);
        } 
    });
}); 

win.scroll(function(event) {
    allMods3.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){
                el.addClass("come-in"); 
            },i*200);
        } 
    });
}); 
win.scroll(function(event) {
    allMods4.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            setTimeout(function(){
                el.addClass("come-in"); 
            },i*200);
        } 
    });
}); 



$(function(){
    var $elems = $('.animateblock');
    var winheight = $(window).height();
    var fullheight = $(document).height();
    $(window).scroll(function(){
        animate_elems();
    });
    $(window).load(function(){
        animate_elems();
    })
    function animate_elems() {
        wintop = $(window).scrollTop(); // calculate distance from top of window

        // loop through each item to check when it animates
        $elems.each(function(){
            $elm = $(this);

            if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item

            topcoords = $elm.offset().top; // element's distance from top of page in pixels

            if(wintop > (topcoords - (winheight*.75))) {
                // animate when top of the window is 3/4 above the element
                $elm.addClass('animated');
            }
        });
    }
});


var $bubbles = $('.balloon');

function bubbles() {
    if($(window).width() < 960){
        // Settings
        var min_bubble_count = 4, // Minimum number of bubbles
            max_bubble_count = 4, // Maximum number of bubbles
            min_bubble_size = 10, // Smallest possible bubble diameter (px)
            max_bubble_size = 15; // Maximum bubble blur amount (px)
    }else{
        var min_bubble_count = 4, // Minimum number of bubbles
            max_bubble_count = 4, // Maximum number of bubbles
            min_bubble_size = 20, // Smallest possible bubble diameter (px)
            max_bubble_size = 30; // Maximum bubble blur amount (px)
    }
    // Calculate a random number of bubbles based on our min/max
    var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));

    // Create the bubbles
    for (var i = 0; i < bubbleCount; i++) {
        $bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
    }

    // Now randomise the various bubble elements
    $bubbles.find('.bubble-container').each(function(){

        // Randomise the bubble positions (0 - 100%)
        // Randomise the bubble positions (0 - 100%)
        var pos_rand = Math.floor(Math.random() * 101);

        // Randomise their size
        var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));

        // Randomise the time they start rising (0-15s)
        var delay_rand = Math.floor(Math.random() * 10);
        // Randomise their speed (3-8s)
        var speed_rand = 3 + Math.floor(Math.random() * 8);
        
        // Random blur
        var blur_rand = Math.floor(Math.random() * 3);

        // Cache the this selector
        var $this = $(this);

        // Apply the new styles
        $this.css({
            'bottom' : pos_rand + '%',

            '-webkit-animation-duration' : speed_rand + 's',
            '-moz-animation-duration' : speed_rand + 's',
            '-ms-animation-duration' : speed_rand + 's',
            'animation-duration' : speed_rand + 's',

            '-webkit-animation-delay' : delay_rand + 's',
            '-moz-animation-delay' : delay_rand + 's',
            '-ms-animation-delay' : delay_rand + 's',
            'animation-delay' : delay_rand + 's',

            '-webkit-filter' : 'blur(' + blur_rand  + 'px)',
            '-moz-filter' : 'blur(' + blur_rand  + 'px)',
            '-ms-filter' : 'blur(' + blur_rand  + 'px)',
            'filter' : 'blur(' + blur_rand  + 'px)',
        });

        $this.children('.bubble').css({
            'width' : size_rand + 'px',
            'height' : size_rand + 'px'
        });

    });
}
// In case users value their laptop battery life
// Allow them to turn the bubbles off
$('.bubble-toggle').click(function(){
    if($bubbles.is(':empty')) {
        bubbles();
        $bubbles.show();
        $(this).text('Bubbles Off');
    } else {
        $bubbles.fadeOut(function(){
            $(this).empty();
        });
        $(this).text('Bubbles On');
    }

    return false;
});

bubbles();