$('#landing-page').hide();
$('#home-page').hide();
$(function(){
	$('#landing-page').fadeIn(2000, function(){
        	$(".typed").typed({
            strings: ["Hello World, I'm Claire", "Want to work with me?", "Yeah ya do!"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 50,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: false,
            // false = infinite
            loopCount: 5,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {
                $('#landing-page').delay(3500).fadeOut(1000, function(){
                    $('#home-page').delay(1000).fadeIn(3000);
                });
            },
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });




});