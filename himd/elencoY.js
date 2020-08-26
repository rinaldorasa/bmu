/**************************

elencoY per HIMD 20200826
mini database javascript

**************************/

// 

var pagina_vuota="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html";

var idA001=[
["Altervista",""],
["http://edoraandiamo.altervista.org/",
"indice"],
["http://rinaldorasa.altervista.org/",
"blog"],
["http://rasarinaldo.altervista.org/",
"sito web"],
["http://beatsupernovarasa.altervista.org/",
"sito web"],

["http://veneziamestremarghera.altervista.org/",
"sito web"],
["http://mestreveneziamarghera.altervista.org/",
"sito web"],
["http://margheraveneziamestre.altervista.org/",
"sito web"],
["https://venexia.altervista.org/",
"sito web"],

["http://venexiadue.altervista.org/",
"sito web"],
["http://noteapiedipagina.altervista.org/",
"sito web"],
["http://venexiatre.altervista.org/",
"sito web"],
["http://venexiaiv.altervista.org/",
"sito web"],

["https://veneziav.altervista.org/",
"sito web"],
["http://veneziavi.altervista.org/",
"sito web"],
["http://odlanir.altervista.org/",
"sito web"],
[pagina_vuota,
"pagina vuota"],

[pagina_vuota,
"pagina vuota"],
[pagina_vuota,
"pagina vuota"],
[pagina_vuota,
"pagina vuota"],
[pagina_vuota,
"pagina vuota"]

];


var idA002=[
["Agenda",""],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],

[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],

[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],

[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],

[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"]

];


var idA003=[
["Nuovo elenco",""],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],

[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],

[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],

[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],

[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"],
[pagina_vuota,"pagina vuota"]

];








document.getElementById("elencoY").innerHTML=

'<style> ' + ' ' + 
// aside ha il tag per lanciare
// il programma

'aside { overflow:auto; } ' + 
//
// DA AGGIORNARE AL MOMENTO
// DELLA CREAZIONE DI UN
// NUOVO ARTICOLO
//
// id di article
//
'article#A001, article#A002, article#A003 ' +
'{ position:relative; ' + 
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
// 
// ELENCO CLASSES DA AGGIORNARE
// QUANDO SI CREA UN NUOVO ARTICOLO
//
// jQuery rimuove la class selezionato
// da elemento con class NULLAnnn 
//
 '.NULLA001, .NULLA002, ' + 
 '.NULLA003  ' +  
 '{ ' + 
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
//
// effetto nebbia applicato
// agli articoli senza
// semaforo verde 
// 

 ' .NEBBIA { opacity:0.35; } '+
 
//
// LISTA DELLE ECCEZIONI
// permette di disattivare
// articolo o parte di articolo taggato
// tramite la property visibility
// con valore hidden/visible
// se si vuol lasciare lo spazio vuoto
// a segnalare avvenuto hidden
// oppure display none se si vuol
// togliere anche lo spazio vuoto
//
// la property visibility visible
// riporta la situazione visibile
// oppure nel caso di none
// display block
// 
 ' article#A003 { display:block; } '+
 ' td#A001_001 { visibility:visible; } ' + 
// 
 ' ' +  
 ' ' +  
 ' ' +  
 ' </style> ' + 
 ' ' + 
 
 '<article id="A001"> ' + 
 ' <blockquote> ' + 
 ' <span id="semaforo_A001"></span> ' + 
 '	<span>'+idA001[0][0]+'</span> ' + 
 '	<span>A001</span> ' + 
 ' </blockquote> ' + 
 '<table> ' + ' ' + 
 '<tr> ' + 
 
 '<td id="A001_001" class="NULLA001">'+
 '<a href="'
 +idA001[1][0]+ '" target="odlanir"> '
 +idA001[1][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_002" class="NULLA001">'+
 '<a href="'
 +idA001[2][0]+ '" target="odlanir"> '
 +idA001[2][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_003" class="NULLA001">'+
 '<a href="'
 +idA001[3][0]+ '" target="odlanir"> '
 +idA001[3][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_004" class="NULLA001">'+
 '<a href="'
 +idA001[4][0]+ '" target="odlanir"> '
 +idA001[4][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 
 
 '<td id="A001_005" class="NULLA001">'+
 '<a href="'
 +idA001[5][0]+ '" target="odlanir"> '
 +idA001[5][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_006" class="NULLA001">'+
 '<a href="'
 +idA001[6][0]+ '" target="odlanir"> '
 +idA001[6][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_007" class="NULLA001">'+
 '<a href="'
 +idA001[7][0]+ '" target="odlanir"> '
 +idA001[7][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_008" class="NULLA001">'+
 '<a href="'
 +idA001[8][0]+ '" target="odlanir"> '
 +idA001[8][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 
 
 '<td id="A001_009" class="NULLA001">'+
 '<a href="'
 +idA001[9][0]+ '" target="odlanir"> '
 +idA001[9][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_010" class="NULLA001">'+
 '<a href="'
 +idA001[10][0]+ '" target="odlanir"> '
 +idA001[10][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_011" class="NULLA001">'+
 '<a href="'
 +idA001[11][0]+ '" target="odlanir"> '
 +idA001[11][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_012" class="NULLA001">'+
 '<a href="'
 +idA001[12][0]+ '" target="odlanir"> '
 +idA001[12][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 
 
 '<td id="A001_013" class="NULLA001">'+
 '<a href="'
 +idA001[13][0]+ '" target="odlanir"> '
 +idA001[13][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_014" class="NULLA001">'+
 '<a href="'
 +idA001[14][0]+ '" target="odlanir"> '
 +idA001[14][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_015" class="NULLA001">'+
 '<a href="'
 +idA001[15][0]+ '" target="odlanir"> '
 +idA001[15][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_016" class="NULLA001">'+
 '<a href="'
 +idA001[16][0]+ '" target="odlanir"> '
 +idA001[16][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 
 '<td id="A001_017" class="NULLA001">'+
 '<a href="'
 +idA001[17][0]+ '" target="odlanir"> '
 +idA001[17][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_018" class="NULLA001">'+
 '<a href="'
 +idA001[18][0]+ '" target="odlanir"> '
 +idA001[18][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_019" class="NULLA001">'+
 '<a href="'
 +idA001[19][0]+ '" target="odlanir"> '
 +idA001[19][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A001_020" class="NULLA001">'+
 '<a href="'
 +idA001[20][0]+ '" target="odlanir"> '
 +idA001[20][1]+''+'</a>'+
 '</td> ' +  
  


  '</tr>  ' + ' ' + 
 '</table> ' + ' ' + 
 '</article> ' + 
 ' ' + 
 ' ' + 

'<article id="A002"> ' +  
 ' <blockquote> ' + 
 ' <span id="semaforo_A002"></span> ' + 
 '	<span>'+idA002[0][0]+'</span> ' + 
 '	<span>A002</span> ' + 
 ' </blockquote> ' + 
 '<table> ' + ' ' + 
 '<tr> ' + 
 '<td id="A002_001" class="NULLA002">'+
 '<a href="'
 +idA002[1][0]+ '" target="odlanir"> '
 +idA002[1][1]+''+'</a>'+
 '</td> ' + 
 '<td id="A002_002" class="NULLA002">'+
 '<a href="'
 +idA002[2][0]+ '" target="odlanir"> '
 +idA002[2][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_003" class="NULLA002">'+
 '<a href="'
 +idA002[3][0]+ '" target="odlanir"> '
 +idA002[3][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_004" class="NULLA002">'+
 '<a href="'
 +idA002[4][0]+ '" target="odlanir"> '
 +idA002[4][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 

 '<td id="A002_005" class="NULLA002">'+
 '<a href="'
 +idA002[5][0]+ '" target="odlanir"> '
 +idA002[5][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_006" class="NULLA002">'+
 '<a href="'
 +idA002[6][0]+ '" target="odlanir"> '
 +idA002[6][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_007" class="NULLA002">'+
 '<a href="'
 +idA002[7][0]+ '" target="odlanir"> '
 +idA002[7][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_008" class="NULLA002">'+
 '<a href="'
 +idA002[8][0]+ '" target="odlanir"> '
 +idA002[8][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 
 
 '<td id="A002_009" class="NULLA002">'+
 '<a href="'
 +idA002[9][0]+ '" target="odlanir"> '
 +idA002[9][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_010" class="NULLA002">'+
 '<a href="'
 +idA002[10][0]+ '" target="odlanir"> '
 +idA002[10][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_011" class="NULLA002">'+
 '<a href="'
 +idA002[11][0]+ '" target="odlanir"> '
 +idA002[11][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_012" class="NULLA002">'+
 '<a href="'
 +idA002[12][0]+ '" target="odlanir"> '
 +idA002[12][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 

 '<td id="A002_013" class="NULLA002">'+
 '<a href="'
 +idA002[13][0]+ '" target="odlanir"> '
 +idA002[13][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_014" class="NULLA002">'+
 '<a href="'
 +idA002[14][0]+ '" target="odlanir"> '
 +idA002[14][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_015" class="NULLA002">'+
 '<a href="'
 +idA002[15][0]+ '" target="odlanir"> '
 +idA002[15][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_016" class="NULLA002">'+
 '<a href="'
 +idA002[16][0]+ '" target="odlanir"> '
 +idA002[16][1]+''+'</a>'+
 '</td> ' + 
 '</tr>  ' + '<tr> ' + 

 '<td id="A002_017" class="NULLA002">'+
 '<a href="'
 +idA002[17][0]+ '" target="odlanir"> '
 +idA002[17][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_018" class="NULLA002">'+
 '<a href="'
 +idA002[18][0]+ '" target="odlanir"> '
 +idA002[18][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_019" class="NULLA002">'+
 '<a href="'
 +idA002[19][0]+ '" target="odlanir"> '
 +idA002[19][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A002_020" class="NULLA002">'+
 '<a href="'
 +idA002[20][0]+ '" target="odlanir"> '
 +idA002[20][1]+''+'</a>'+
 '</td> ' + 

 
 '</tr>  ' + 
 '</table> ' + 
'</article> ' +  

 
 '<article id="A003"> ' + 
 ' <blockquote> ' + 
 ' <span id="semaforo_A003"></span> ' + 
 '	<span>'+idA003[0][0]+'</span> ' + 
 '	<span>A003</span> ' + 
 ' </blockquote> ' + 
 '<table> ' + ' ' + 
 '<tr> ' + 
 
 '<td id="A003_001" class="NULLA003">'+
 '<a href="'
 +idA003[1][0]+ '" target="odlanir"> '
 +idA003[1][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_002" class="NULLA003">'+
 '<a href="'
 +idA003[2][0]+ '" target="odlanir"> '
 +idA003[2][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_003" class="NULLA003">'+
 '<a href="'
 +idA003[3][0]+ '" target="odlanir"> '
 +idA003[3][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_004" class="NULLA003">'+
 '<a href="'
 +idA003[4][0]+ '" target="odlanir"> '
 +idA003[4][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 
 
 '<td id="A003_005" class="NULLA003">'+
 '<a href="'
 +idA003[5][0]+ '" target="odlanir"> '
 +idA003[5][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_006" class="NULLA003">'+
 '<a href="'
 +idA003[6][0]+ '" target="odlanir"> '
 +idA003[6][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_007" class="NULLA003">'+
 '<a href="'
 +idA003[7][0]+ '" target="odlanir"> '
 +idA003[7][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_008" class="NULLA003">'+
 '<a href="'
 +idA003[8][0]+ '" target="odlanir"> '
 +idA003[8][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 
 
 '<td id="A003_009" class="NULLA003">'+
 '<a href="'
 +idA003[9][0]+ '" target="odlanir"> '
 +idA003[9][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_010" class="NULLA003">'+
 '<a href="'
 +idA003[10][0]+ '" target="odlanir"> '
 +idA003[10][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_011" class="NULLA003">'+
 '<a href="'
 +idA003[11][0]+ '" target="odlanir"> '
 +idA003[11][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_012" class="NULLA003">'+
 '<a href="'
 +idA003[12][0]+ '" target="odlanir"> '
 +idA003[12][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 
 
 '<td id="A003_013" class="NULLA003">'+
 '<a href="'
 +idA003[13][0]+ '" target="odlanir"> '
 +idA003[13][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_014" class="NULLA003">'+
 '<a href="'
 +idA003[14][0]+ '" target="odlanir"> '
 +idA003[14][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_015" class="NULLA003">'+
 '<a href="'
 +idA003[15][0]+ '" target="odlanir"> '
 +idA003[15][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_016" class="NULLA003">'+
 '<a href="'
 +idA003[16][0]+ '" target="odlanir"> '
 +idA003[16][1]+''+'</a>'+
 '</td> ' + 

 '</tr>  ' + '<tr> ' + 
 '<td id="A003_017" class="NULLA003">'+
 '<a href="'
 +idA003[17][0]+ '" target="odlanir"> '
 +idA003[17][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_018" class="NULLA003">'+
 '<a href="'
 +idA003[18][0]+ '" target="odlanir"> '
 +idA003[18][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_019" class="NULLA003">'+
 '<a href="'
 +idA003[19][0]+ '" target="odlanir"> '
 +idA003[19][1]+''+'</a>'+
 '</td> ' + 
 
 '<td id="A003_020" class="NULLA003">'+
 '<a href="'
 +idA003[20][0]+ '" target="odlanir"> '
 +idA003[20][1]+''+'</a>'+
 '</td> ' +  
  


  '</tr>  ' + ' ' + 
 '</table> ' + ' ' + 
 '</article> ' + 
 ' ' + 
 ' ' + 





 ' '+

 '<iframe name="odlanir" '+
 'style="width:100%; height:15rem; ">'+
 '</iframe> ' + 
 
 
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

jQuery('#A001_009').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_009').addClass('selezionato');
});

jQuery('#A001_010').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_010').addClass('selezionato');
});

jQuery('#A001_011').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_011').addClass('selezionato');
});

jQuery('#A001_012').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_012').addClass('selezionato');
});

jQuery('#A001_013').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_013').addClass('selezionato');
});

jQuery('#A001_014').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_014').addClass('selezionato');
});

jQuery('#A001_015').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_015').addClass('selezionato');
});

jQuery('#A001_016').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_016').addClass('selezionato');
});

jQuery('#A001_017').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_017').addClass('selezionato');
});

jQuery('#A001_018').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_018').addClass('selezionato');
});

jQuery('#A001_019').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_019').addClass('selezionato');
});

jQuery('#A001_020').click( function() {
jQuery('.NULLA001').removeClass('selezionato');
jQuery('#A001_020').addClass('selezionato');
});



// il semaforo
// rimuove titolo a tutti gli articoli 
// precedente selezionati
// accende il titolo articolo selezionato
// i semafori funzionano anche se
// il segnale pagina scelta non funzionasse

$('.NULLA001').click( function(){
$('#semaforo_A001').addClass('semaforo_verde');
$('#semaforo_A002').removeClass('semaforo_verde');
$('#semaforo_A003').removeClass('semaforo_verde');
$('#A001').removeClass('NEBBIA');
$('#A002').addClass('NEBBIA');
$('#A003').addClass('NEBBIA');

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

jQuery('#A002_009').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_009').addClass('selezionato');
});

jQuery('#A002_010').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_010').addClass('selezionato');
});

jQuery('#A002_011').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_011').addClass('selezionato');
});

jQuery('#A002_012').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_012').addClass('selezionato');
});

jQuery('#A002_013').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_013').addClass('selezionato');
});

jQuery('#A002_014').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_014').addClass('selezionato');
});

jQuery('#A002_015').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_015').addClass('selezionato');
});

jQuery('#A002_016').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_016').addClass('selezionato');
});

jQuery('#A002_017').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_017').addClass('selezionato');
});

jQuery('#A002_018').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_018').addClass('selezionato');
});

jQuery('#A002_019').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_019').addClass('selezionato');
});

jQuery('#A002_020').click( function() {
jQuery('.NULLA002').removeClass('selezionato');
jQuery('#A002_020').addClass('selezionato');
});


$('.NULLA002').click( function(){
$('#semaforo_A001').removeClass('semaforo_verde');
$('#semaforo_A002').addClass('semaforo_verde');
$('#semaforo_A003').removeClass('semaforo_verde');
$('#A001').addClass('NEBBIA');
$('#A002').removeClass('NEBBIA');
$('#A003').addClass('NEBBIA');

}
);





jQuery('#A003_001').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_001').addClass('selezionato');
});

jQuery('#A003_002').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_002').addClass('selezionato');
});

jQuery('#A003_003').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_003').addClass('selezionato');
});

jQuery('#A003_004').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_004').addClass('selezionato');
});

jQuery('#A003_005').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_005').addClass('selezionato');
});

jQuery('#A003_006').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_006').addClass('selezionato');
});

jQuery('#A003_007').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_007').addClass('selezionato');
});

jQuery('#A003_008').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_008').addClass('selezionato');
});

jQuery('#A003_009').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_009').addClass('selezionato');
});

jQuery('#A003_010').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_010').addClass('selezionato');
});

jQuery('#A003_011').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_011').addClass('selezionato');
});

jQuery('#A003_012').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_012').addClass('selezionato');
});

jQuery('#A003_013').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_013').addClass('selezionato');
});

jQuery('#A003_014').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_014').addClass('selezionato');
});

jQuery('#A003_015').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_015').addClass('selezionato');
});

jQuery('#A003_016').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_016').addClass('selezionato');
});

jQuery('#A003_017').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_017').addClass('selezionato');
});

jQuery('#A003_018').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_018').addClass('selezionato');
});

jQuery('#A003_019').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_019').addClass('selezionato');
});

jQuery('#A003_020').click( function() {
jQuery('.NULLA003').removeClass('selezionato');
jQuery('#A003_020').addClass('selezionato');
});


$('.NULLA003').click( function(){
$('#semaforo_A001').removeClass('semaforo_verde');
$('#semaforo_A002').removeClass('semaforo_verde');
$('#semaforo_A003').addClass('semaforo_verde');
$('#A001').addClass('NEBBIA');
$('#A002').addClass('NEBBIA');
$('#A003').removeClass('NEBBIA');

}
);

