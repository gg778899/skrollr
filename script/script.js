var skrollrInstance = skrollr.init();
$(window).scroll(function (e) { 
    if ($(window).scrollTop()>0) {
        $("nav").css("background-color","#FCDD9C");
    }
    else
        $("nav").css("background-color","rgba(0, 0, 0, 0)");
});
$(window).resize(function () { 
    skrollrInstance.refresh();
});