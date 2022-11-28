function surf(){
    select=document.getElementById("select_www").value;
    switch(select){
        case "1" :
        document.getElementById("textbox").value="https://jx.aidouer.net/?url=";
        break;
        case "2" :
        document.getElementById("textbox").value="https://jx.jsonplayer.com/player/?url=";
        break;
        case "3" :
        document.getElementById("textbox").value="https://jx.iztyy.com/svip/?url=";
        break;
        case "4" :
        document.getElementById("textbox").value="https://jx.aidouer.net/?url=";
        break;
        case "5" :
        document.getElementById("textbox").value="https://jx.parwix.com:4433/player/?url=";
        break;
        case "6" :
        document.getElementById("textbox").value="https://www.administratorw.com/video.php?url=";
        break;
        case "7" :
        document.getElementById("textbox").value="https://www.pangujiexi.cc/jiexi.php?url=";
        break;
        case "8" :
        document.getElementById("textbox").value="https://jx.jsonplayer.com/player/?url=";
        break;
        case "9" :
        document.getElementById("textbox").value="https://2.08bk.com/?url=";
        break;
        case "10" :
        document.getElementById("textbox").value="https://www.administratorw.com/video.php?url=";
        break;
        case "11" :
        document.getElementById("textbox").value="https://svip.bljiex.cc/?v=";
        break;
    }
}

function jump(){
    var textbox=document.getElementById('textbox').value;
    var textboxb=document.getElementById('textboxb').value;
    document.getElementById('textboxa').value=textbox+textboxb;

    
    location=document.getElementById("textboxa").value;
}