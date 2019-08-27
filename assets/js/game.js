$(document).ready(function() {
    var images = '<img src="https://images-na.ssl-images-amazon.com/images/I/81jQDEIZwnL._SX425_.jpg"><img src="https://images-na.ssl-images-amazon.com/images/I/81bA%2BoCROYL._SX425_.jpg"><img src="https://previews.123rf.com/images/krisdog/krisdog1503/krisdog150300123/37848300-an-illustration-of-a-fox-animal-sports-mascot-cartoon-character-fighting.jpg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ExSjjDwvDYD5ioao1INQ4guA4eOsikHsijztF3seYbP7sCmLbw"></img>';               
    var imageNode = $('#first-fighter')[0].childNodes;
    var himDamage = $('#damage-to-him')[0].innerText;
    var himDamageCount = 0;
    var firstChosen = false;
    var secondChosen = false;
    
    $('#animals').on('click', function(event) {
        if (!firstChosen) {
            var target = event.target;
            console.log(event);
            $(target).css({"display": "none"});
            $('#first-fighter').html($(target).css({"display": "block", "flex":"2", "width": "100%"}));
            himDamage+=" " + himDamageCount;
            $('#damage-to-him').text(himDamage);
            firstChosen = true;
        } else {
            var target = event.target;
            $(target).css("display", "none");
            $('#second-fighter').html($(target).css({"display": "block", "flex":"2", "width": "100%"}));
            secondChosen = true;
        }
    });

    $('#animals').html(images);
    $('#first-fighter').html(images);

    $(imageNode).each(function() {
        $(this).css("display", "none");
    });
    
});
