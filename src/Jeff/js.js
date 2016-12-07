/**
 * Created by jeffjorgensen on 11/11/2016.
 */

$(window).on("scroll", function() {
    var e = $(window).scrollTop();
    e < s && e > 0 ? $("#mobile_desktop_header").addClass("active fixed") : e < 10 ? $("#mobile_desktop_header").removeClass("active fixed") : $("#mobile_desktop_header").removeClass("active"), s = $(window).scrollTop()
}), $(".mobile-phone_wrapper").length > 0 && $(window).on("scroll", function() {
    var e = $(window).scrollTop(),
        t = $(".mobile-phone_wrapper").offset().top;
    e > t ? $(".phone-img-wrapper").addClass("active") : $(".phone-img-wrapper").removeClass("active")
}), $(".navigation-bubbles-wrapper .bubble").on("click", function() {
    $(this).attr("data-scrollto")
});