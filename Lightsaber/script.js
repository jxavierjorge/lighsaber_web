$(document).ready(function(){
    $('.blue').click(function(){
        $('.blade').css({'background-color':'blue'});
        $('.blade').css({'box-shadow':'0px 0px 18px blue'});
        $('h1').css({'text-shadow':'2px 2px 8px blue'});
    });
    $('.green').click(function(){
        $('.blade').css({'background-color':'green'});
        $('.blade').css({'box-shadow':'0px 0px 18px green'});
        $('h1').css({'text-shadow':'2px 2px 8px green'});
    });
    $('.yellow').click(function(){
        $('.blade').css({'background-color':'yellow'});
        $('.blade').css({'box-shadow':'0px 0px 18px yellow'});
        $('h1').css({'text-shadow':'2px 2px 8px yellow'});
    });
    $('.orange').click(function(){
        $('.blade').css({'background-color':'orange'});
        $('.blade').css({'box-shadow':'0px 0px 18px orange'});
        $('h1').css({'text-shadow':'2px 2px 8px orange'});
    });
    $('.red').click(function(){
        $('.blade').css({'background-color':'red'});
        $('.blade').css({'box-shadow':'0px 0px 18px red'});
        $('h1').css({'text-shadow':'2px 2px 8px red'});
    });
    $('.white').click(function(){
        $('.blade').css({'background-color':'white'});
        $('.blade').css({'box-shadow':'0px 0px 18px white'});
        $('h1').css({'text-shadow':'2px 2px 8px white'});
    });
    $('.mfk').click(function(){
        $('.blade').css({'background-color':'purple'});
        $('.blade').css({'box-shadow':'0px 0px 18px purple'});
        $('h1').css({'text-shadow':'2px 2px 8px purple'});
    });
    $('#ignite').click(function(){
        $('.blade').toggleClass('blade-active');
    });
});

//Play ignite sound
var x = document.getElementById("myAudio"); 
                
function playAudio() { 
  x.play(); 
}

function validateCheat(){
    var cheatcode = document.getElementById("cheatCode").value;
    if(cheatcode == "motherfucker!"){
        console.log("Purple lightsaber unlocked");
        $('.mfk').css({'display':'inline-block'});
        $('.s').fadeIn();
    }
    else{
        console.log("Invalid cheatcode");
    }
}