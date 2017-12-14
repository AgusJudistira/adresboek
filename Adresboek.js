/* eslint-env browser */ //dit is echt nodig om onterechte Brackets foutmeldingen te onderdrukken.
/* global document */ // een andere variant om onterechte Brackets foutmeldingen te onderdrukken
   
function AdresRecord() {
    //vulRecord is alleen maar om te initialiseren in de testfase.
    this.vulRecord=function(voornaam,
                            achternaam,
                            voorvoegsel,
                            telefoonnummer,
                            mobielnummer,
                            email,
                            website,
                            straatlocatie,                            
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
        // <span> nodes zijn onder <p> nodes ingevoegd om elk veld addesseerbaar te maken. <p> nodes zijn puur voor de opmaak.
        /*this.vulRecord(document.forms["Formulier"]["voornaam"].value,
                       document.forms["Formulier"]["achternaam"].value,
                       document.forms["Formulier"]["voorvoegsel"].value,
                       document.forms["Formulier"]["telefoonnummer"].value,
                       document.forms["Formulier"]["mobielnummer"].value),
                       document.forms["Formulier"]["email"].value,
                       document.forms["Formulier"]["website"].value,
                       document.forms["Formulier"]["straatlocatie"].value,
                       document.forms["Formulier"]["postcode"].value,
                       document.forms["Formulier"]["plaats"].value,
                       document.forms["Formulier"]["land"].value);*/
                
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
        textnode = document.createTextNode(document.forms["Formulier"]["postcode"].value + " ");
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
        
        var elem=document.getElementsByClassName("eenAdres");
        if (elem[0].innerHTML != eersteHTMLAdres) { // als er al eerder adressen zijn ingevoerd
            // nieuwe adres toevoegen
            document.getElementById("adressenContainer").appendChild(div_node);
        }
        else {
            // bestaande melding vervangen door het nieuwe adres
            
            //elem[0] = div_node;
            elem[0].parentElement.replaceChild(div_node,elem[0]);
        }
        
        this.bewaarAdressen();
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
    
    this.bewaarAdressen = function() {
        //var adressen = document.getElementsByClassName("eenAdres");
        var adressen = document.getElementById("adressenContainer").innerHTML;
        
        localStorage.setItem("alleAdressen", JSON.stringify(adressen)); 
        alert(JSON.stringify(adressen));
    }
    
    this.laadAdressen = function() {
        var bewaardeAdressen = JSON.parse(localStorage.getItem("alleAdressen"));
        console.log(bewaardeAdressen);
        /*for (var i=0;i<bewaardeAdressen.length;i++) {
            console.log(bewaardeAdressen[i]);
        }*/
        
        document.getElementById("adressenContainer").innerHTML = bewaardeAdressen;
        alert("Adressen geladen");
    }
    
}

function startAdresboek() {
    initialiseren();
    adres.formulierVerbergen();
    
}

function initialiseren() {
    
    eersteHTMLAdres = document.getElementsByClassName("eenAdres")[0].innerHTML;
    
    if (typeof(Storage) !== "undefined") { // als de browser localStorage ondersteunt
        // Laden met localStorage
        
        adres = new AdresRecord();
        
        var bewaardeAdressen = JSON.parse(localStorage.getItem("alleAdressen"));
        //alert("localStorage.length: "+localStorage.length);
        
        if (bewaardeAdressen === null) { // als er geen adressen zijn opgeslagen
            alert("Er zijn geen opgeslagen adressen");
            var elem = document.getElementsByClassName("eenAdres");
            elem[0].innerHTML="Er zijn nog geen adressen ingevoerd.";
            
            /* adres.vulRecord("Voornaam",
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
            elem[0].innerHTML += adres.land+"<br />"; */
        }
        else {
            // adressenContainer vullen met opslag
            adres.laadAdressen();            
        }
        alert("is geinitialiseerd");
    } else {
        // Sorry! Geen opslagmogelijkheid.
        alert("Gegevens kunnen niet opgeslagen worden op deze browser!\n"
            +"Adresboek kan hier niet op werken.");
        
    }
 
}

var eersteHTMLAdres;
var adres;
window.onload = startAdresboek();
//window.onunload = adres.bewaarAdressen();