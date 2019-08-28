$(document).ready(function() {
    var images = '<img src="https://images-na.ssl-images-amazon.com/images/I/81jQDEIZwnL._SX425_.jpg"><img src="https://images-na.ssl-images-amazon.com/images/I/81bA%2BoCROYL._SX425_.jpg"><img src="https://previews.123rf.com/images/krisdog/krisdog1503/krisdog150300123/37848300-an-illustration-of-a-fox-animal-sports-mascot-cartoon-character-fighting.jpg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ExSjjDwvDYD5ioao1INQ4guA4eOsikHsijztF3seYbP7sCmLbw"></img>';               
    var imageNode = $('#first-fighter')[0].childNodes;
    var himDamage = $('#damage-to-him')[0].innerText;
    var youDamage = $('#damage-to-you')[0].innerText;
    var himDamageCount = 0;
    var youDamageCount = 0;
    var sharkHealth = (Math.floor(Math.random()*100)+100);
    var foxHealth = (Math.floor(Math.random()*100)+100);
    var rhinoHealth = (Math.floor(Math.random()*100)+100);
    var firstChosen = false;
    var secondChosen = false;
    var matchOn = false;
    
    $('#animals').on('click', function(event) {
        if (!matchOn) {
            if (!firstChosen) {
                var target = event.target;
                console.log(event);
                $(target).css({"display": "none"});
                $('#first-fighter').html($(target).css({"display": "block", "flex":"2", "max-width": "200px"}));
                himDamage+=" " + himDamageCount;
                $('#damage-to-him').text(himDamage);
                youDamage+=" " + youDamageCount;
                $('#damage-to-you').text(youDamage);
                firstChosen = true;
            } else {
                var target = event.target;
                $(target).css("display", "none");
                $('#second-fighter').html($(target).css({"display": "block", "flex":"2", "max-width": "200px"}));
                secondChosen = true;
                matchOn = true;
            }
        }
    });

    $('#animals').html(images);
    $('#first-fighter').html(images);

    $(imageNode).each(function() {
        $(this).css("display", "none");
    });
    
});
