(function(jQuery) {
    var o, n;
    jQuery(".title_block").on("click", function() {
        o = jQuery(this).parents(".accordion_item");
        n = o.find(".info");
        o.hasClass("active_block")
            ? (o.removeClass("active_block"), n.slideUp(200))
            : (o.addClass("active_block"), n.stop(!0, !0).slideDown(200),
        o.siblings(".active_block").removeClass("active_block").children(".info").stop(!0, !0).slideUp(200))
    })
    })(jQuery);
    // адаптив
    // $(window).resize(function () {
    //     if($(window).width() < 992) {
    //         $(".accordion").removeClass("d-none")
    //     }
    //     if($(window).width() > 992) {
    //         $(".accordion").addClass("d-none")
    //     }
    // });