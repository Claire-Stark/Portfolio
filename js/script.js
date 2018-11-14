$(function(){

    var menuOffset = $('.navbar').offset(); 
    $(document).on('scroll',function(){

            //sticky menu below
        var iScrollTop = $(document).scrollTop();
        // console.log(iScrollTop); - can see how far in console

        if(iScrollTop > menuOffset.top){
            //fix it
            $('.navbar').addClass('fixed');
        }else{
            //unfix it
            $('.navbar').removeClass('fixed');

        }

    });
});

    //menu highlight  - below is basic version, can use jquery to loop
$(function(){
    var offset1 = $('#portfolio').offset().top;
    var offset2 = $('#about').offset().top;
    var offset3 = $('#contact').offset().top;

    $(document).on('scroll',function(){

        var iScrollTop = $(document).scrollTop();

        var activeLi;

        if(iScrollTop >= offset1 && iScrollTop<offset2){

            activeLi = $('.navbar>li:nth-child(1)');

        }

        if(iScrollTop >= offset2 && iScrollTop<offset3){

            activeLi = $('.navbar>li:nth-child(2)');

        }

        if(iScrollTop >= offset3 && iScrollTop<offset4){

            activeLi = $('.navbar>li:nth-child(3)');

        }

        // activeLi.addClass('active');

        // $('.navbar>li').not(activeLi).removeClass('active');

    });

    // $('[data-to]').on('click',function(e){  
    //     e.preventDefault();

    //     var sTarget = $(this).data('to');

    //     var targetOffsetTop = $(sTarget).offset().top;

    //     $('html,body').animate({scrollTop:targetOffsetTop},1000);  
    // });
});

