$(document).ready(function () {
});

// $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     }
// });

// function myMap() {
//     var mapCanvas = document.getElementById("map");
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.2), zoom: 10
//     };
//     var map = new google.maps.Map(mapCanvas, mapOptions);
// }

//HERFRA OG NED ER OUTPUTTET NÅR MAN TRYKKER PÅ KNAPPERNE I TRAVEL TALES
//Vi kan også skrive det her i HTML filen under hver knap i stedet

//Vienna
function getTalesOutputTown1() {
    $('#talesOutputBox').text("Her skal der stå text om Vienna");
}
//London
function getTalesOutputTown2() {
    $('#talesOutputBox').text("The day had been planned and it was finally time for our obligatory visit to the famous Camden Market." +
        "We had already been several times so we knew very well what to expect and did not think we would be surprised," +
        "but we would soon learn otherwise." +
        "We started out walking down Camden High Street checking out the colourful shops and eventually ended up in the Camden Lock Market where we had a look around the many,"+
        "many food stands in search of finding just the right plate of lunch."+
        "In all honesty, food is one of the most important things for us when traveling and we enjoy trying a little bit of everything when we are exploring food markets."+
        "Right next to the lock, we found an even cuter food market than we had previous times and we settled on a wrap filled with chicken, cheese, veggies, and – behold – green capsicum."+
        "We were not too impressed. Green capsicum is always too sharp in its taste, we find, but not this one! It was instant love.");
}
//Dublin
function getTalesOutputTown3() {
    $('#talesOutputBox').text("Her skal der stå text om Dublin");
}
//Copenhagen
function getTalesOutputTown4() {
    $('#talesOutputBox').text("Her skal der stå text om Copenhagen");
}
//Stenløse
function getTalesOutputTown5() {
    $('#talesOutputBox').text("Her skal der stå text om Rome");
}
//Tehran
function getTalesOutputTown6() {
    $('#talesOutputBox').text("Her skal der stå om Athens");
}

