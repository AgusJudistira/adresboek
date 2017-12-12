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
                            straatlocatie,
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
        this.straatlocatie=straatlocatie;
        this.huisnummer=huisnummer;
        this.postcode=postcode;
        this.plaats=plaats;
        this.land=land;    
    }
    
    this.recordToevoegen=function() {
        alert("in recordToevoegen()");
        
        formulierTonen();
    }
    
    this.inHTMLzetten=function() {
        var naam = document.forms["Formulier"]["voornaam"].value+" "+document.forms["Formulier"]["voorvoegsel"].value+" "+document.forms["Formulier"]["achternaam"].value;
        
        var div_node=document.createElement("div");
        div_node.className="eenAdres";
        var p_node=document.createElement("p");
        div_node.appendChild(p_node);
        var textnode=document.createTextNode(naam);
        p_node.appendChild(textnode);
        
        var telefoon = document.forms["Formulier"]["telefoonnummer"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        textnode = document.createTextNode(telefoon);
        p_node.appendChild(textnode);
        
        var mobiel = document.forms["Formulier"]["mobielnummer"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        textnode = document.createTextNode(mobiel);
        p_node.appendChild(textnode);
        
        var email = document.forms["Formulier"]["email"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        textnode = document.createTextNode(email);
        p_node.appendChild(textnode);
        
        var website = document.forms["Formulier"]["website"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        textnode = document.createTextNode(website);
        p_node.appendChild(textnode);
        
        var straatLocatie = document.forms["Formulier"]["straatlocatie"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        textnode = document.createTextNode(straatLocatie);
        p_node.appendChild(textnode);
        
        var postcode = document.forms["Formulier"]["postcode"].value;
        var plaats = document.forms["Formulier"]["plaats"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        textnode = document.createTextNode(postcode+" "+plaats);
        p_node.appendChild(textnode);
        
        var land = document.forms["Formulier"]["land"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        textnode = document.createTextNode(land);
        p_node.appendChild(textnode);
        
        document.getElementById("adressenContainer").appendChild(div_node);
        
        formulierVerbergen();    
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
    adres.vulRecord("Voornaam",
                   "Achternaam",
                   "voorvoegsel",
                   "123-1234567",
                   "06-12345678",
                   "iemand@provider.nl",
                   "www.website.nl",
                   "Grote Straat",
                   "99c",
                   "9999 XZ",
                   "BigCity",
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
   
    document.getElementById("mutatieFormulier").style.display = "flex";
}

function formulierVerbergen() {
    
    document.getElementById("mutatieFormulier").style.display = "none";
}

var adres;
window.onload = startAdresboek();