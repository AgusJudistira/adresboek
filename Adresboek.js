/* eslint-env browser */ //dit is echt nodig om onterechte Brackets foutmeldingen te onderdrukken.
/* global document */ // een andere variant om onterechte Brackets foutmeldingen te onderdrukken
   
function AdresRecord() {
    //vulRecord is alleen maar om te initialiseren in de testfase, waar de functie om adressen in te voeren nog ontbreekt.
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
    
    this.invFormulierTonen=function() {
        document.getElementById("invoerFormulier").style.display = "flex";
    }
    
    this.invFormulierVerbergen=function() {
        document.getElementById("invoerFormulier").style.display = "none";  
    }
    
    this.mutFormulierTonen=function() {
        document.getElementById("mutatieFormulier").style.display = "flex";
        alert("Mutatie formulier getoond");
    }
    
    this.mutFormulierVerbergen=function() {
        document.getElementById("mutatieFormulier").style.display = "none";  
    }        

    
    this.inHTMLtoevoegen=function() {
        // Deze methode zet de formulierwaarden in HTML.
        // HTML is de database in dit geval. We hebben geen PHP & MySQL tot onze beschikking in deze studieopdracht.
        // <span> nodes zijn onder <p> nodes ingevoegd. Sommige velden wil ik naast elkaar presenteren, waardoor <span> nodes nodig zijn.
        
        /*this.vulRecord(document.forms["invFormulier"]["voornaam"].value,
                       document.forms["invFormulier"]["achternaam"].value,
                       document.forms["invFormulier"]["voorvoegsel"].value,
                       document.forms["invFormulier"]["telefoonnummer"].value,
                       document.forms["invFormulier"]["mobielnummer"].value),
                       document.forms["invFormulier"]["email"].value,
                       document.forms["invFormulier"]["website"].value,
                       document.forms["invFormulier"]["straatlocatie"].value,
                       document.forms["invFormulier"]["postcode"].value,
                       document.forms["invFormulier"]["plaats"].value,
                       document.forms["invFormulier"]["land"].value);*/
                  
/*
        Schema ter verduidelijking:
        <div classname="eenAdres">
            <p>
                <span>
                    voornaam
                </span>
                <span>
                    voorvoegsel
                </span>
                <span>
                    achternaam
                </span>
            </p>
            <p>
                <span>
                    telefoon
                </span>
            </p>
            <p>
                <span>
                    mobiele telefoon
                </span>
            </p>
            <p>    
                <span>
                    email
                </span>
            </p>
            <p>    
                <span>
                    website
                </span>
            </p>
            <p>    
                <span>
                    straatlocatie (straat + nummer)
                </span>
            </p>
            <p>
                <span>
                    postcode
                </span>
                <span>
                    plaats
                </span>        
            </p>
            <p>    
                <span>
                    land
                </span>
            </p>        
        </div>
*/
        var div_node=document.createElement("div");
        div_node.className="eenAdres";
        
        var p_node=document.createElement("p");
        div_node.appendChild(p_node);
        
        var span_node = document.createElement("span");
        var textnode = document.createTextNode(document.forms["invFormulier"]["voornaam"].value.trim());
        span_node.appendChild(textnode);
        p_node.appendChild(span_node);
        
        span_node = document.createElement("span");
        textnode = document.createTextNode(" "+document.forms["invFormulier"]["voorvoegsel"].value.trim()+" ");
        span_node.appendChild(textnode);
        p_node.appendChild(span_node);

        span_node = document.createElement("span");
        textnode = document.createTextNode(document.forms["invFormulier"]["achternaam"].value.trim());
        span_node.appendChild(textnode);        
        p_node.appendChild(span_node);
        
        var telefoon = document.forms["invFormulier"]["telefoonnummer"].value.trim();
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(telefoon);
        span_node.appendChild(textnode);
        
        var mobiel = document.forms["invFormulier"]["mobielnummer"].value.trim();
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(mobiel);
        span_node.appendChild(textnode);
        
        var email = document.forms["invFormulier"]["email"].value.trim();
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(email);
        span_node.appendChild(textnode);
        
        var website = document.forms["invFormulier"]["website"].value.trim();
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(website);
        span_node.appendChild(textnode);
        
        var straatLocatie = document.forms["invFormulier"]["straatlocatie"].value.trim();
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(straatLocatie);
        span_node.appendChild(textnode);
                
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        
        span_node = document.createElement("span");
        textnode = document.createTextNode(document.forms["invFormulier"]["postcode"].value.trim() + "  ");
        span_node.appendChild(textnode);
        p_node.appendChild(span_node);
        
        span_node = document.createElement("span");
        textnode = document.createTextNode(document.forms["invFormulier"]["plaats"].value.trim());
        span_node.appendChild(textnode);
        p_node.appendChild(span_node);
        
        var land = document.forms["invFormulier"]["land"].value.trim();
        p_node = document.createElement("p");
        div_node.appendChild(p_node);
        span_node = document.createElement("span");
        p_node.appendChild(span_node);
        textnode = document.createTextNode(land);
        span_node.appendChild(textnode);
        
        //div_node.addEventListener("click",this.muteren());
        
        if (adressenOpgeslagen) { // als er al eerder adressen zijn ingevoerd
            // nieuwe adres aan bestaande rij adressen toevoegen
            document.getElementById("adressenContainer").appendChild(div_node);
        }
        else {
            // bestaande "Er zijn nog geen adressen ingevoerd." melding vervangen door het nieuwe adres
            var elem=document.getElementsByClassName("eenAdres");  
            elem[0].parentElement.replaceChild(div_node,elem[0]); //elem[0] = div_node;
        }
        
        this.bewaarAdressen();
        this.invFormulierVerbergen();
        var invulFormulier = document.getElementsByName("invFormulier");
        invulFormulier[0].reset(); // Formulier moet schoongemaakt worden. Klaar voor volgende invoer.
        alert("invulFormulier gereset");
        this.addEventMuteren(); // Maak event aan om bij het aanklikken van dit adress een muteer functie te activeren. Dit moet gedaan worden nadat de formulier verborgen is. Anders werkt het niet.
    }
    

    this.addEventMuteren = function() {
        // als een adres aangemaakt is, dan moet er ook een click event aan toegevoegd worden zodat wanneer een adres aangeklikt wordt, er een mutatieformulier tevoorschijn komt met gegevens van het aangeklikte adres.
        alert("Add event muteren");

        var groepAdressen = document.getElementsByClassName('eenAdres');
        alert("Aantal adressen: "+groepAdressen.length);

        for (var i = 0, len = groepAdressen.length; i < len; i++)
        {               
            (function(index){
                if (!groepAdressen[i].hasAttribute("onclick")) { // voeg het alleen maar toe wanneer het er nog niet is.
                    groepAdressen[i].onclick = function(){
                        alert("index: "+index);
                        // Het index is belangrijk. Hier wordt m.b.v. de index de juiste node uit de node array "groepAdressen" gehaald en doorgegeven aan de "muteren" functie
                        adresNode = groepAdressen[index];
                        muteren();
                    }    
                }
            })(i);
        }
    }    
    
    
    this.inHTMLwijzigen = function() {
        alert("in inHTML wijzigen");
        
        var nodeLoper = adresNode.firstChild.firstChild; // de voornaam
        nodeLoper.innerHTML = document.forms["mutFormulier"]["voornaam"].value.trim();
        console.log("Voornaam: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.nextSibling; // voorvoegsel
        nodeLoper.innerHTML = " "+document.forms["mutFormulier"]["voorvoegsel"].value.trim();
        console.log("voorvoegsel: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.nextSibling; // de achternaam
        nodeLoper.innerHTML = document.forms["mutFormulier"]["achternaam"].value.trim();
        console.log("achternaam: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // telefoonnummer
        nodeLoper.innerHTML = document.forms["mutFormulier"]["telefoonnummer"].value.trim();
        console.log("telefoon: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // mobielnummer
        console.log("mobiele telefoon: "+nodeLoper.innerHTML);
        nodeLoper.innerHTML = document.forms["mutFormulier"]["mobielnummer"].value.trim();
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // email
        console.log("email: "+nodeLoper.innerHTML);
        nodeLoper.innerHTML = document.forms["mutFormulier"]["email"].value.trim();
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // website
        nodeLoper.innerHTML = document.forms["mutFormulier"]["website"].value.trim();
        console.log("website: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // straatlocatie
        nodeLoper.innerHTML = document.forms["mutFormulier"]["straatlocatie"].value.trim();
        console.log("straat + nummer: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // postcode
        nodeLoper.innerHTML = document.forms["mutFormulier"]["postcode"].value.trim()+"  ";
        console.log("postcode: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.nextSibling; // woonplaats
        nodeLoper.innerHTML = document.forms["mutFormulier"]["plaats"].value.trim();
        console.log("woonplaats: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // land
        console.log("land: "+nodeLoper.innerHTML);
        nodeLoper.innerHTML = document.forms["mutFormulier"]["land"].value.trim();
        
        this.bewaarAdressen();
        adres.mutFormulierVerbergen();
    }

    this.verwijderen = function() {
        
    }
    
    this.bewaarAdressen = function() {
        var adressen = document.getElementById("adressenContainer").innerHTML;
        
        localStorage.setItem("alleAdressen", JSON.stringify(adressen));
        adressenOpgeslagen = true;
    }
    
    this.laadAdressen = function() {
        var bewaardeAdressen = JSON.parse(localStorage.getItem("alleAdressen"));
        
        document.getElementById("adressenContainer").innerHTML = bewaardeAdressen;
        alert("Adressen geladen");
    }
    
}

function muteren() { // deze functie moet helaas buiten het object geplaatst worden, anders werkt het niet. Reden (nog) onbekend.
    /*
    Schema ter verduidelijking:
    <div classname="eenAdres">
        <p>
            <span>
                voornaam
            </span>
            <span>
                voorvoegsel
            </span>
            <span>
                achternaam
            </span>
        </p>
        <p>
            <span>
                telefoon
            </span>
        </p>
        <p>
            <span>
                mobiele telefoon
            </span>
        </p>
        <p>    
            <span>
                email
            </span>
        </p>
        <p>    
            <span>
                website
            </span>
        </p>
        <p>    
            <span>
                straatlocatie (straat + nummer)
            </span>
        </p>
        <p>
            <span>
                postcode
            </span>
            <span>
                plaats
            </span>        
        </p>
        <p>    
            <span>
                land
            </span>
        </p>        
    </div>
    */
    // Vul het mutatieformulier in met bestaande adresgegevens die gewijzigd moeten worden
    alert("in functie muteren");
    var nodeLoper = adresNode.firstChild.firstChild; // de voornaam
    document.forms["mutFormulier"]["voornaam"].value = nodeLoper.innerHTML;
    console.log("Voornaam: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.nextSibling; // voorvoegsel
    document.forms["mutFormulier"]["voorvoegsel"].value = nodeLoper.innerHTML;
    console.log("voorvoegsel: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.nextSibling; // de achternaam
    document.forms["mutFormulier"]["achternaam"].value = nodeLoper.innerHTML;
    console.log("achternaam: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // telefoonnummer
    document.forms["mutFormulier"]["telefoonnummer"].value = nodeLoper.innerHTML;
    console.log("telefoon: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // mobielnummer
    console.log("mobiele telefoon: "+nodeLoper.innerHTML);
    document.forms["mutFormulier"]["mobielnummer"].value = nodeLoper.innerHTML;
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // email
    console.log("email: "+nodeLoper.innerHTML);
    document.forms["mutFormulier"]["email"].value = nodeLoper.innerHTML;
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // website
    document.forms["mutFormulier"]["website"].value = nodeLoper.innerHTML;
    console.log("website: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // straatlocatie
    document.forms["mutFormulier"]["straatlocatie"].value = nodeLoper.innerHTML;
    console.log("straat + nummer: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // postcode
    document.forms["mutFormulier"]["postcode"].value = nodeLoper.innerHTML;
    console.log("postcode: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.nextSibling; // woonplaats
    document.forms["mutFormulier"]["plaats"].value = nodeLoper.innerHTML;
    console.log("woonplaats: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // land
    console.log("land: "+nodeLoper.innerHTML);
    document.forms["mutFormulier"]["land"].value = nodeLoper.innerHTML;


    adres.mutFormulierTonen(); // Formulier wordt getoond. Wat er verder zal gebeuren zal door de gebruiker bepaald worden aan de hand van de aangeklikte buttons.
}


function startAdresboek() {
    initialiseren();
    adres.invFormulierVerbergen();
    adres.mutFormulierVerbergen();
}

function initialiseren() {
    // Onthoud aan het begin van het programma wat de inhoud is van het eerte adres.
    // Dit is om later vast te stellen of er nog geen nieuwe adressen zijn ingevoerd.
    
    if (typeof(Storage) !== "undefined") { // als de browser localStorage ondersteunt
        // Laden met localStorage
        
        //localStorage.clear("alleAdressen"); // voor testen met een leeg bestand
        
        adres = new AdresRecord(); // adres object aanmaken.
        
        var bewaardeAdressen = JSON.parse(localStorage.getItem("alleAdressen"));
        
        if (bewaardeAdressen === null) { // als er geen adressen zijn opgeslagen
            alert("Er zijn geen opgeslagen adressen");
            /*var elem = document.getElementsByClassName("eenAdres");
            elem[0].innerHTML="Er zijn nog geen adressen ingevoerd.";
            eersteHTMLAdres = elem[0].innerHTML;            */
            adressenOpgeslagen = false;
        }
        else {
            // adressenContainer vullen met opslag
            adressenOpgeslagen = true;
            adres.laadAdressen();
            adres.addEventMuteren();
        }
        
        alert("is geinitialiseerd");
    } else {
        // Sorry! Geen opslagmogelijkheid.
        alert("Gegevens kunnen niet opgeslagen worden op deze browser!\n"
            +"Adresboek kan hier niet op werken.");
        
    }
 
}

var adressenOpgeslagen;
var adres;
var adresNode;

window.onload = startAdresboek(adressenOpgeslagen);
//window.onunload = adres.bewaarAdressen();