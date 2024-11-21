# Dokumentasjon på gruppeprosjektet for inventory system
"Hvorfor skal vi skrive dokumentasjon på kode vi skriver?"
1 - Du husker det mye bedre
2 - Du har en forklaring på hvordan du har gjort ting og begrunnelsen for dette
3 - Andre kan sette seg inn i koden din lettere.
4 - Du kan se hvor mye fremgang du har gjort på prosjektet eller kompetanse-messig for deg selv.
5 - Det er anbefalt å skrive dokumentasjon/logg på arbeidet ditt så langt.

## HTML, CSS og IDer
Det er STERKT anbefalt å laste ned kilder og linke de til en mappe i prosjektet. 
Lenkene kan endre sti over tid, bli fjernet eller flyttet, og bildene blir da ubrukelige. Resultatet er at du sitter med tomme objekter.
Det er også nyttig å gi de ulike objektene du skal bruke senere ett selvforklarende id-navn (gjelder også variabler). Da vet du konkret hva du jobber med.

Jeg har foreslått følgende navn til alle tingene: 
- sword
- lovePotion
- barbutaHelmet
- dagger
- shieldPotion
- plateArmor
- heaterShield
- paracetamol
- plateLeggings

For å få en pekefinger på musepekeren når vi drar objekter rundt, så kan vi bruke ``cursor: grab`` eller ``cursor: grabbing``.
## JavaScript

Du kan bruke ``items`` variabelen til å legge til ting som skal være i hotbaren. 
Jeg har skrevet en struktur på koden med 5 metoder til drag&drop funksjonalitet som kan brukes, og en annen struktur med to metoder for lagring og sletting av ting fra hotbaren.

For å legge til nye ting i ``items``, definer items på nytt med ``.filter("verdi")`` metoden.
Hvis vi har:
```["sword", "lovePotion", "barbutaHelmet"]``` 
i arrayet vårt og bruker ``.filter("sword")``, så sitter vi igjen med følgende:
```["lovePotion", "barbutaHelmet"]``` 

### Eventlisteners
I JavaScript så har vi 5 event listeners vi kan bruke til denne applikasjonen; dragstart, dragover, drop, dragend og dragleave.
Dragstart, dragover og drop skal vi bruke til de funksjonelle operasjonene vi trenger.

**Dragend** og **dragleave** kan vi bruke til å "rense" feltene etter vi er ferdig med operasjonen. 
**Dragend** skal brukes til å fjerne eventuelle visuelle farger/markeringer på siden. F.eks. hvis vi skal gi en gråtone til feltet for objektet som blir flyttet.
**Dragleave** skal brukes når musepekeren går bort fra et felt vi holder objektet over.

For å legge til f.eks. draghandler sin start funksjon, så skriver du det på denne måten:
```javascript
item.addEventListener("dragstart", dragHandler.start); 
```
Ikke bruk paranteser i en eventlistener, ettersom dette vil kalle funksjonen __øyeblikkelig__ og gi uforventede resultater.

Husk å legge til eventlistener ETTER du har definert koden som den skal bruke. Setter du den over dragHandler, så har ikke eventlistener noe å kalle til.
Da får du en reference error.
Dette er fordi JavaScript leser fra topp til bunn (sekvensiell). Blir nesten som å gå ut døra og så forsøke å ta på seg jakken som du ikke tokk med deg ut.