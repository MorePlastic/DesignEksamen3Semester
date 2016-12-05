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

//Vienna
function getTalesOutputTown1() {
    $('#talesTitle').text("Vienna");
    $('#talesData').html("<p> Lorem ipsum dolor sit amet, eget consequat, vivamus lectus lectus vel in cras nonummy,"+
        "ornare sit nibh per nascetur est ut, dolor pellentesque, vehicula orci. Duis egestas nulla,"+
        "nulla ultricies sollicitudin, ipsum duis nisl inceptos nascetur. Sodales nec. Felis sed nec ligula erat fringilla arcu,"+
        "orci et dui phasellus, ut velit ut curabitur donec, wisi morbi diam consequat quis dis in. Bibendum eget quis ultricies at arcu fermentum,"+
        "facilisis aliquam, aperiam vel, odio lorem sit arcu. Lectus mollis praesent et, nam non. Lobortis mauris in sit justo arcu,"+
        "eget fusce venenatis dictum nec tristique, netus vitae pellentesque magna sodales eros erat, erat vitae lectus nunc aliquam, elit risus libero."+
        "Elementum mauris elit class, eget sit posuere congue sit. Turpis mauris mauris vestibulum egestas sit cillum, etiam at in elit turpis,"+
        "volutpat sed nulla, vel amet sit, vitae nam sed pede. </p>");
}
//London
function getTalesOutputTown2() {
    $('#cityDescription');
    $('#talesTitle').text("London");
    $('#talesData').html("<p>The day had been planned and it was finally time for our obligatory visit to the famous Camden Market. " +
        "We had already been several times so we knew very well what to expect and did not think we would be surprised, " +
        "but we would soon learn otherwise. " +
        "We started out walking down Camden High Street checking out the colourful shops and eventually ended up in the Camden Lock Market where we had a look around the many, "+
        "many food stands in search of finding just the right plate of lunch. "+
        "In all honesty, food is one of the most important things for us when traveling and we enjoy trying a little bit of everything when we are exploring food markets. "+
        "Right next to the lock, we found an even cuter food market than we had previous times and we settled on a wrap filled with chicken, cheese, veggies, and – behold – green capsicum. "+
        "We were not too impressed. Green capsicum is always too sharp in its taste, we find, but not this one! It was instant love. </p>"+

        "<p>After having found love in a vegetable, we moved on to the food market opposite the street, "+
        "right next to the canal. Here, we found more guilty pleasures. Coixinha de galinha is a Brazilian fried food. "+
        "It is shredded chicken with some kind of tempura mixture that is fried and if made right tastes like a little piece of heaven. "+
        "Another love interest was discovered! We finally managed to leave the food section, despite it being so grand, "+
        "to move onto the actual shops in the old stalls of Camden. Usually, we never really purchase anything and this was no different from that. "+
        "We did however decide to pay a visit to a psychic named Franklin who had migrated years ago from South America. In his ‘’cave’’ you could find walls covered in pictures with rituals, numbers, "+
        "astrological signs and so on that all were passed down to him from his father. After an hour of being rattled, we needed another snack! "+
        "It is quite possible that we are emotional eaters, but when a stranger reads you to perfection you need something to comfort you and yes, food just has that ability sometimes. "+
        "We went for spring rolls and they did the job. </p>"+

        "<p>Off again to walk through the market once more. It really is big! Camden surprised us. "+
        "Just as we opened a big metal door to access a different floor, we were greeted with angelic singing. "+
        "A young guy and his friend were sat on the staircase singing and playing. It was beautiful. We decided to join in on the spontaneity and sat down to have a listen. "+
        "People passed – some without even giving the guys the time of day, while others threw a little coin in their hat to encourage and pay their respects. "+
        "We found out the name of the guy was Sam Garrett and shot a video of him. We have of course asked for his permission to repost it here and him being the great, "+
        "sympathetic guy he is accepted. So here, you have a chance to listen to what we heard that rainy day in Camden. We thought we were just going to spend a few hours at the markets, "+
        "but after finding food, Franklin the psychic and a great musician, naturally we had to stay. So here is to just going with the flow and embracing what you meet. </p>");
}
//Dublin
function getTalesOutputTown3() {
    $('#talesTitle').text("Dublin");
    $('#talesData').html("<p>Lectus mollis praesent et, nam non. Lobortis mauris in sit justo arcu,"+
        "eget fusce venenatis dictum nec tristique, netus vitae pellentesque magna sodales eros erat, erat vitae lectus nunc aliquam, elit risus libero."+
        "Elementum mauris elit class, eget sit posuere congue sit. Turpis mauris mauris vestibulum egestas sit cillum, etiam at in elit turpis,"+
        "volutpat sed nulla, vel amet sit, vitae nam sed pede</p>");
}
//Copenhagen
function getTalesOutputTown4() {
    $('#talesTitle').text("Copenhagen");
    $('#talesData').html("<p>Wuhuhuhu HOMETOWN"+
        "Lorem ipsum dolor sit amet, eget consequat, vivamus lectus lectus vel in cras nonummy,"+
        "ornare sit nibh per nascetur est ut, dolor pellentesque, vehicula orci. Duis egestas nulla,"+
        "nulla ultricies sollicitudin, ipsum duis nisl inceptos nascetur.</p>");
}
//Rome
function getTalesOutputTown5() {
    $('#talesTitle').text("Rome");
    $('#talesData').html("<p>Odio lorem sit arcu. Lectus mollis praesent et, nam non. Lobortis mauris in sit justo arcu,"+
        "eget fusce venenatis dictum nec tristique, netus vitae pellentesque magna sodales eros erat, erat vitae lectus nunc aliquam, elit risus libero."+
        "Elementum mauris elit class, eget sit posuere congue sit. Turpis mauris mauris vestibulum egestas sit cillum, etiam at in elit turpis,"+
        "volutpat sed nulla, vel amet sit, vitae nam sed pede.</p>");
}
//Athens
function getTalesOutputTown6() {
    $('#talesTitle').text("Athens");
    $('#talesData').html("<p>Nascetur est ut, dolor pellentesque, vehicula orci. Duis egestas nulla,"+
        "nulla ultricies sollicitudin, ipsum duis nisl inceptos nascetur. Sodales nec. Felis sed nec ligula erat fringilla arcu,"+
        "orci et dui phasellus, ut velit ut curabitur donec, nascetur est ut, dolor pellentesque, vehicula orci. Duis egestas nulla,"+
        "nulla ultricies sollicitudin, ipsum duis nisl inceptos nascetur. Sodales nec. Felis sed nec ligula erat fringilla arcu,"+
        "orci et dui phasellus, ut velit ut curabitur donec.</p>");
}

//GLOBE GURUS
//Vienna
function getGurusOutPutTown1(){
    $('#gurusTitle').text("Vienna");
    $('#gurusData').html("<div id='viennaContent'>"+
        "<div class='col-lg-6'>"+
        "<h3>#globeguru1</h3>"+
        "<img src='http://www.arabianbusiness.com/incoming/article458225.ece/BINARY/Sir-Richard-Branson.jpg' class='globeguru' alt='Richard Branson'>"+
        "<h4>Richard Branson</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "<div class='col-lg-6'>"+
        "<h3>#globeguru2</h3>"+
        "<img src='http://channingtatum.org/wp-content/uploads/2016/04/channing-tatum.jpg' class='globeguru' alt='Channing Tatum'>"+
        "<h4>Channing Tatum</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "</div>");
}
//London
function getGurusOutPutTown2(){
    $('#gurusTitle').text("London");
    $('#gurusData').html("<div class='col-lg-3'>"+
            "<h3>#globeguru1</h3>"+
        "<img src='http://a3.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTQxNDkyNTA3MzY3MTg4MjE5.jpg' class='globeguru' alt='snowden'>"+
            "<h4>Edward Snowden</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
            "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
            "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
            "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "<div class='col-lg-3'>"+
        "<h3>#globeguru2</h3>"+
        "<img src='http://www.seoghoer.dk/sites/seoghoer.dk/files/media/94fad9e00f7442ef9f3d9c9efb010e2c.jpg' class='globeguru' alt='fieLaursen'>"+
        "<h4>Fie Laursen</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "<div class='col-lg-3'>"+
        "<h3>#globeguru3</h3>"+
        "<img src='http://static2.businessinsider.com/image/57431cad52bcd026008c4814-480/donald-trump.jpg' class='globeguru' alt='trump'>"+
        "<h4>Donald Trump</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla."+
        "</p>"+
        "</div>"+
        "<div class='col-lg-3'>"+
        "<h3 class=>#globeguru4</h3>"+
        "<img src='https://s-media-cache-ak0.pinimg.com/originals/44/7c/a9/447ca9f27b1cf568f57290d68f50cf96.jpg' class='globeguru' alt='elonMusk'>"+
        "<h4>Elon Musk</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>");
}
//Dublin
function getGurusOutPutTown3(){
    $('#gurusTitle').text("Dublin");
    $('#gurusData').html("<div id='dublinContent'>"+
        "<div class='col-lg-4'>"+
        "<h3>#globeguru1</h3>"+
        "<img src='http://www.arabianbusiness.com/incoming/article458225.ece/BINARY/Sir-Richard-Branson.jpg' class='globeguru' alt='branson'>"+
        "<h4>Richard Branson</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "<div class='col-lg-4'>"+
        "<h3>#globeguru2</h3>"+
        "<img src='http://channingtatum.org/wp-content/uploads/2016/04/channing-tatum.jpg' class='globeguru' alt='channing'>"+
        "<h4>Channing Tatum</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "<div class='col-lg-4'>"+
        "<h3>#globeguru3</h3>"+
        "<img src='http://channingtatum.org/wp-content/uploads/2016/04/channing-tatum.jpg' class='globeguru' alt='channing'>"+
        "<h4>Channing Tatum</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "</div>");
}
//Copenhagen
function getGurusOutPutTown4(){
    $('#gurusTitle').text("Copenhagen");
    $('#gurusData').html("<div id='copenhagenContent'>"+
        "<div class='col-lg-6'>"+
        "<h3>#globeguru1</h3>"+
        "<img src='http://www.billedbladet.dk/sites/billedbladet.dk/files/styles/landscape_16-9_8grid/public/media/article/bb-84529_2.jpg' class='globeguru' alt='Margrethe Vestager'>"+
        "<h4>Margrethe Vestager</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "<div class='col-lg-6'>"+
        "<h3>#globeguru2</h3>"+
        "<img src='https://www.floydianslip.com/images/slideshow/photo3.jpg' class='globeguru' alt='Pink Floyd'>"+
        "<h4>Pink Floyd</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "</div>");
}
//Rome
function getGurusOutPutTown5(){
    $('#gurusTitle').text("Rome");
    $('#gurusData').html("<div id='romeContent'>"+
        "<div class='col-lg-6'>"+
        "<h3>#globeguru1</h3>"+
        "<img src='http://www.arabianbusiness.com/incoming/article458225.ece/BINARY/Sir-Richard-Branson.jpg' class='globeguru' alt='Richard Branson'>"+
        "<h4>Richard Branson</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "<div class='col-lg-6'>"+
        "<h3>#globeguru2</h3>"+
        "<img src='http://channingtatum.org/wp-content/uploads/2016/04/channing-tatum.jpg' class='globeguru' alt='Channing Tatum'>"+
        "<h4>Channing Tatum</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "</div>");
}
//Athens
function getGurusOutPutTown6(){
    $('#gurusTitle').text("Athens");
    $('#gurusData').html("<div id='athensContent'>"+
        "<div class='col-lg-6'>"+
        "<h3>#globeguru1</h3>"+
        "<img src='http://www.arabianbusiness.com/incoming/article458225.ece/BINARY/Sir-Richard-Branson.jpg' class='globeguru' alt='Richard Branson'>"+
        "<h4>Richard Branson</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "<div class='col-lg-6'>"+
        "<h3>#globeguru2</h3>"+
        "<img src='http://channingtatum.org/wp-content/uploads/2016/04/channing-tatum.jpg' class='globeguru' alt='Channing Tatum'>"+
        "<h4>Channing Tatum</h4>"+
        "<p>Praesent vulputate ut a, massa et mauris nostra ut. Sed tincidunt consectetuer nam nulla aliquam magna,"+
        "orci purus at ac tempor quam euismod, lacus non pellentesque nam, sed sed eros, nibh lectus adipiscing pede."+
        "Nisl morbi, sed condimentum egestas rhoncus, consectetuer nulla velit ante. Quisque arcu libero dui, adipiscing suspendisse sapien lobortis quis,"+
        "curabitur sed duis tempor eu eget in, ante et sit nulla. Aut vel luctus ut ullamcorper luctus in, a nullam mi porta dolor.</p>"+
        "</div>"+
        "</div>");
}

$('.fixed-action-btn').openFAB();
$('.fixed-action-btn').closeFAB();
$('.fixed-action-btn.toolbar').openToolbar();
$('.fixed-action-btn.toolbar').closeToolbar();