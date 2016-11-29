$(document).ready(function () {


});




$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}


//HERFRA OG NED ER OUTPUTTET NÅR MAN TRYKKER PÅ KNAPPERNE I TRAVEL TALES
//Vi kan også skrive det her i HTML filen under hver knap i stedet

//By 1
function getTalesOutputTown1() {
    $('#talesOutputBox').text("Her skal der stå text om by 1");
}
//By 2
function getTalesOutputTown2() {
    $('#talesOutputBox').text("Her skal der stå text om by 2");
}

//By 3
function getTalesOutputTown3() {
    $('#talesOutputBox').text("Her skal der stå text om by 3");
}

//By 4
function getTalesOutputTown4() {
    $('#talesOutputBox').text("Her skal der stå text om by 4");
}

function getTalesOutputTown5() {
    $('#talesOutputBox').text("Her skal der stå text om by 5");
}

function getTalesOutputTown6() {
    $('#talesOutputBox').text("Her skal der stå text om by 6");
}

