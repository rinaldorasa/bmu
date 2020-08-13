# bmu
<pre>
IL bmu è stato pensato come un livello medio per accedere ai contenuti 
di file esterni già confezionati.

Dipendenze CND: material-icons, jquery, fontawesome in 'head'.
IN "head" sono poi richiamati altri file.css e file.js esterni tramite 
file javascript di aiuto upload. Si è fatto ricorso a javascript invece 
del normale "link href" "script src" in quanto si è evidenziato un problema 
nell'aggiornamento dei contenuti file .css e .js . 
Utilizzando javascript si ovvia all'inconveniente aggiungendo ?numero_random 
orzando una ricerca sempre nuova al memento della richiesta.
  
 FONDAMENTALMENTE la schermata è suddivisa in tre parti:
 
 1) Testata fissata top0 left0 height 3rem.
 |
 |---progress bar (utility)
 |---spinner (utility) nel body attesa()
 |
 |---announcement icona (dialog box)
 |...|---X chiudi dialog box
 |...|---? tooltip
 
 2) Dialog box icona announcement.
 | X            ?     !  <== testata pos absolute
 |.....................
 |.....................
 |..................... cliccando ! scende la ListaY
 |..................... appaiono  X  e  ?
 |.....................
 |
 |
 |
 
 La presenza di X icona close è necessaria per permettere
 la chiusura del dialog box
 
 | X            ?     !  <== testata pos absolute
 |^             ^
 |.             .
 |.             .       
 |..................... cliccando X nasconde la ListaY
 |                      e le icone X ?
 |
 |
 |
 |

 Passando o tap ? si attiva un dropdown menu con alcune 
 informazioni supplementari
 |
 |________________________________________
 | O grigio
 |
 | ListaY parte 1 §nselezionato
 |
 |________________________________________
 |
 |
 |________________________________________
 | O verde
 |
 | ListaY parte 2 §nselezionato
 |
 |________________________________________
 |
 |
 |
 |
 In questo esempio (vedi bmu.html) le parti sono due
 reciprocamente indipendenti in quanto navigazione.
 Si può selezionare un elemento di ListaY1. In questo caso
 in Iframe compare il file selezionato. IL problema sorge quando
 ci si sposta e si seleziona un elemento ListaY2 in quanto
 viene visualizzato il file di User in Iframe mentre rimane
 evidenziato come selezionato il precedente in ListaY1.
 Si è così incerti a quale parte ListaY corrisponda il file 
 visualizzato in Iframe. Per è presente un semaforo con
 un dot verde segnalante la attuale finestra attiva quindi
 il file visualizzato. Nell'esempio quando si clicca su un
 elemento della ListaY2 avviene un mutamento nel dischetto
 che passata al colore verde nella ListaY2 e diventa grigio
 nella ListaY1.
 
 
 3) Iframe con target.
 
 
</pre>
