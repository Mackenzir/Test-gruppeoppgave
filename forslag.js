// Inventory management system

let items = [0]; 
const cards = document.getElementsByClassName("card");

var hotbarManager = {
    save: { 
        // Legg til den nye verdien i items. Bruk items.push("verdi") metoden for å legge til nye ting i en array.
    },

    delete: {
        // Det finnes flere metoder du kan bruke her. Jeg mener vi går for .filter("verdi") metoden.
    }
}

const dragHandler = { // Her lager vi en variabel som inneholder flere relevante funksjoner

    start: function() { // Brukes med "dragstart" event listener
        // Sett en farge på slotten du flytter objektet fra. 
        // Hent informasjonen om objektet og sett det i en variabel som holder på dette. F.eks. slot1 (bruk .setData metode på variabelen) 

    }, // Husk komma. JS liker ikke at du definerer flere funksjoner innen en variabel uten dette. Se dette som eksempel: source\Screenshot 2024-11-21 045942.png

    hover: function() { // Brukes med "dragover" event listener
        // Valgfritt: Endre på musepekeren basert på hvor man holder objektet er gyldig eller ikke. 
        // ELLER: Sett grønn eller rød farge i slotten avhengig av om man kan sette objektet i hotbar-slotten eller ikke.
    },

    drop: function() { // Brukes med "drop" event listener
        // Skriv data til slotten
        // Håndtering av errors som kan komme hvis vi har satt en maksverdi på hotbaren. Kan droppes.
        // Håndtering av errors hvis brukeren forsøker å legge en ting til en hotbar-slot som allerede er i bruk
    },
    
    end: function() { // Brukes med "dragend" event listener
        // Nullstiller musepekeren hvis nødvendig.
    },

    leave: function() { // Brukes med "dragleave" event listener"
        // Resetter farging på områder vi har / ikke har lov til å droppe ting i.
    }
}


// Eventlisteners går her med metodene vi har definert. Hvis vi ønsker en event listener for alle objektene innen en class, så må vi loope gjennom de.
// Vi kan gjøre det enkelt og hard-kode en event listener for hvert objekt med hver sin verdi.

//ID.addEventListener("dragstart", dragHandler.start);