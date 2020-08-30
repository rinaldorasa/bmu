
//////////////////////////////////
// 
// elencoY_new.js
// elencoY debuggato 20200830-1900 
// 
// le misure sono per la
// maggior parte calcolate
// in funzione del font size
// 
//////////////////////////////////

var pagina_vuota="http://edoraandiamo.altervista.org/bmu/base/paginavuota.html";
var spaceone="&nbsp;&nbsp;&nbsp;&nbsp;";


var idA001=[
["Altervista",""],


["http://edoraandiamo.altervista.org/",
"indice"],

["http://rinaldorasa.altervista.org/",
"blog"],

["http://rasarinaldo.altervista.org/",
"rasarinaldo"],

["http://beatsupernovarasa.altervista.org/",
"beatsupernova"],



["http://veneziamestremarghera.altervista.org/",
"veneziamestremarghera"],

["http://mestreveneziamarghera.altervista.org/",
"mestreveneziamarghera"],

["http://margheraveneziamestre.altervista.org/",
"margheraveneziamestre"],

["https://venexia.altervista.org/",
"venexia"],



["http://venexiadue.altervista.org/",
"venexiadue"],

["http://noteapiedipagina.altervista.org/",
"noteapiedipagina"],

["http://venexiatre.altervista.org/",
"venexiatre"],

["http://venexiaiv.altervista.org/",
"venexiaiv"],



["https://veneziav.altervista.org/",
"veneziav"],

["http://veneziavi.altervista.org/",
"veneziavi"],

["http://odlanir.altervista.org/",
"odlanir"],

[pagina_vuota,
spaceone],



[pagina_vuota,
spaceone],
[pagina_vuota,
spaceone],
[pagina_vuota,
spaceone],
[pagina_vuota,
spaceone]

];



var idA002=[
["Agenda 1989-2010",""],
["http://odlanir.altervista.org/mok/testTIPOdue-1992.html","1992"],
["http://odlanir.altervista.org/mok/testTIPOuno-1993.html","1993"],
["http://odlanir.altervista.org/mok/testTIPOdue-1994.html","1994"],
["http://odlanir.altervista.org/mok/testTIPOuno-1995.html","1995"],

["http://odlanir.altervista.org/mok/testTIPOdue-1996.html","1996"],
["http://odlanir.altervista.org/mok/testTIPOuno-1997.html","1997"],
["http://odlanir.altervista.org/mok/testTIPOdue-1998.html","1998"],
["http://odlanir.altervista.org/mok/testTIPOuno-1999.html","1999"],

["http://odlanir.altervista.org/mok/testTIPOdue-2000.html","2000"],
["http://odlanir.altervista.org/mok/testTIPOuno-2001.html","2001"],
["http://odlanir.altervista.org/mok/testTIPOdue-2002.html","2002"],
["http://odlanir.altervista.org/mok/testTIPOuno-2003.html","2003"],

["http://odlanir.altervista.org/mok/testTIPOdue-2004.html","2004"],
["http://odlanir.altervista.org/mok/testTIPOuno-2005.html","2005"],
["http://odlanir.altervista.org/mok/testTIPOdue-2006.html","2006"],
["http://odlanir.altervista.org/mok/testTIPOuno-2007.html","2007"],

["http://odlanir.altervista.org/mok/testTIPOdue-2008.html","2008"],
["http://odlanir.altervista.org/mok/testTIPOuno-2009.html","2009"],
["http://odlanir.altervista.org/mok/testTIPOdue-2010.html","2010"],
[pagina_vuota,spaceone]

];


var idA003=[
["Fotografie Venezia",""],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],

[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],

[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],

[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],

[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone]

];



var idA004=[
["Nuovo elenco",""],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],

[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],

[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],

[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],

[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone],
[pagina_vuota,spaceone]

];


var immagine_cat=["","https://pbs.twimg.com/profile_images/1021387736446586881/ZL7JJFpZ_400x400.jpg"];

var imA001=
[ 

["",""],
["","https://pbs.twimg.com/profile_images/1021387736446586881/ZL7JJFpZ_400x400.jpg"] 

]


///////////// variabili css
//

A_FONT_SIZE=1.5;

ASIDE_FONT_SIZE=A_FONT_SIZE;

TD_HEIGHT=A_FONT_SIZE;  //  rem

TD_PADDING=TD_HEIGHT * 0.32 ;  // REM

BLOCKQUOTE_PADDING=TD_PADDING;

// ASIDE_FONT_SIZE=TD_HEIGHT * 0.66 ;  // rem

//

document.getElementById("elencoY").innerHTML=
'  '+
'<meta charset="utf-8">'+
//
'<style> ' +
//
' aside * { color:black; '+
'font-size:'+ASIDE_FONT_SIZE+'rem; '+
'font-family:sans-serif; '+
// font x debugging
// 'font-family:monospace; '+
'} '+
'aside { overflow:auto; } ' +

' article {  }  '+

' blockquote { text-align:center; }  '+
' blockquote span:nth-child(2) { padding:'+BLOCKQUOTE_PADDING+'rem; }  '+
' blockquote span:nth-child(2) { background-color:white; }  '+
' blockquote span:nth-child(2) { border-radius:0.2rem; }  '+
//
/////////////////// table 
//
' blockquote span:nth-child(3) { display:none; }  '+
//
//
//
//
'table{ table-layout:fixed; width:100%; } '+
//
//
//
//
// 
' td  { position:relative; } '+
// 
' td  { padding:'+TD_PADDING+'rem; } '+
//
' td  { height:'+TD_HEIGHT+'rem; } '+
' td  { text-align:center; } '+
' td  { background-color:white; } '+
' td  { background-color:rgba(255,255,255,0.5); } '+
// cornice debugging
' td  { border:solid 0rem green; } '+
// 
' td  { overflow:hidden; } '+
// ' td  { overflow:auto; } '+
// ' td  { text-overflow:ellipsis; } '+
//
// neutralizza i settaggi di default
// per il tag a
 'td>a, td>a:link, td>a:visited ' + 
 '{ ' + 
 'padding:0.2rem; ' + 
 'background-color:rgba(128,0,0,0.5); ' + 
 'color:white; ' + 
 'text-decoration: none; ' + 
 'border-radius:0.2rem; ' + 
// cornice debugging 
 'border:solid 0rem black; ' + 
 'overflow:auto; ' + 
 '} ' + 
 ' ' +
//  
 'td>a { font-size:'+A_FONT_SIZE+'rem;  }  '+ 
// 
//
 ' .immA { position:absolute; } '+
 ' .immA { top:-0.25rem; } '+ 
 ' .immA { margin-top:0.5rem; } '+
 ' .immA { padding-top:0rem; } '+
 ' .immA { width:1.5rem; } '+
 ' .immA { height:1.5rem; } '+
// cornice debugging 
 ' .immA { border:solid 0rem olive; } '+ 
//
 ' .txtA {  } '+ 
//
//
/////////////////////////////////////////


/////////////////// selezionato 
//
// gestito da jQuery memorizza la voce
// selezionata ultima memoria dando in tal
// modo una brevissima cronologia di navigazione
 '.selezionato { ' + 
 ' border-radius: 0.4rem; ' + 
 ' background-color:rgb(255,165,0,0.8) !important; ' + 
 ' color: oldlace !important; ' + 
 ' color: white !important;	 ' +
 ' color: black !important;	 ' + 
 ' border-left:solid 0.5rem white !important ; '+ 
 ' border-right:solid 0.5rem white !important ; '+ 
  
 ' } ' + 
 ' ' + 
//
//////////////// semaforo 
//
 ' ' + 
// quando esistono maggiore di 1 articoli
// occorre segnalare a quale tipo di articolo
// appartiene il file visualizzato
// utilizzando un semaforo verde acceso vicino
// al titolo article
 '.semaforo_verde { ' + 
// ' height: 0.5rem; ' + 
// ' width: 0.5rem; ' + 
 ' height: 0.75rem; ' + 
 ' width: 0.75rem; ' +  
 ' background-color: green; ' + 
 ' border:solid 0.2em white; ' + 
 ' border-radius: 50%; ' + 
 ' display: inline-block; ' + 
 ' } ' + 
 ' ' +
 
//
//
//
///////////////////////////
// effetto nebbia applicato
// agli articoli senza
// semaforo verde 
// 

 ' .NEBBIA { background-color:gray; } '+
 ' .NEBBIA { opacity:0.6; } '+ 
 
//
//
//
// *********************
// LISTA DELLE ECCEZIONI
// *********************
' article#A001, article#A002, '+
' article#A003, article#A004 '+
' { display:block; }'+ 
//
//
//





'</style> ' +

// articolo 001 ini
 
  
 '<article id="A001"> ' + 
 ' <blockquote> ' + 
 ' <span id="semaforo_A001"></span> ' + 
 '	<span>'+idA001[0][0]+'</span> ' + 
 '	<span>A001</span> ' + 
 ' </blockquote> ' + 
 '<table> ' + ' ' + 
 '<tr> ' + 
 
 '<td id="A001_X_001" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_001" href="'
 +idA001[1][0]+ '" target="odlanir"> '
 +idA001[1][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_002" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_002" href="'
 +idA001[2][0]+ '" target="odlanir"> '
 +idA001[2][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 

 '<td id="A001_X_003" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_003" href="'
 +idA001[3][0]+ '" target="odlanir"> '
 +idA001[3][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][1]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

'</td> ' + 

 
 '<td id="A001_X_004" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_004" href="'
 +idA001[4][0]+ '" target="odlanir"> '
 +idA001[4][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
' '+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A001_X_005" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_005" href="'
 +idA001[5][0]+ '" target="odlanir"> '
 +idA001[5][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_006" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_006" href="'
 +idA001[6][0]+ '" target="odlanir"> '
 +idA001[6][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_007" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_007" href="'
 +idA001[7][0]+ '" target="odlanir"> '
 +idA001[7][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_008" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_008" href="'
 +idA001[8][0]+ '" target="odlanir"> '
 +idA001[8][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A001_X_009" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_009" href="'
 +idA001[9][0]+ '" target="odlanir"> '
 +idA001[9][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_010" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_010" href="'
 +idA001[10][0]+ '" target="odlanir"> '
 +idA001[10][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_011" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_011" href="'
 +idA001[11][0]+ '" target="odlanir"> '
 +idA001[11][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_012" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_012" href="'
 +idA001[12][0]+ '" target="odlanir"> '
 +idA001[12][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A001_X_013" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_013" href="'
 +idA001[13][0]+ '" target="odlanir"> '
 +idA001[13][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_014" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_014" href="'
 +idA001[14][0]+ '" target="odlanir"> '
 +idA001[14][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_015" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_015" href="'
 +idA001[15][0]+ '" target="odlanir"> '
 +idA001[15][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_016" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_016" href="'
 +idA001[16][0]+ '" target="odlanir"> '
 +idA001[16][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 '<td id="A001_X_017" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_017" href="'
 +idA001[17][0]+ '" target="odlanir"> '
 +idA001[17][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_018" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_018" href="'
 +idA001[18][0]+ '" target="odlanir"> '
 +idA001[18][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_019" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_019" href="'
 +idA001[19][0]+ '" target="odlanir"> '
 +idA001[19][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A001_X_020" class="NULLA_X_001">'+
 '<a class="NULLA001" id="A001_020" href="'
 +idA001[20][0]+ '" target="odlanir"> '
 +idA001[20][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 


 '</tr> ' + ' ' + 
 '</table> ' + ' ' + 
 '</article> ' + 
 ' ' + 
 ' ' + 

 
// articolo 001 fin 
 
// articolo 002 ini 

 
 '<article id="A002"> ' + 
 ' <blockquote> ' + 
 ' <span id="semaforo_A002"></span> ' + 
 '	<span>'+idA002[0][0]+'</span> ' + 
 '	<span>A002</span> ' + 
 ' </blockquote> ' + 
 '<table> ' + ' ' + 
 '<tr> ' + 
 
 '<td id="A002_X_001" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_001" href="'
 +idA002[1][0]+ '" target="odlanir"> '
 +idA002[1][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_002" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_002" href="'
 +idA002[2][0]+ '" target="odlanir"> '
 +idA002[2][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_003" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_003" href="'
 +idA002[3][0]+ '" target="odlanir"> '
 +idA002[3][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_004" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_004" href="'
 +idA002[4][0]+ '" target="odlanir"> '
 +idA002[4][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A002_X_005" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_005" href="'
 +idA002[5][0]+ '" target="odlanir"> '
 +idA002[5][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_006" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_006" href="'
 +idA002[6][0]+ '" target="odlanir"> '
 +idA002[6][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_007" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_007" href="'
 +idA002[7][0]+ '" target="odlanir"> '
 +idA002[7][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_008" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_008" href="'
 +idA002[8][0]+ '" target="odlanir"> '
 +idA002[8][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A002_X_009" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_009" href="'
 +idA002[9][0]+ '" target="odlanir"> '
 +idA002[9][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_010" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_010" href="'
 +idA002[10][0]+ '" target="odlanir"> '
 +idA002[10][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_011" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_011" href="'
 +idA002[11][0]+ '" target="odlanir"> '
 +idA002[11][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_012" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_012" href="'
 +idA002[12][0]+ '" target="odlanir"> '
 +idA002[12][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A002_X_013" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_013" href="'
 +idA002[13][0]+ '" target="odlanir"> '
 +idA002[13][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_014" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_014" href="'
 +idA002[14][0]+ '" target="odlanir"> '
 +idA002[14][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_015" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_015" href="'
 +idA002[15][0]+ '" target="odlanir"> '
 +idA002[15][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_016" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_016" href="'
 +idA002[16][0]+ '" target="odlanir"> '
 +idA002[16][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 '<td id="A002_X_017" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_017" href="'
 +idA002[17][0]+ '" target="odlanir"> '
 +idA002[17][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_018" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_018" href="'
 +idA002[18][0]+ '" target="odlanir"> '
 +idA002[18][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_019" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_019" href="'
 +idA002[19][0]+ '" target="odlanir"> '
 +idA002[19][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A002_X_020" class="NULLA_X_002">'+
 '<a class="NULLA002" id="A002_020" href="'
 +idA002[20][0]+ '" target="odlanir"> '
 +idA002[20][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 


 '</tr> ' + ' ' + 
 '</table> ' + ' ' + 
 '</article> ' + 
 ' ' + 
 ' ' + 


// articolo 002 fin



// articolo 003 ini 

 
 '<article id="A003"> ' + 
 ' <blockquote> ' + 
 ' <span id="semaforo_A003"></span> ' + 
 '	<span>'+idA003[0][0]+'</span> ' + 
 '	<span>A003</span> ' + 
 ' </blockquote> ' + 
 '<table> ' + ' ' + 
 '<tr> ' + 
 
 '<td id="A003_X_001" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_001" href="'
 +idA003[1][0]+ '" target="odlanir"> '
 +idA003[1][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_002" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_002" href="'
 +idA003[2][0]+ '" target="odlanir"> '
 +idA003[2][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_003" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_003" href="'
 +idA003[3][0]+ '" target="odlanir"> '
 +idA003[3][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_004" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_004" href="'
 +idA003[4][0]+ '" target="odlanir"> '
 +idA003[4][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A003_X_005" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_005" href="'
 +idA003[5][0]+ '" target="odlanir"> '
 +idA003[5][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_006" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_006" href="'
 +idA003[6][0]+ '" target="odlanir"> '
 +idA003[6][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_007" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_007" href="'
 +idA003[7][0]+ '" target="odlanir"> '
 +idA003[7][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_008" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_008" href="'
 +idA003[8][0]+ '" target="odlanir"> '
 +idA003[8][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A003_X_009" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_009" href="'
 +idA003[9][0]+ '" target="odlanir"> '
 +idA003[9][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_010" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_010" href="'
 +idA003[10][0]+ '" target="odlanir"> '
 +idA003[10][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_011" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_011" href="'
 +idA003[11][0]+ '" target="odlanir"> '
 +idA003[11][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_012" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_012" href="'
 +idA003[12][0]+ '" target="odlanir"> '
 +idA003[12][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A003_X_013" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_013" href="'
 +idA003[13][0]+ '" target="odlanir"> '
 +idA003[13][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_014" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_014" href="'
 +idA003[14][0]+ '" target="odlanir"> '
 +idA003[14][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_015" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_015" href="'
 +idA003[15][0]+ '" target="odlanir"> '
 +idA003[15][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_016" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_016" href="'
 +idA003[16][0]+ '" target="odlanir"> '
 +idA003[16][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 '<td id="A003_X_017" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_017" href="'
 +idA003[17][0]+ '" target="odlanir"> '
 +idA003[17][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_018" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_018" href="'
 +idA003[18][0]+ '" target="odlanir"> '
 +idA003[18][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_019" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_019" href="'
 +idA003[19][0]+ '" target="odlanir"> '
 +idA003[19][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A003_X_020" class="NULLA_X_003">'+
 '<a class="NULLA003" id="A003_020" href="'
 +idA003[20][0]+ '" target="odlanir"> '
 +idA003[20][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 


 '</tr> ' + ' ' + 
 '</table> ' + ' ' + 
 '</article> ' + 
 ' ' + 
 ' ' + 


// articolo 003 fin 
 



// articolo 004 ini 

 
 '<article id="A004"> ' + 
 ' <blockquote> ' + 
 ' <span id="semaforo_A004"></span> ' + 
 '	<span>'+idA004[0][0]+'</span> ' + 
 '	<span>A004</span> ' + 
 ' </blockquote> ' + 
 '<table> ' + ' ' + 
 '<tr> ' + 
 
 '<td id="A004_X_001" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_001" href="'
 +idA004[1][0]+ '" target="odlanir"> '
 +idA004[1][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_002" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_002" href="'
 +idA004[2][0]+ '" target="odlanir"> '
 +idA004[2][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_003" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_003" href="'
 +idA004[3][0]+ '" target="odlanir"> '
 +idA004[3][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_004" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_004" href="'
 +idA004[4][0]+ '" target="odlanir"> '
 +idA004[4][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A004_X_005" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_005" href="'
 +idA004[5][0]+ '" target="odlanir"> '
 +idA004[5][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_006" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_006" href="'
 +idA004[6][0]+ '" target="odlanir"> '
 +idA004[6][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_007" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_007" href="'
 +idA004[7][0]+ '" target="odlanir"> '
 +idA004[7][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_008" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_008" href="'
 +idA004[8][0]+ '" target="odlanir"> '
 +idA004[8][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A004_X_009" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_009" href="'
 +idA004[9][0]+ '" target="odlanir"> '
 +idA004[9][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_010" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_010" href="'
 +idA004[10][0]+ '" target="odlanir"> '
 +idA004[10][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_011" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_011" href="'
 +idA004[11][0]+ '" target="odlanir"> '
 +idA004[11][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_012" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_012" href="'
 +idA004[12][0]+ '" target="odlanir"> '
 +idA004[12][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 
 '<td id="A004_X_013" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_013" href="'
 +idA004[13][0]+ '" target="odlanir"> '
 +idA004[13][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_014" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_014" href="'
 +idA004[14][0]+ '" target="odlanir"> '
 +idA004[14][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_015" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_015" href="'
 +idA004[15][0]+ '" target="odlanir"> '
 +idA004[15][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_016" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_016" href="'
 +idA004[16][0]+ '" target="odlanir"> '
 +idA004[16][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 

 '</tr> ' + '<tr> ' + 
 '<td id="A004_X_017" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_017" href="'
 +idA004[17][0]+ '" target="odlanir"> '
 +idA004[17][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_018" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_018" href="'
 +idA004[18][0]+ '" target="odlanir"> '
 +idA004[18][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_019" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_019" href="'
 +idA004[19][0]+ '" target="odlanir"> '
 +idA004[19][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 
 '<td id="A004_X_020" class="NULLA_X_004">'+
 '<a class="NULLA004" id="A004_020" href="'
 +idA004[20][0]+ '" target="odlanir"> '
 +idA004[20][1]+''+'</a>'+
'<img class="immA" src="'+imA001[1][0]+'" alt="" title="" />'+
'<span class="txtA">'+
'</span>'+

 '</td> ' + 
 


 '</tr> ' + ' ' + 
 '</table> ' + ' ' + 
 '</article> ' + 
 ' ' + 
 ' ' + 


// articolo 004 fin 

 ' '+
 

'  '
;









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


$('.NULLA001').click( function(){
$('#semaforo_A001').addClass('semaforo_verde');
$('#semaforo_A002').removeClass('semaforo_verde');
$('#semaforo_A003').removeClass('semaforo_verde');
$('#semaforo_A004').removeClass('semaforo_verde');
$('#A001').removeClass('NEBBIA');
$('#A002').addClass('NEBBIA');
$('#A003').addClass('NEBBIA');
$('#A004').addClass('NEBBIA');
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
$('#semaforo_A004').removeClass('semaforo_verde');
$('#A001').addClass('NEBBIA');
$('#A002').removeClass('NEBBIA');
$('#A003').addClass('NEBBIA');
$('#A004').addClass('NEBBIA');
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
$('#semaforo_A004').removeClass('semaforo_verde');
$('#A001').addClass('NEBBIA');
$('#A002').addClass('NEBBIA');
$('#A003').removeClass('NEBBIA');
$('#A004').addClass('NEBBIA');
}
);





jQuery('#A004_001').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_001').addClass('selezionato');
});

jQuery('#A004_002').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_002').addClass('selezionato');
});

jQuery('#A004_003').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_003').addClass('selezionato');
});

jQuery('#A004_004').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_004').addClass('selezionato');
});

jQuery('#A004_005').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_005').addClass('selezionato');
});

jQuery('#A004_006').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_006').addClass('selezionato');
});

jQuery('#A004_007').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_007').addClass('selezionato');
});

jQuery('#A004_008').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_008').addClass('selezionato');
});

jQuery('#A004_009').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_009').addClass('selezionato');
});

jQuery('#A004_010').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_010').addClass('selezionato');
});

jQuery('#A004_011').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_011').addClass('selezionato');
});

jQuery('#A004_012').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_012').addClass('selezionato');
});

jQuery('#A004_013').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_013').addClass('selezionato');
});

jQuery('#A004_014').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_014').addClass('selezionato');
});

jQuery('#A004_015').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_015').addClass('selezionato');
});

jQuery('#A004_016').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_016').addClass('selezionato');
});

jQuery('#A004_017').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_017').addClass('selezionato');
});

jQuery('#A004_018').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_018').addClass('selezionato');
});

jQuery('#A004_019').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_019').addClass('selezionato');
});

jQuery('#A004_020').click( function() {
jQuery('.NULLA004').removeClass('selezionato');
jQuery('#A004_020').addClass('selezionato');
});


$('.NULLA004').click( function(){
$('#semaforo_A001').removeClass('semaforo_verde');
$('#semaforo_A002').removeClass('semaforo_verde');
$('#semaforo_A003').removeClass('semaforo_verde');
$('#semaforo_A004').addClass('semaforo_verde');
$('#A001').addClass('NEBBIA');
$('#A002').addClass('NEBBIA');
$('#A003').addClass('NEBBIA');
$('#A004').removeClass('NEBBIA');
}
);


