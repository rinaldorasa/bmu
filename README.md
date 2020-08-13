# bmu
IL bmu è stato pensato come un livello medio per accedere ai contenuti di file esterni già confezionati.

Dipendenze CND: material-icons, jquery, fontawesome in 'head'.
IN "head" sono poi richiamati altri file.css e file.js esterni tramite file javascript di aiuto upload. Si è fatto ricorso a javascript invece del normale "link href" "script src" in quanto si è evidenziato un problema nell'aggiornamento dei contenuti file .css e .js . 
Utilizzando javascript si ovvia all'inconveniente aggiungendo ?numero_random forzando una ricerca sempre nuova al memento della richiesta.
  
 FONDAMENTALMENTE la schermata è suddivisa in
 1) Testata fissata top0 left0 height 3rem.
 2) Dialog box icona announcement.
 3) Iframe con target.
 
 
