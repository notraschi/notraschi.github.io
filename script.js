$(document).ready(function () {
    //player win conditions and tie and bot ecc
    var playerWC = [0.5, 0.6666666666666666, 3];
    var botWC = [2, 1.5, 0.3333333333333333];
    var tie = 1;
    var pWin = 0;
    var bWin = 0;

    //capire che card ha pigiato il player
    $(".player").click(function (player) { 
        var playerCard = parseInt($(this).html());
    
        //now we need a rand number between 1 and 3 + make bot choice visible
        var botCard = Math.floor(Math.random() * 3) + 1;
        if(botCard == 1){$("#rockB").css("background-color", "rgb(250, 119, 71)")};
        if(botCard == 2){$("#paperB").css("background-color", "rgb(250, 119, 71)")};
        if(botCard == 3){$("#scissorsB").css("background-color", "rgb(250, 119, 71)")};

        //now lets see who wins + give the message
        if (playerWC.includes(botCard/playerCard)){
            $("#span").html("player wins!");
            setTimeout(function(){$("#span").html("go on! click again!")}, 1500);
            setTimeout(function(){$(".bot").css("background-color", "lightsalmon")}, 1500);
            pWin++;
            $(".pWin").html(pWin);
        }
        if (botWC.includes(botCard/playerCard)){
            $("#span").html("bot wins!");
            setTimeout(function(){$("#span").html("go on! click again!")}, 1500);
            setTimeout(function(){$(".bot").css("background-color", "lightsalmon")}, 1500);
            bWin++;
            $(".bWin").html(bWin);
        }
        else if (botCard/playerCard === tie){
            $("#span").html("lol its a tie");
            setTimeout(function(){$("#span").html("go on! click again!")}, 1500);
            setTimeout(function(){$(".bot").css("background-color", "lightsalmon")}, 1500);
        }
    });
});