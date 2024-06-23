var buttoncolor = ["red" , "blue" , "green" , "yellow"];
var gamepattern = [];
var userclickedpattern = [];

var started = false;
var level = 0;



$(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level " + level);
    nextsequence();
    started = true;
}
});

$(".btn").click(function(){
    var userchosencolor = $(this).attr("id");
    userclickedpattern.push(userchosencolor);
    playsound(userchosencolor);
    animatepress(userchosencolor);
    checkanswer(userclickedpattern.length - 1);
})

function checkanswer(currentlevel){
    if(gamepattern[currentlevel] == userclickedpattern[currentlevel]){
        console.log("success");
        if (userclickedpattern.length === gamepattern.length){

        setTimeout(function(){
            nextsequence();
        },1000);
    }
    }
    else{
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body"    ).removeClass("game-over");
        },200);
        $("h1").text("Game over, Press any key to restart");
        startover();
    }
}


function nextsequence(){
    userclickedpattern = [];
    level ++;
    $("h1").text("Level " + level );
    var n1 = Math.random();
    n1 = n1*4;
    var randomnumber = Math.floor(n1); //random number
    var randomchosencolor = buttoncolor[randomnumber];
    gamepattern.push(randomchosencolor);

    $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomchosencolor);


    }

function playsound(name){
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();  
    }

function animatepress(currentcolor){
    $("#" + currentcolor).addClass("pressed");

    setTimeout(function(){


    $("#" + currentcolor).removeClass("pressed");500
})

}

function startover(){
    level = 0;
    gamepattern = [];
    started = false;
}

