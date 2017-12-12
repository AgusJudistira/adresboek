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
    
    this.formulierTonen=function() {
        document.getElementById("mutatieFormulier").style.display = "flex";
    }
    
    this.formulierVerbergen=function() {
        document.getElementById("mutatieFormulier").style.display = "none";  
    }
    
    this.inHTMLzetten=function() {
        // <span> nodes zijn onder <p> nodes ingevoegd om elk waarde addesseerbaar te maken.
                
        var div_node=document.createElement("div");
        div_node.className="eenAdres";
        var p_node=document.createElement("p");
        div_node.appendChild(p_node);
        
        var span_node = document.createElement("span");
        var textnode = document.createTextNode(document.forms["Formulier"]["voornaam"].value+" ");
        span_node.appendChild(textnode);
        p_node.appendChild(span_node);
        
        span_node = document.createElement("span");
        textnode = document.createTextNode(document.forms["Formulier"]["voorvoegsel"].value+" ");
        span_node.appendChild(textnode);
        p_node.appendChild(span_node);

        span_node = document.createElement("span");
        textnode = document.createTextNode(document.forms["Formulier"]["achternaam"].value);
        span_node.appendChild(textnode);        
        p_node.appendChild(span_node);
        
        var telefoon = document.forms["Formulier"]["telefoonnummer"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(telefoon);
        span_node.appendChild(textnode);
        
        var mobiel = document.forms["Formulier"]["mobielnummer"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(mobiel);
        span_node.appendChild(textnode);
        
        var email = document.forms["Formulier"]["email"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(email);
        span_node.appendChild(textnode);
        
        var website = document.forms["Formulier"]["website"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(website);
        span_node.appendChild(textnode);
        
        var straatLocatie = document.forms["Formulier"]["straatlocatie"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(straatLocatie);
        span_node.appendChild(textnode);
                
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        
        span_node = document.createElement("span");
        textnode = document.createTextNode(document.forms["Formulier"]["postcode"].value);
        span_node.appendChild(textnode);
        p_node.appendChild(span_node);
        
        span_node = document.createElement("span");
        textnode = document.createTextNode(document.forms["Formulier"]["plaats"].value);
        span_node.appendChild(textnode);
        p_node.appendChild(span_node);
        
        var land = document.forms["Formulier"]["land"].value;
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(land);
        span_node.appendChild(textnode);
        
        document.getElementById("adressenContainer").appendChild(div_node);
        
        this.formulierVerbergen();
        var invulFormulier = document.getElementsByName("Formulier");
        invulFormulier[0].reset(); // Formulier moet schoongemaakt worden. Klaar voor volgende invoer.
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
    adres.formulierVerbergen();
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
/*

function formulierTonen() {
   
    document.getElementById("mutatieFormulier").style.display = "flex";
}

function formulierVerbergen() {
    
    document.getElementById("mutatieFormulier").style.display = "none";
}*/

var adres;
window.onload = startAdresboek();