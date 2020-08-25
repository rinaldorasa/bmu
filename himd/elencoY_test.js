/**************************

elencoY per HIMD 20200825

**************************/

document.getElementById("elencoY").innerHTML=

'<style> ' + ' ' + 
// aside ha il tag per lanciare
// il programma

'aside { overflow:auto; } ' + 

// id di article
'article#A001, article#A002 { position:relative; ' + 
'border:dashed .1rem brown; overflow:auto; z-index:100; } ' + 

// visualizza il titolo di article
// in semantico inoltre ha la
// presenza del semaforo
'blockquote ' + 
 '{ ' + 
 'margin-bottom:0rem; ' + 
 'text-align:center; border:dotted .1rem red; ' + '} ' + 
 ' ' + 
// settaggi di sfondo e colore testo
// per evitare mimetismi non voluti 
 'blockquote>span {background-color:silver; ' + 
 'color:white; border-radius:0.2rem; } ' + 
 
// nasconde il codice di riconoscimento
 'blockquote>span:nth-child(3) { ' + 
 ' display:none; ' + 
 ' border-radius:0.2rem; } ' + 
 ' ' + 
 ' ' + 
// neutralizza i settaggi di default
// per il tag a
 'td>a, td>a:link, td>a:visited ' + '{ ' + 
 'padding:0.1rem; ' + 'background-color:rgba(128,0,0,0.1); ' + 
 'color:white; ' + 
 'text-decoration: none; ' + 
 'border-radius:0.2rem; ' + 
 'border:solid 0rem black; ' + 'overflow:auto; ' + '} ' + 
 ' ' + 
 
 
// i link ai file da incorniciare in iframe
// sono elencati in una tabella table 
// al fine di rendere le colonne perfettamente
// uguali importante table layout fixed
// width 100 percento
 'table { table-layout:fixed; width:100%; border:solid 0.1rem red; } ' + 
 
 'td { ' + 
 'height:2rem; ' + 
 'background-color:black; color:white; ' + 
 'text-align:center; border:solid 0.1rem fuchsia; ' + 
 'overflow:auto; ' + 
 '} ' + ' ' + 
 
 '.grigio { border:solid 0.5rem gray; } ' + 
 ' ' + 
 ' ' + 
// gestito da jQuery memorizza la voce
// selezionata ultima memoria dando in tal
// modo una brevissima cronologia di navigazione
 '.selezionato { ' + 
 ' border-radius: 0.4rem; ' + 
 ' background-color:rgb(255,165,0,.5) !important; ' + 
 ' color: oldlace !important; ' + 
 ' color: white !important;	 ' + 
 ' border:solid 0.4rem orange; } ' + 
 ' ' + 
 '.selezionato a { color:white; } ' + 
 ' ' + 
// jQuery rimuove la class selezionato
// da elemento con class NULLAnnn 
 '.NULLA001, .NULLA002 ' + '{ ' + 
 'background-color:rgba(0,128,128,0.25); ' + 
 'background-color:rgba(255,255,255,0.25); ' + ' ' + 
 '} ' + 
 ' ' + 
 ' ' + 
// quando esistono maggiore di 1 articoli
// occorre segnalare a quale tipo di articolo
// appartiene il file visualizzato
// utilizzando un semaforo verde acceso vicino
// al titolo article
 '.semaforo_verde { ' + 
 ' height: 0.5rem; ' + 
 ' width: 0.5rem; ' + 
 ' background-color: green; ' + 
 ' border:solid 0.2em white; ' + 
 ' border-radius: 50%; ' + 
 ' display: inline-block; ' + 
 ' } ' + 
 ' ' + 
 '.semaforo_grigio { ' + ' height: 0.5rem; ' + 
 ' width: 0.5rem; ' + ' background-color: gray; ' + 
 ' border:solid 0.1rem white; ' + ' border-radius: 50%; ' + 
 ' display: inline-block; ' + ' } ' + 
 ' ' + 
 ' </style> ' + 
 ' ' + 
 
 '<article id="A001"> ' + 
 ' <blockquote> ' + 
 ' <span id="semaforo_A001"></span> ' + 
 '	<span>Alter</span> ' + '	<span>A001</span> ' + 
 ' </blockquote> ' + 
 '<table> ' + ' ' + '<tr> ' + 
 '<td id="A001_001" class="NULLA001"><a href="http://edoraandiamo.altervista.org" target="odlanir">uno</a></td> ' + 
 '<td id="A001_002" class="NULLA001"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">due</a></td> ' + 
 '<td id="A001_003" class="NULLA001"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">tre</a></td> ' + 
 '<td id="A001_004" class="NULLA001"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">quattro</a></td> ' + 
 '</tr>  ' + '<tr> ' + 
 '<td id="A001_005" class="NULLA001"><a href="http://edoraandiamo.altervista.org" target="odlanir">uno</a></td> ' + 
 '<td id="A001_006" class="NULLA001"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">due</a></td> ' + 
 '<td id="A001_007" class="NULLA001"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">tre</a></td> ' + 
 '<td id="A001_008" class="NULLA001"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">quattro</a></td> ' + 
 '</tr>  ' + ' ' + 
 '</table> ' + ' ' + 
 '</article> ' + 
 ' ' + 
 ' ' + 
 '<article id="A002"> ' + 
 ' <blockquote> ' + 
 ' <span id="semaforo_A002"></span> ' + 
 '	<span>Agenda</span> ' + 
 '	<span>A002</span> ' + 
 ' </blockquote> ' + ' ' + 
 '<table> ' + ' ' + 
 '<tr> ' + 
 '<td id="A002_001" class="NULLA002"><a href="http://edoraandiamo.altervista.org" target="odlanir">uno</a></td> ' + 
 '<td id="A002_002" class="NULLA002"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">due</a></td> ' + 
 '<td id="A002_003" class="NULLA002"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">tre</a></td> ' + 
 '<td id="A002_004" class="NULLA002"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">quattro</a></td> ' + 
 '</tr>  ' + 
 '<tr> ' + 
 '<td id="A002_005" class="NULLA002"><a href="http://edoraandiamo.altervista.org" target="odlanir">uno</a></td> ' + 
 '<td id="A002_006" class="NULLA002"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">due</a></td> ' + 
'<td id="A002_007" class="NULLA002"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">tre</a></td> ' + 
'<td id="A002_008" class="NULLA002"><a href="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html" target="odlanir">quattro</a></td> ' + 
'</tr>  ' + ' ' + 
 '</table> ' + 
 '</article> ' + 
 ' ' + 
 
 ' '
 ;



// elenco contiene molte voci ma
// una sola viene utilizzata per
// iframe i codici dicono che
// la class selezionato viene
// aggiunta alla voce cliccata
// mentre a tutte le altre voci
// articolo viene rimossa
jQuery('#A001_001').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_001').addClass('selezionato');
});

jQuery('#A001_002').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_002').addClass('selezionato');
});

jQuery('#A001_003').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_003').addClass('selezionato');
});

jQuery('#A001_004').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_004').addClass('selezionato');
});

jQuery('#A001_005').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_005').addClass('selezionato');
});

jQuery('#A001_006').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_006').addClass('selezionato');
});

jQuery('#A001_007').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_007').addClass('selezionato');
});

jQuery('#A001_008').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_008').addClass('selezionato');
});


// il semaforo
// rimuove titolo a tutti gli articoli 
// precedente selezionati
// accende il titolo articolo selezionato

$('.NULLA001').click( function(){
$('#semaforo_A001').addClass('semaforo_verde');
$('#semaforo_A002').removeClass('semaforo_verde');
}
);








jQuery('#A002_001').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_001').addClass('selezionato');
});

jQuery('#A002_002').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_002').addClass('selezionato');
});

jQuery('#A002_003').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_003').addClass('selezionato');
});

jQuery('#A002_004').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_004').addClass('selezionato');
});

jQuery('#A002_005').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_005').addClass('selezionato');
});

jQuery('#A002_006').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_006').addClass('selezionato');
});

jQuery('#A002_007').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_007').addClass('selezionato');
});

jQuery('#A002_008').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_008').addClass('selezionato');
});


$('.NULLA002').click( function(){
$('#semaforo_A001').removeClass('semaforo_verde');
$('#semaforo_A002').addClass('semaforo_verde');
}
);

