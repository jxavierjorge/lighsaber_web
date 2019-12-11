$(document).ready(function(){
    $('.blue').click(function(){
        $('.blade').css({
            'background-color':'blue',
            'box-shadow':'0px 0px 18px blue',
            'border-bottom-right-radius': '50px'
        });
        $('h1').css({
            'text-shadow':'2px 2px 8px blue',
            'color':'white'
        });
    });
    $('.green').click(function(){
        $('.blade').css({
            'background-color':'green',
            'box-shadow':'0px 0px 18px green',
            'border-bottom-right-radius': '50px'
        });
        $('h1').css({'text-shadow':'2px 2px 8px green','color':'white'});
    });
    $('.yellow').click(function(){
        $('.blade').css({
            'background-color':'yellow',
            'box-shadow':'0px 0px 18px yellow',
            'border-bottom-right-radius': '50px'
        });
        $('h1').css({'text-shadow':'2px 2px 8px yellow','color':'white'});
    });
    $('.orange').click(function(){
        $('.blade').css({
            'background-color':'orange',
            'box-shadow':'0px 0px 18px orange',
            'border-bottom-right-radius': '50px'
        });
        $('h1').css({'text-shadow':'2px 2px 8px orange','color':'white'});
    });
    $('.red').click(function(){
        $('.blade').css({
            'background-color':'red',
            'box-shadow':'0px 0px 18px red',
            'border-bottom-right-radius': '50px'
        });
        $('h1').css({'text-shadow':'2px 2px 8px red','color':'white'});
    });
    $('.white').click(function(){
        $('.blade').css({
            'background-color':'white',
            'box-shadow':'0px 0px 18px white',
            'border-bottom-right-radius': '50px'
        });
        $('h1').css({'text-shadow':'2px 2px 8px white','color':'white'});
    });
    $('.mfk').click(function(){
        $('.blade').css({
            'background-color':'purple',
            'box-shadow':'0px 0px 18px purple',
            'border-bottom-right-radius': '50px'
        });
        $('h1').css({'text-shadow':'2px 2px 8px purple','color':'white'});
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
    else if (cheatcode == "mandalorian"){
        console.log("Darksaber unlocked");
        $('.blade').css({
            'background-color':'black',
            'box-shadow':'0px 0px 18px white',
            'border-bottom-right-radius': '300px'        
        });
        $('h1').css({
            'text-shadow':'2px 2px 8px white',
            'color':'black'
        });
    }
    else{
        console.log("Invalid cheatcode");
    }
}