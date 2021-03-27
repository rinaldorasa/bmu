/*********************************************************************\
 stress_menu_elenco.a.a.b.js
 
 dipendenze 
 ID: COLLAPSE-MENU
 class: NOMENU collapse collapse-icona-position collapse-menu-position

 20210327-0845
 rinaldo.rasa@gmail.com
\*********************************************************************/

let MENU_ICONA_POSIZIONE="position:fixed;top:0rem;right:0rem;overflow:auto;";
let MENU_POSIZIONE="position:fixed;bottom:0rem;left:50%;";
let MENU_HEIGHT="14.75rem";
let MENU_WIDTH="80%"; /* -(100%-MENU_WIDTH)/2 */
let MENU_MARGIN_LEFT="-40%";


document.getElementById("menu_elenco").innerHTML=
'<style>'+
'.collapse-icona-position{'+MENU_ICONA_POSIZIONE+'} '+

'.collapse-menu-position{'+MENU_POSIZIONE+
'margin-left:'+MENU_MARGIN_LEFT+';width:'+MENU_WIDTH+'; height:'+MENU_HEIGHT+';'+
'border-top:solid 0.25rem gray;'+
' overflow:auto;} '+

'.fade-in-4s { animation: fadeIn ease 4s; -webkit-animation: fadeIn ease 4s; -moz-animation: fadeIn ease 4s; -o-animation: fadeIn ease 4s; -ms-animation: fadeIn ease 4s;}@keyframes fadeIn{ 0% { opacity:0; } 100% { opacity:1; }}@-moz-keyframes fadeIn { 0% { opacity:0; } 100% { opacity:1; }}@-webkit-keyframes fadeIn { 0% { opacity:0; } 100% { opacity:1; }}@-o-keyframes fadeIn { 0% { opacity:0; } 100% { opacity:1; }}@-ms-keyframes fadeIn { 0% { opacity:0; } 100% { opacity:1; }}'+
'</style>'+



'<section class="NOMENU">'+

 '<a type="" '+ /* attivazione della icona del menu */
 ' class="px-3 bg-warning collapse-icona-position" '+
 ' data-toggle="collapse" '+
 ' data-target="#COLLAPSE-MENU" '+
 ' aria-expanded="false">'+
 
	'<svg width="1rem" height="1rem" viewBox="0 0 16 16" class="bi bi-back" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/></svg>'+
 '</a>'+ /* attivazione della icona del menu */

 

'<article id="COLLAPSE-MENU" '+ /* contenitore menu collapsato */
' class="collapse collapse-menu-position bg-dark fade-in-4s"> '+

 '<blockquote class="bg-dark border border-dark">'+ /* contenuto menu collapsato */
 
	
		'<span id="menu_elenco_items">'+
		'</span>'+
	

 
 '</blockquote> '+ /* contenuto menu collapsato items */
'</article>'+ /* contenitore menu collapsato */


'</section>'+ /* sezione NOMENU */

'<span id="semafori"></span>';





