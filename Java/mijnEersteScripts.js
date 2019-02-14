   function checkPass()
    {
   // definiëer de wachtwoord-ID's in variabelen
    var pass1 = document.getElementById('psw1');
    var pass2 = document.getElementById('bpsw2');
    //definiëer OKofNOK-id in variabele
    var message = document.getElementById('OKofNOK');
    //Variabelen van de te gebruiken kleuren
    var goodColor = "#66cc66"; //groen
    var badColor = "#ff6666"; //rood
    //Vergelijk psw1 met bpsw2
    if(pass1.value == pass2.value){
        //Bevestiging komt overeen. 
        pass2.style.backgroundColor = goodColor;
        message.style.color = "#ffffff";
        message.innerHTML = "OK!";
        pass2.style.backgroundColor = "#bfbfbf";
    }else{
        //Bevestiging niet OK
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "NOT OK!";
    }
    }
    function mouseoverPass()
    {
    var pas = document.getElementById('psw1');
    var bpas = document.getElementById('bpsw2');
    var textpas = document.getElementById('txtpassword');
    pas.type = "text";
    bpas.type = "text";
        }
    function mouseoutPass()
    {
    var pas = document.getElementById('psw1');
    var bpas = document.getElementById('bpsw2');
    var textpas = document.getElementById('txtpassword');
    pas.type = "password";
    bpas.type = "password";
    }
