/*    this.voornaam="voornaam";
    this.achternaam="achternaam";
    this.voorvoegsel="voorvoegsel";
    this.telefoonnummer="010-1234567";
    this.mobielnummer="06-12345678";
    this.email=email="mail@provider.nl";
    this.straat=straat="straatnaam";
    this.huisnummer="huisnummer";
    this.postcode="postcode";
    this.plaats="plaats";
    this.land="land";
*/
/* eslint-env browser */ //dit is echt nodig om onterechte Brackets foutmeldingen te onderdrukken.
/* global document */ // een andere variant om onterechte Brackets foutmeldingen te onderdrukken
   
function AdresRecord() {
    this.vulRecord=function(voornaam,
                            achternaam,
                            voorvoegsel,
                            telefoonnummer,
                            mobielnummer,
                            email,
                            website,
                            straat,
                            huisnummer,
                            postcode,
                            plaats,
                            land) {
        this.voornaam=voornaam;
        this.achternaam=achternaam;
        this.voorvoegsel=voorvoegsel;
        this.telefoonnummer=telefoonnummer;
        this.mobielnummer=mobielnummer;
        this.email=email;
        this.website=website;
        this.straat=straat;
        this.huisnummer=huisnummer;
        this.postcode=postcode;
        this.plaats=plaats;
        this.land=land;    
    }
    
    this.recordToevoegen=function() {
        alert("in recordToevoegen()");
        
        formulierTonen();
    }
    
    this.recordMuteren=function() {
        alert("Adres muteren");

        var groepAdressen = document.getElementsByClassName('eenAdres');
        for (var i = 0; i < groepAdressen.length; i++)
        {
            (function(index){
                groepAdressen[i].onclick = function(){
                      alert(index);
                }    
            })(i);
        }
    }

}

function startAdresboek() {
    initialiseren();
    formulierVerbergen();
}

function initialiseren() {
    adres = new AdresRecord();
    adres.vulRecord("Agus",
                   "Judistira",
                   "",
                   "050-3113638",
                   "06-30478568",
                   "am.judistira@telfort.nl",
                   "www.website.nl",
                   "Dorus Rijkersstraat",
                   "2A",
                   "9726 JP",
                   "Groningen",
                   "Nederland");
    
    var elem = document.getElementsByClassName("eenAdres");
    elem[0].innerHTML = adres.voornaam+" "+adres.voorvoegsel+" "+adres.achternaam+"<br />";
    elem[0].innerHTML += adres.telefoonnummer+"<br />";
    elem[0].innerHTML += adres.mobielnummer+"<br />";
    elem[0].innerHTML += adres.email+"<br />";
    elem[0].innerHTML += adres.website+"<br />";
    elem[0].innerHTML += adres.straat+" "+adres.huisnummer+"<br />";
    elem[0].innerHTML += adres.postcode+" "+adres.plaats+"<br />";
    elem[0].innerHTML += adres.land+"<br />";
    alert("is geinitialiseerd");
}


function formulierTonen() {
   
    document.getElementById("mutatieFormulier").style.display = "block";
    
}

function formulierVerbergen() {
    
    document.getElementById("mutatieFormulier").style.display = "none";
}

var adres;
window.onload = startAdresboek();