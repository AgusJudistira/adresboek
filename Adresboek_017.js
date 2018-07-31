/* eslint-env browser */ //dit is echt nodig om onterechte Brackets foutmeldingen te onderdrukken.
/* global document */ // een andere variant om onterechte Brackets foutmeldingen te onderdrukken
   

function initialiseren() {
// Onthoud aan het begin van het programma wat de inhoud is van het eerte adres.
// Dit is om later vast te stellen of er nog geen nieuwe adressen zijn ingevoerd.

    if (typeof(Storage) !== "undefined") { // als de browser localStorage ondersteunt
        // Laden met localStorage

        //localStorage.clear("alleAdressen"); // voor testen met een leeg bestand

        var bewaardeAdressen = JSON.parse(localStorage.getItem("alleAdressen"));

        if (bewaardeAdressen === null) { // als er geen adressen zijn opgeslagen
            //alert("Er zijn geen opgeslagen adressen");
            /*var elem = document.getElementsByClassName("eenAdres");
            elem[0].innerHTML="Er zijn nog geen adressen ingevoerd.";
            eersteHTMLAdres = elem[0].innerHTML;            */
            adressenOpgeslagen = false;
            addEventPrullebak(); // activeer prullebak event (wat moet er gebeuren als een adres bovenop gedropt wordt)
            addEventGoogleMapsTarget();
            addEventGoogleMapsStart();

        }
        else {
            // adressenContainer vullen met opslag
            adressenOpgeslagen = true;
            laadAdressen();
            addEventMuteren(); //activeer clickevents op adressen zodat ze gemuteerd kunnen worden.
            addEventDrag(); // activeer drag events (wat moet er gebeuren als een adres op een andere adres gedropt wordt)
            addEventPrullebak(); // activeer prullebak event (wat moet er gebeuren als een adres bovenop gedropt wordt)
            addEventGoogleMapsTarget();
            addEventGoogleMapsStart();

        }

    } else {
        // Sorry! Geen opslagmogelijkheid.
        alert("Gegevens kunnen niet opgeslagen worden op deze browser!\n"
            +"Adresboek kan op deze browser niet op werken.");
    }
}


function bewaarAdressen() {
    var adressen = document.getElementById("adressenContainer").innerHTML;

    localStorage.setItem("alleAdressen", JSON.stringify(adressen));
    adressenOpgeslagen = true;
}


function laadAdressen() {
    var bewaardeAdressen = JSON.parse(localStorage.getItem("alleAdressen"));

    document.getElementById("adressenContainer").innerHTML = bewaardeAdressen;
    //alert("Adressen geladen");
}


function valideerInput(formulier) {
    var invalidFields = formulier.querySelectorAll( ":invalid" );
    var EverythingOK = (invalidFields.length == 0);
    if (!EverythingOK) {
        invalidFields[0].focus(); // Plaats de cursor op de eerste ongeldige veld
    }
    return EverythingOK;   
}


function invFormulierTonen() {
    document.getElementById("overlay").style.display = "block"; //Blokkeer de acherliggende adressen zodat ze niet geactiveerd kunnen worden

    var formulier = document.getElementById("invoerFormulier");
    formulier.style.display = "flex";
    formulier.querySelector("input").focus();
}


function mutFormulierTonen() {
    document.getElementById("overlay").style.display = "block"; //Blokkeer de acherliggende adressen zodat ze niet geactiveerd kunnen worden

    document.getElementById("mutatieFormulier").style.display = "flex";
}


function mutFormulierVerbergen() {
    document.getElementById("overlay").style.display = "none"; //Hef de blokkade van de achtergrond weer op als de formulier weer verdwijnt

    // Geef de invulvelden normale achtergrondkleur
    var formulier = document.getElementById("mutatieFormulier");

    formulier.style.display = "none";  
    document.getElementsByName("mutFormulier")[0].reset();
}        


function invFormulierVerbergen() {

    var formulier = document.getElementById("invoerFormulier");

    document.getElementById("overlay").style.display = "none"; //Hef de blokkade van de achtergrond weer op als de formulier weer verdwijnt        
    formulier.style.display = "none";
    document.getElementsByName("invFormulier")[0].reset();

}


function verwijderen() {
    var echtVerwijderen = confirm("Weet u zeker dat dit adres ONHERROEPELIJK verwijderd moet worden?");
    if (echtVerwijderen) {
        adresNode.parentNode.removeChild(adresNode);
        addEventDrag(); // zorg dat bij verslepen alle indexen goed blijven
        addEventMuteren(); // maak click events opnieuw aan omdat anders de indexen niet meer kloppen
        bewaarAdressen(); // bewaar de adressen zodat de verwijdering vastgelegd is.
        mutFormulierVerbergen();
    }
}


function inHTMLtoevoegen() {
    
    var formulier = document.getElementById("invoerFormulier");
    if (valideerInput(formulier)) {

        var div_node=document.createElement("div");
        div_node.className="eenAdres";
        div_node.setAttribute("draggable", true);

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


        if (adressenOpgeslagen) { // als er al eerder adressen zijn ingevoerd
            // nieuwe adres aan bestaande rij adressen toevoegen
            document.getElementById("adressenContainer").appendChild(div_node);
        }
        else {
            // bestaande "Er zijn nog geen adressen ingevoerd." melding vervangen door het nieuwe adres
            var elem = document.getElementsByClassName("eenAdres");  
            elem[0].parentElement.replaceChild(div_node,elem[0]); //elem[0] = div_node;
        }

        bewaarAdressen();
        invFormulierVerbergen();            
        addEventMuteren(); // Maak event aan om bij het aanklikken van dit adres een muteer functie te activeren. Dit moet gedaan worden nadat de formulier verborgen is. Anders werkt het niet.
        addEventDrag(); // activeer drag events
    }
}


function inHTMLwijzigen() {
        
    var formulier = document.getElementById("mutatieFormulier");
    if (valideerInput(formulier)) {
        var nodeLoper = adresNode.firstChild.firstChild; // de voornaam
        nodeLoper.innerHTML = document.forms["mutFormulier"]["voornaam"].value.trim()+" ";
        //console.log("Voornaam: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.nextSibling; // voorvoegsel
        nodeLoper.innerHTML = document.forms["mutFormulier"]["voorvoegsel"].value.trim()+" ";
        //console.log("voorvoegsel: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.nextSibling; // de achternaam
        nodeLoper.innerHTML = document.forms["mutFormulier"]["achternaam"].value.trim();
        //console.log("achternaam: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // telefoonnummer
        nodeLoper.innerHTML = document.forms["mutFormulier"]["telefoonnummer"].value.trim();
        //console.log("telefoon: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // mobielnummer
        //console.log("mobiele telefoon: "+nodeLoper.innerHTML);
        nodeLoper.innerHTML = document.forms["mutFormulier"]["mobielnummer"].value.trim();
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // email
        //console.log("email: "+nodeLoper.innerHTML);
        nodeLoper.innerHTML = document.forms["mutFormulier"]["email"].value.trim();
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // website
        nodeLoper.innerHTML = document.forms["mutFormulier"]["website"].value.trim();
        //console.log("website: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // straatlocatie
        nodeLoper.innerHTML = document.forms["mutFormulier"]["straatlocatie"].value.trim();
        //console.log("straat + nummer: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // postcode
        nodeLoper.innerHTML = document.forms["mutFormulier"]["postcode"].value.trim()+"  ";
        //console.log("postcode: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.nextSibling; // woonplaats
        nodeLoper.innerHTML = document.forms["mutFormulier"]["plaats"].value.trim();
        //console.log("woonplaats: "+nodeLoper.innerHTML);
        nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // land
        //console.log("land: "+nodeLoper.innerHTML);
        nodeLoper.innerHTML = document.forms["mutFormulier"]["land"].value.trim();

        bewaarAdressen();
        mutFormulierVerbergen();
    }
}


function muteren() {
    /*
    Een adresrecord in HTML is als zodanig opgebouwd:
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
    //alert("in functie muteren");
    var nodeLoper = adresNode.firstChild.firstChild; // de voornaam
    document.forms["mutFormulier"]["voornaam"].value = nodeLoper.innerHTML.trim();
    //console.log("Voornaam: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.nextSibling; // voorvoegsel
    document.forms["mutFormulier"]["voorvoegsel"].value = nodeLoper.innerHTML.trim();
    //console.log("voorvoegsel: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.nextSibling; // de achternaam
    document.forms["mutFormulier"]["achternaam"].value = nodeLoper.innerHTML.trim();
    //console.log("achternaam: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // telefoonnummer
    document.forms["mutFormulier"]["telefoonnummer"].value = nodeLoper.innerHTML.trim();
    //console.log("telefoon: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // mobielnummer
    //console.log("mobiele telefoon: "+nodeLoper.innerHTML.trim());
    document.forms["mutFormulier"]["mobielnummer"].value = nodeLoper.innerHTML;
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // email
    //console.log("email: "+nodeLoper.innerHTML);
    document.forms["mutFormulier"]["email"].value = nodeLoper.innerHTML.trim();
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // website
    document.forms["mutFormulier"]["website"].value = nodeLoper.innerHTML.trim();
    //console.log("website: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // straatlocatie
    document.forms["mutFormulier"]["straatlocatie"].value = nodeLoper.innerHTML.trim();
    //console.log("straat + nummer: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // postcode
    document.forms["mutFormulier"]["postcode"].value = nodeLoper.innerHTML.trim();
    //console.log("postcode: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.nextSibling; // woonplaats
    document.forms["mutFormulier"]["plaats"].value = nodeLoper.innerHTML.trim();
    //console.log("woonplaats: "+nodeLoper.innerHTML);
    nodeLoper = nodeLoper.parentNode.nextSibling.firstChild; // land
    //console.log("land: "+nodeLoper.innerHTML);
    document.forms["mutFormulier"]["land"].value = nodeLoper.innerHTML.trim();

    mutFormulierTonen(); // Formulier wordt getoond. Wat er verder zal gebeuren zal door de gebruiker bepaald worden aan de hand van de aangeklikte buttons.
}


function sorteer(sorteersleutel) { // Sorteermethode: Straight Sort
    var adressen = document.getElementsByClassName("eenAdres");
    var achternaam1, achternaam2;

    if (sorteersleutel == "achternaam") {    
        for (var i1 = 0; i1 < adressen.length - 1; i1++) {
            achternaam1 = adressen[i1].firstChild.childNodes[2].innerHTML.toLowerCase();
            for (var i2 = i1+1; i2 < adressen.length; i2++) {
                achternaam2 = adressen[i2].firstChild.childNodes[2].innerHTML.toLowerCase();
                if (achternaam1 > achternaam2) {
                    //moet gewisseld worden
                    adressen[i1].parentNode.insertBefore(adressen[i2], adressen[i1]);

                    achternaam1 = adressen[i1].firstChild.childNodes[2].innerHTML.toLowerCase();
                    achternaam2 = adressen[i2].firstChild.childNodes[2].innerHTML.toLowerCase();
                }
            }
        }
    }
    else if (sorteersleutel == "voornaam") {

        for (var i1 = 0; i1 < adressen.length - 1; i1++) {
            achternaam1 = adressen[i1].firstChild.childNodes[0].innerHTML.toLowerCase();
            for (var i2 = i1+1; i2 < adressen.length; i2++) {
                achternaam2 = adressen[i2].firstChild.childNodes[0].innerHTML.toLowerCase();

                if (achternaam1 > achternaam2) {
                    //moet gewisseld worden
                    adressen[i1].parentNode.insertBefore(adressen[i2], adressen[i1]);                         

                    achternaam1 = adressen[i1].firstChild.childNodes[0].innerHTML.toLowerCase();
                    achternaam2 = adressen[i2].firstChild.childNodes[0].innerHTML.toLowerCase();
                }
            }
        }

    }
    addEventMuteren(); // de indexen van de click events moeten goed gezet worden
    addEventDrag(); // de indexen van de drag events moeten goed gezet worden

    bewaarAdressen(); // leg deze verandering vast
}

    
function addEventDrag() { // deze functie moet helaas buiten het object geplaatst worden om het kunnen laten werken. Anders krijg je een runtime error.
    // Als een adres gesleept wordt, dan wordt het hier afgehandeld.
    var groepAdressen = document.getElementsByClassName('eenAdres');
    
    for (var i = 0, len = groepAdressen.length; i < len; i++)
    {               
        (function(index){
            
            groepAdressen[i].setAttribute("draggable",true);
            groepAdressen[i].ondragstart = function(e) {
                e.dataTransfer.setData('text', null);                
                sleepBronIndex = index;
            }
            
            groepAdressen[i].ondragover = function(e) {
                e.preventDefault();
                sleepDoelIndex = index;
                groepAdressen[index].style.backgroundColor = "lightgray";          
            }
            
            groepAdressen[i].ondragleave = function(e) {
                e.preventDefault();
                
                groepAdressen[index].style.backgroundColor = "azure";
                groepAdressen[index].style.color = "black";
            }
                        
            groepAdressen[i].ondrop = function(e) {
                e.preventDefault();
                
                groepAdressen[sleepDoelIndex].style.backgroundColor = "azure";
                groepAdressen[sleepDoelIndex].style.color = "black";
                
                if (sleepBronIndex < sleepDoelIndex) { // als het adres naar voren gesleept is
                   groepAdressen[sleepDoelIndex].parentNode.insertBefore(groepAdressen[sleepBronIndex], groepAdressen[sleepDoelIndex+1]); 
                    //alert("gewisseld");
                                
                   sleepBronIndex = 0;
                   sleepDoelIndex = 0;

                   addEventMuteren();
                   addEventDrag();
                   bewaarAdressen();
                }
                else if (sleepBronIndex > sleepDoelIndex) { // het adres is naar achteren gesleept
                        groepAdressen[sleepDoelIndex].parentNode.insertBefore(groepAdressen[sleepBronIndex], groepAdressen[sleepDoelIndex]); 
                        //alert("gewisseld");
                    
                        sleepBronIndex = 0;
                        sleepDoelIndex = 0;

                        addEventMuteren();
                        addEventDrag();
                        bewaarAdressen();
                }
            }
            
        })(i);
    }
}


function addEventGoogleMapsStart() {
    var gmapIcon = document.getElementById("gmap-starticon");
    var materialIcons = document.getElementsByClassName("material-icons");
    var groepAdressen = document.getElementsByClassName("eenAdres");

    materialIcons[0].ondragover = function(e) {
        e.preventDefault();
        materialIcons[0].style.color = "green";
    }

    materialIcons[0].ondragleave = function(e) {
        e.preventDefault();
        if (startAddress.length == 0) { // als startAddress leeg is, dan is er nog geen startadres gekozen.
            materialIcons[0].style.color = "red";
        }
        else { // als startAddress gevuld is, dan is er al een staradres gekozen. Dit wordt aangeduid door de blauwe kleur van de starticoon
            materialIcons[0].style.color = "blue";
        }
    }
    
    gmapIcon.ondrop = function(e) {
        e.preventDefault();
        adresNode = groepAdressen[sleepBronIndex];
        
        materialIcons[0].style.color = "azure";
        materialIcons[0].style.border = "1px";
        materialIcons[0].style.borderColor = "black";
        
        var voornaam = adresNode.childNodes[0].firstChild.innerHTML;
        var voorvoegsel = adresNode.childNodes[0].firstChild.nextSibling.innerHTML;
        var achternaam = adresNode.childNodes[0].childNodes[2].innerHTML;
        
        if (voorvoegsel.trim().length == 0) {
            var locatieNaam = voornaam.trim() + " " + achternaam.trim();
        }
        else {
            var locatieNaam = voornaam+voorvoegsel+achternaam;
        }
        
        var stad = adresNode.childNodes[6].firstChild.nextSibling.innerHTML;
        var postcode = adresNode.childNodes[6].firstChild.innerHTML;
        var straat = adresNode.childNodes[5].firstChild.innerHTML;
        var land = adresNode.childNodes[7].firstChild.innerHTML;
        if (land.length > 0) {
            var address = land+","+stad + ","+postcode.trim()+"," + straat;
        }
        else {
            var address = stad + ","+postcode.trim()+"," + straat;
        }
        
        startAddress = address;
        
    }
}


function addEventGoogleMapsTarget() {
    var gmapIcon = document.getElementById("gmap-targeticon");
    var materialIcons = document.getElementsByClassName("material-icons");
    var groepAdressen = document.getElementsByClassName("eenAdres");

    materialIcons[1].ondragover = function(e) {
        e.preventDefault();
        //console.log("ondragover event triggered. Color should be GREEN");
        materialIcons[1].style.color = "green";
    }

    materialIcons[1].ondragleave = function(e) {
        e.preventDefault();
        materialIcons[1].style.color = "red";        
    }
    
    gmapIcon.ondrop = function(e) {
        e.preventDefault();
        adresNode = groepAdressen[sleepBronIndex];
        
        materialIcons[1].style.color = "red";  
        
        var voornaam = adresNode.childNodes[0].firstChild.innerHTML;
        var voorvoegsel = adresNode.childNodes[0].firstChild.nextSibling.innerHTML;
        var achternaam = adresNode.childNodes[0].childNodes[2].innerHTML;
        
        if (voorvoegsel.trim().length == 0) {
            var locatieNaam = voornaam.trim() + " " + achternaam.trim();
        }
        else {
            var locatieNaam = voornaam+voorvoegsel+achternaam;
        }
        
        var stad = adresNode.childNodes[6].firstChild.nextSibling.innerHTML;
        var postcode = adresNode.childNodes[6].firstChild.innerHTML;
        var straat = adresNode.childNodes[5].firstChild.innerHTML;
        var land = adresNode.childNodes[7].firstChild.innerHTML;
        if (land.length > 0) {
            var address = land+","+stad + ","+postcode.trim()+"," + straat;
        }
        else {
            var address = stad + ","+postcode.trim()+"," + straat;
        }
        
        targetAddress = address;
        
        if (startAddress.length == 0) { // als er geen startadres is gekozen.
            geocodeAddress(address,locatieNaam); // toon op landkaart de locatie van de gekozen adres
        } else { // Er is wel een startadres gekozen. Dus is het laatst gekozen adres het doeladres en moet er een routeplanner getoond worden. 
            initRouteplanner();
        }
    }
}


function addEventPrullebak() {
    var prullebak = document.getElementById("prullebak");
    var groepAdressen = document.getElementsByClassName("eenAdres");

    prullebak.ondragover = function(e) {
        e.preventDefault();
        prullebak.style.color = "red";
    }

    prullebak.ondragleave = function(e) {
        e.preventDefault();
        prullebak.style.color = "blue";        
    }
    
    prullebak.ondrop = function(e) {
        e.preventDefault();
        adresNode = groepAdressen[sleepBronIndex];
        verwijderen();
        prullebak.style.color = "blue";        
    }
}


function addEventMuteren() { // deze functie moet helaas buiten het object geplaatst worden om het kunnen laten werken.
    // als een adres aangemaakt is, dan moet er ook een click event aan toegevoegd worden zodat wanneer een adres aangeklikt wordt, er een mutatieformulier tevoorschijn komt met gegevens van het aangeklikte adres.

    var groepAdressen = document.getElementsByClassName('eenAdres');
    
    for (var i = 0, len = groepAdressen.length; i < len; i++)
    {               
        (function(index){
            
            groepAdressen[i].onclick = function(){            
                // Het index is belangrijk. Hier wordt m.b.v. de index de juiste node uit de node array "groepAdressen" gehaald        
                adresNode = groepAdressen[index];
                muteren(); //muteren maakt gebruik van de globale variabele adresNode
            }
            
        })(i);
    }
}


function landkaartVerbergen() { // verbergt zowel gewone landkaart als routeplannerkaart
    document.getElementById("mapContainer").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("gMap").style.display = "none";
    document.getElementById("gMap").innerHTML = "";
    
    document.getElementById("floating-panel").style.display = "none";
    document.getElementById("routeplannerMap").style.display = "none";
    document.getElementById("routeplannerMap").innerHTML = "";
    
    document.getElementById("info-panel").innerHTML = "";
    document.getElementById("info-panel").style.display = "none";
    startAddress = "";
    var materialIcons = document.getElementsByClassName("material-icons");
    materialIcons[0].style.color = "red";
    materialIcons[0].style.border = "0px";
}


function landkaartTonen() {
    document.getElementById("mapContainer").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("gMap").style.display = "block"; document.getElementById("printer").style.display = "none";
}


function routeplannerTonen() {
    document.getElementById("mapContainer").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("floating-panel").style.display = "block";
    document.getElementById("routeplannerMap").style.display = "block";
    document.getElementById("info-panel").style.display = "block";
    document.getElementById("printer").style.display = "block";
}


function initRouteplanner() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('routeplannerMap'), {
      zoom: 14,
      center: {lat: 52.37783, lng: 4.87995}
    });
    
    directionsDisplay.setMap(map);
    
    document.getElementById('info-panel').innerHTML = "";
    directionsDisplay.setPanel(document.getElementById('info-panel'));
        
    calculateAndDisplayRoute(map, directionsService, directionsDisplay);
    
    var travelMode = document.getElementById("mode");
    travelMode.onchange = function() {
        calculateAndDisplayRoute(map, directionsService, directionsDisplay);
    }
}

function calculateAndDisplayRoute(map, directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    directionsService.route({
        origin: startAddress,
        destination: targetAddress,
      //origin: geoLocStart,  
      //destination: geoLocTarget,  
      travelMode: google.maps.TravelMode[selectedMode]
    }, function(response, status) {
      if (status == 'OK') {
        
        directionsDisplay.setDirections(response);
        document.getElementById("info-panel").innerHTML = "";
        directionsDisplay.setPanel(document.getElementById('info-panel'));
        routeplannerTonen();
          
      // Hieronder is een trucje om de route goed en gecentreerd weer te geven. Een resize event wordt gesimuleerd om het te bewerkstelligen
          
        var lastCenter=map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(lastCenter);
        
      } else {
        window.alert('Routeplanning niet geslaagd vanwege de volgende reden: ' + status);
      }
    });
}


function geocodeAddress(address,locatieNaam) {
    
    document.getElementById("gMap").innerHTML = address;
    
    var resultsMap = new google.maps.Map(document.getElementById("gMap"), {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {lat: 53.2193835, lng: 6.5665018} 
    });
    
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        landkaartTonen();
        resultsMap.setCenter(results[0].geometry.location);
          
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
            title: locatieNaam
        });
        // Hieronder is een trucje om de map goed EN gecentreerd weer te geven gelijk vanaf het begin
        var lastCenter = resultsMap.getCenter(); 
        google.maps.event.trigger(resultsMap, 'resize');
        resultsMap.setCenter(lastCenter);
        
      } else {
        alert('Opzoeken adres was niet geslaagd vanwege de volgende reden: ' + status);
        }                   
    });
}


function makePrintDocument() {
    var mapContainer = document.getElementById('mapContainer');
    var routemap = document.getElementById('routeplannerMap');
    //var copyRoutemap = routemap.cloneNode(true); // Deze methode werkt niet. Alleen de originele map node wordt goed afgedrukt
    var routeinfo = document.getElementById('info-panel');
    var printerOverlay = document.getElementById('printer-overlay');
    
    var win = window.open();
    
    var body = win.document.getElementsByTagName("body");
    
    var div_nodeInfo = document.createElement("div");
    div_nodeInfo.innerHTML = routeinfo.innerHTML;
    
    div_nodeInfo.firstChild.style.display = "inline";
    div_nodeInfo.firstChild.style.position = "static";
    
    div_nodeInfo.style.display = "inline";
    div_nodeInfo.style.position = "relative";
    div_nodeInfo.style.fontFamily = "Roboto,sans-serif";
    div_nodeInfo.style.top = "10px";
    
    routemap.style.position = "static";
    routemap.firstChild.style.position = "static";
    routemap.firstChild.firstChild.style.position = "static";
    //routemap.firstChild.firstChild.firstChild.style.position = "static";
    printerOverlay.style.display = "block";
    //printerOverlay.appendChild(routemap);    
        
    body[0].appendChild(routemap);
    body[0].appendChild(div_nodeInfo);    
    
    win.print();
    win.close();
    
    routemap.style.position = "absolute";
    routemap.firstChild.style.position = "absolute";
    routemap.firstChild.firstChild.style.position = "absolute";

    //routemap.firstChild.firstChild.firstChild.style.position = "absolute";
    //document.getElementsByTagName("body")[0].appendChild(printerOverlay);
    
    mapContainer.appendChild(routemap);
    
    printerOverlay.style.display = "none";
    
}


function startAdresboek() {
    //adres = new AdresRecord(); // adres object aanmaken.
    initialiseren();  

    invFormulierVerbergen();
    mutFormulierVerbergen();
}

var adressenOpgeslagen; // boolean
var adres; //adres object
var adresNode;
var sleepBronIndex;
var sleepDoelIndex;
var startAddress=""; // in mens leesbare adresvorm
var targetAddress=""; // in mens leesbare adresvorm

window.onload = startAdresboek();
