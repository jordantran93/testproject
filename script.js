$(document).ready(function () {

    $('.gameplay-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1
            }

        }
    });
    $('#gameplay .customNextBtn').click(function () {
        $('.gameplay-slider').trigger('next.owl.carousel');
    });
    $('#gameplay .customPreviousBtn').click(function () {
        $('.gameplay-slider').trigger('prev.owl.carousel');
    });

// Start Process 3D item
    $('#ntf-items .list-items-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 5
            }

        }
    });

    $('#ntf-items .customNextBtn').click(function () {
        $('#ntf-items .list-items-slider').trigger('next.owl.carousel');
        $('#ntf-items .owl-item .item.hightlight').addClass('old');
        if ($('#ntf-items .owl-item .item.hightlight').parent().next().length) {
            $('#ntf-items .owl-item .item.hightlight').parent().next().find(".item").addClass('hightlight');
        } else {
            $('#ntf-items .owl-item').first().find(".item").addClass('hightlight');
        }


        $('#ntf-items .owl-item .hightlight.old').removeClass('hightlight old');
        var raceName = $('#ntf-items .owl-item .hightlight.item').attr("data-race-name");
        $('.ntf-items-character').removeClass("active");
        $('.ntf-items-character'+"[data-race-name='" + raceName + "']").addClass("active");

    });
    $('#ntf-items .customPreviousBtn').click(function () {
        $('#ntf-items .list-items-slider').trigger('prev.owl.carousel');
        $('#ntf-items .owl-item .item.hightlight').addClass('old');
        if ($('#ntf-items .owl-item .item.hightlight').parent().prev().length) {
            $('#ntf-items .owl-item .item.hightlight').parent().prev().find(".item").addClass('hightlight');
        } else {
            $('#ntf-items .owl-item').last().find(".item").addClass('hightlight');
        }
        $('#ntf-items .owl-item .hightlight.old').removeClass('hightlight old');
        var raceName = $('#ntf-items .owl-item .hightlight.item').attr("data-race-name");
        $('.ntf-items-character').removeClass("active");
        $('.ntf-items-character'+"[data-race-name='" + raceName + "']").addClass("active");
    });
    $('#ntf-items .owl-item .item').click(function () {

        var raceName = $(this).attr('data-race-name');
        $('#ntf-items .owl-item .item').removeClass('hightlight');
        $(this).addClass("hightlight");
        $('.ntf-items-character').removeClass("active");
        $('.ntf-items-character'+"[data-race-name='" + raceName + "']").addClass("active");
    });


// End Process 3D item

    $('.ourteam-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        mouseDrag: true,
        touchDrag: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }

        }
    });
    $('#ntf-ourteam .customNextBtn').click(function () {
        $('.ourteam-slider').trigger('next.owl.carousel');
    });
    $('#ntf-ourteam .customPreviousBtn').click(function () {
        $('.ourteam-slider').trigger('prev.owl.carousel');
    });
    $('.advisors-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        mouseDrag: true,
        touchDrag: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }

        }
    });
    $('#ntf-advisors .customNextBtn').click(function () {
        $('.advisors-slider').trigger('next.owl.carousel');
    });
    $('#ntf-advisors .customPreviousBtn').click(function () {
        $('.advisors-slider').trigger('prev.owl.carousel');
    });
})

$(document).ready(function () {
    lazyload();
    new WOW().init();
});

// Process show menu 
$(document).ready(function () {
    $( '.menu-top a' ).on( 'click', function(e){
        $( '.menu-top a' ).removeClass('active');
        $( this ).addClass('active');
          // Define variable of the clicked »a« element (»this«) and get its href value.
          var href = $(this).attr( 'href' );
          
          // Run a scroll animation to the position of the element which has the same id like the href value.
          $( 'html, body' ).animate({
                scrollTop: $( href ).offset().top - 50
          }, 500,'linear' );
            
          // Prevent the browser from showing the attribute name of the clicked link in the address bar
          e.preventDefault();
          if(href==="#ntf-video"){
           document.getElementById('ntf-video-item').play();
          }
        });

    $(".open-nav").on("click",function(){
            $("#ntf-sidebar").css('width', '250px'); 
    });
    $(".close-nav").on("click",function(e){
            e.preventDefault();
           $("#ntf-sidebar").css('width', '0px'); 
    });
});
$(window).resize(function(){
    if(window.innerWidth >767){
        $("#ntf-sidebar").width("100%");
    }else{
        $("#ntf-sidebar").width("1");
    }

});



$("#ntf-sidebar").width("1");

test1