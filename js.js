var csuszka = document.getElementById("slider");
var csuszkaertek = document.getElementById("mutato");
csuszkaertek.innerHTML = csuszka.value;
csuszka.oninput = function() {
    csuszkaertek.innerHTML = this.value;
}


function Ertekel() {
    var osszpont = 0;
    var elsofelpont = 0;
    var ejo=document.getElementById("elsoharom").checked;
    var erossz1=document.getElementById("elsoegy").checked;
    var erossz2=document.getElementById("elsoketto").checked;
    var erossz3=document.getElementById("elsonegy").checked;
    if (ejo) {
        elsofelpont += 2;
    }
    else if(erossz1 || erossz2 || erossz3) {
        elsofelpont -= 1;
    }

    var masodikfelpont = 0;
    var mjo = document.getElementById("zempleni").value;
    if (mjo == 4)
    {
        masodikfelpont += 2;
    }
    else if(mjo > 0)
    {
        masodikfelpont -=1;
    }

    var harmadikfelpont = 0;
    var hjo1 = document.getElementById("bud").checked;
    var hjo2 = document.getElementById("ger").checked;
    var hjo3 = document.getElementById("keszt").checked;
    var hjo4 = document.getElementById("pil").checked;
    var hjo5 = document.getElementById("vér").checked;
    var hrossz1 = document.getElementById("mecs").checked;
    var hrossz2 = document.getElementById("cser").checked;
    var hrossz3 = document.getElementById("zsel").checked;

    if (hjo1 && hjo2 && hjo3 && hjo4 && hjo5)
    {
        harmadikfelpont = 8;
    }
    else
    {
        
            if (hjo1)
        {
            harmadikfelpont += 1;
        }
            if (hjo2)
        {
            harmadikfelpont += 1;
        }
            if (hjo3)
        {
            harmadikfelpont += 1;
        }
            if (hjo4)
        {
            harmadikfelpont += 1;
        }
            if (hjo5)
        {
            harmadikfelpont += 1;
        }
    }

    if (hrossz1)
    {
        harmadikfelpont -= 1;
    }
    if (hrossz2)
    {
        harmadikfelpont -= 1;
    }
    if (hrossz3)
    {
        harmadikfelpont -= 1;
    }
    if (harmadikfelpont < 0)
    {
        harmadikfelpont = 0;
    }

    var negyedikfelpont = 0;
    var njo = document.getElementById("galya").value;
    if (njo == "Mátra" || njo == "mátra" || njo == "matra" || njo == "Matra")
    {
        negyedikfelpont += 2;
    }

    var otodikfelpont = 0;
    var ojo = document.getElementById("bukk1").checked;
    var orossz1 = document.getElementById("bukk2").checked;
    var orossz2 = document.getElementById("bukk3").checked;
    var orossz3 = document.getElementById("bukk4").checked;

    if (ojo)
    {
        otodikfelpont += 2;
    }
    if (orossz1)
    {
        otodikfelpont -=1;
    }
    if (orossz2)
    {
        otodikfelpont -=1;
    }
    if (orossz3)
    {
        otodikfelpont -=1;
    }

    var hatodikfelpont = 0;
    var hjo = document.getElementById("slider").value == 882;
    if (hjo)
    {
        hatodikfelpont += 2;
    }

    var hetedikfelpont = 0;
    var hejo = document.getElementById("ezer").value;
    if (hejo == 1)
    {
        hetedikfelpont += 2;
    }
    else if (hejo == 0){
        hetedikfelpont = 0;
    }
    else {
        hetedikfelpont -= 1;
    }

    osszpont = elsofelpont + masodikfelpont + harmadikfelpont + negyedikfelpont + otodikfelpont + hatodikfelpont + hetedikfelpont;

    if (osszpont < 0)
    {
        osszpont = 0;
    }

    if (osszpont >= 18)
    {
        window.alert(osszpont+" a pontjaid száma, kiváló!");
    }
    else if (osszpont >= 15)
    {
        window.alert(osszpont+" a pontjaid száma, ügyes!");
    }
    else if (osszpont >=10)
    {
        window.alert(osszpont+" a pontjaid száma, átlagos!");
    }
    else if (osszpont >= 5)
    {
        window.alert(osszpont+" a pontjaid száma, nem túl jó!");
    }
    else {
        window.alert(osszpont+" a pontjaid száma, problémás!");
    }

    
}

