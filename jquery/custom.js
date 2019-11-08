$(function() {
new WOW(). init();
});

$(function(){
$("#work").magnificPopup({
delegate: 'a', 
type:'image',
gallery:{
    enabled:true
}
});
});

$(function() {
$("#team-members"). owlCarousel({
    items:3,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    
    responsive: {
        0 : {
            items : 1
        },
        480 : {
            items : 2 }, 
        768 : {
            items : 3
        }
    }


});

});

$(function() {
    $("#customers-testimonials"). owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        autoplayHoverPause:true,
        loop:true,
    
    
    });
    
    });

    $(function() {
    $(".counter") .counterUp({
        time: 2000,
        delay:20,
    });

});

$(function() {
    $(window) .scroll(function(){
        if($(this).scrollTop() < 50){
            $("nav").removeClass("pebason-top-nav");

        } else {
            $("nav").addClass("pebason-top-nav");
        }
        
    });
});

$(function(){
$("a.smooth-scroll").click(function(event){
event.preventDefault();
var section =$(this) .attr("href");

$('html, body') .animate({
scrollTop: $(section) .offset().top -64},
1250);
});
});

$ (function(){
    $(".navbar-collapse ul li a") .on("click touch", function(){
    $(".navbar-toggle").click();

});
});
