$(document).ready(function() {
    var images = '<img id="shark" src="https://images-na.ssl-images-amazon.com/images/I/81jQDEIZwnL._SX425_.jpg"><img id="rooster" src="https://images-na.ssl-images-amazon.com/images/I/81bA%2BoCROYL._SX425_.jpg"><img id="fox" src="https://previews.123rf.com/images/krisdog/krisdog1503/krisdog150300123/37848300-an-illustration-of-a-fox-animal-sports-mascot-cartoon-character-fighting.jpg"><img id="rhino" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ExSjjDwvDYD5ioao1INQ4guA4eOsikHsijztF3seYbP7sCmLbw"></img>';               
    var imageNode = $('#first-fighter')[0].childNodes;
    var himDamage = $('#damage-to-him')[0].innerText;
    var youDamage = $('#damage-to-you')[0].innerText;
    var youHealth = $('#you-health')[0].innerText;
    var himHealth = $('#him-health')[0].innerText;
    var sharkHealth = (Math.floor(Math.random()*100)+100);
    var sharkDamage = (Math.floor(Math.random()*10)+1);
    var foxHealth = (Math.floor(Math.random()*100)+100);
    var foxDamage = (Math.floor(Math.random()*10)+1);
    var rhinoHealth = (Math.floor(Math.random()*100)+100);
    var rhinoDamage = (Math.floor(Math.random()*10)+1);
    var roosterHealth = (Math.floor(Math.random()*100)+100);
    var roosterDamage = (Math.floor(Math.random()*10)+1);
    var yourHealth = 0;
    var oppHealth = 0;
    var matchesCompleted = 0;
    var chosenAnimals = 0;
    var firstChosen = false;
    var secondChosen = false;
    var matchOn = false;
    var yourAttackCounter = 1;
    
    $('#animals').on('click', function(event) {
        if (!matchOn) {
            if (!firstChosen) {
                var target = event.target;
                $(target).css({"display": "none"});
                $('#first-fighter').html($(target).css({"display": "block", "flex":"2", "max-width": "200px"}));
                if (event.target.id === "shark") {
                    $('#you-health').append(sharkHealth);
                    yourHealth = sharkHealth;
                } else if (event.target.id === "rhino") {
                    $('#you-health').append(rhinoHealth);
                    yourHealth = rhinoHealth;
                } else if (event.target.id === "fox") {
                    $('#you-health').append(foxHealth);
                    yourHealth = foxHealth;
                } else {
                    $('#you-health').append(roosterHealth);
                    yourHealth = roosterHealth;
                }
                chosenAnimals++;
                console.log(chosenAnimals);
                firstChosen = true;              
            } else {
                var target = event.target;
                $(target).css("display", "none");
                $('#second-fighter').html($(target).css({"display": "block", "flex":"2", "max-width": "200px"}));
                if (event.target.id === "shark") {
                    $('#him-health').append(sharkHealth);
                    oppHealth = sharkHealth;
                } else if (event.target.id === "rhino") {
                    $('#him-health').append(rhinoHealth);
                    oppHealth = rhinoHealth;
                } else if (event.target.id === "fox") {
                    $('#him-health').append(foxHealth);
                    oppHealth = foxHealth;
                } else {
                    $('#him-health').append(roosterHealth);
                    oppHealth = roosterHealth;
                }
                chosenAnimals++;
                console.log(chosenAnimals);
                secondChosen = true;
                matchOn = true;
            }
        }
        if (chosenAnimals > 3) {
            $('#animals').html("");
        }
    });

    $('#animals').html(images);
    $('#first-fighter').html(images);

    $(imageNode).each(function() {
        $(this).css("display", "none");
    });

    $('button').on('click', function() {
      if (secondChosen && oppHealth > 0) {
        var oppAttack = (Math.floor(Math.random()*10)+1);
        var yourAttack = (Math.floor(Math.random()*19)+1)*yourAttackCounter;
        yourAttackCounter++;
        oppHealth-=yourAttack;
        yourHealth-=oppAttack;
        $('#damage-to-you').text("Damage caused by his attack: " + oppAttack);
        $('#damage-to-him').text("Damage caused by your attack: " + yourAttack);
        $('#you-health').text("Your remaining health: " + yourHealth);
        $('#him-health').text("Your opponent's health: " + oppHealth);
        if (oppHealth < 0.5) {
            $('#announcements').text("You win!");
            matchesCompleted++;
            setTimeout(function() {
                secondChosen = false;
                matchOn = false;
                yourAttackCounter = 1;
                $('#second-fighter').css("opacity", "0");
                $('#announcements').text("Announcements");
                $('#him-health').text("Your opponent's health: ");
            }, 1500);
            $('#damage-to-you').text("Damage caused by his attack: ");
            $('#damage-to-him').text("Damage caused by your attack: ");
            $('#animals').on('click', function(event) {
                    secondChosen = true;
                    matchOn = true;
                    var target = event.target;
                    $(target).css("display", "none");
                    // $('#second-fighter').css();
                    $('#second-fighter').css({"opacity": "1", "display": "block"}).html($(target).css({"display": "block", "flex":"2", "width": "100%", "max-width": "200px"}));
                    if (event.target.id === "shark") {
                        $('#him-health').text("Your opponent's health: " + sharkHealth);
                        oppHealth = sharkHealth;
                    } else if (event.target.id === "rhino") {
                        $('#him-health').text("Your opponent's health: " + rhinoHealth);
                        oppHealth = rhinoHealth;
                    } else if (event.target.id === "fox") {
                        $('#him-health').text("Your opponent's health: " + foxHealth);
                        oppHealth = foxHealth;
                    } else {
                        $('#him-health').text("Your opponent's health: " + roosterHealth);
                        oppHealth = roosterHealth;
                    }
            });
            if (matchesCompleted > 2) {
                setTimeout(function() {
                    $('#second-fighter').css({"display": "block", "opacity": "1"}).html("<h2>You beat everyone. Congrats!</h2>");
                    $('#announcements').css("display", "none");
                    $('#vs').css({"display": "none", "border-color": "white"});
                }, 1500);
            }
        }
      } 
    });
});
