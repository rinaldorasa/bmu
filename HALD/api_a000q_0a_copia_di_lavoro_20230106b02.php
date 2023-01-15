<!DOCTYPE html>

<html lang="it">

<script>

/*

api_a000q_0a_copia_di_lavoro_20230106b01.php

	API_a00q_release_0a_.js

	20:22:12:21:18:17
		20:23:01:01:14:22
		20:23:01:02:19:58

	20:23:01:06:14:08
http://avid3820725.altervista.org/WORKOU/OGGI/20191119/api_a000q/0a/api_a000q_0a_.html

*/




let variabile="questa funziona come variabile e potrebbe contenere testo formattato";


document.write(`

<head>
<title> ALPHA_hcjp_a00q_.php rev. 20:22:12:21_16:00 gamma_hcjp_a00qa.js delta_hcjp_a00qa.js popup_hcjp_a00qa.php  </title>


</head>

<body>

<main id="MAIN">




	<div id="BUONGIORNO">
	
	<div style="font-size: inherit;">
	
		20:22:12:21_16:00
		
		Io sono il test per il testo ... ma qui sotto esiste anche un test per una immagine .
		E (sorpresa! utilizzo API document.write()
		document.write e script gamma delta accorpati
		<br>
		cronologia:
		<br>
		20:22:12:21_18:14
		<br>
		20:22:12:21_18:18
		<br>
		20:22:12:21_18:26
		<br>
		
	
	</div>
	<div style="font-size: inherit;">
	... inserto --- con property inherit ---
	</div>
	
	<div style="font-size: 25%;">
	ALPHA_hcjp_a00q_.php rev. 20:22:12:21_16:00 gamma_hcjp_a00qa.js delta_hcjp_a00qa.js popup_hcjp_a00qa.php 
	</div>
	
	</div>
	<div class="immagine">
	<img src="https://www.beatsupernovarasa.com/images/Image2_HG.jpg" alt="" title="" />
	</div> 
	<div id="TEST"><q>err</q>TEST</div> 

</main>

<footer>
	<section class="tog0menu animate__animated animate__backInDown" >
	
	<?php  include("popup-test_a.php");  ?>
	
	</section>
</footer>


`);






/* 
	delta_hcjp_a00qa.js 

	
	20:22:12:21_16:00

*/



delta=()=>{ /* alert("delta"); */


document.write(`

<article id="CONTENITORE_INPUT"><div>
<input id="INPUT_SCELTO" type="range" list="LISTA" step="0.1" min="0.00" max="5.00" />
</div></article>
<datalist id="LISTA">

<option value="0.00"> </option>
<option value="0.25"> </option>
<option value="0.50"> </option>
<option value="0.75"> </option>
<option value="1.00"> </option>
<option value="1.25"> </option>
<option value="1.50"> </option>
<option value="1.75"> </option>
<option value="2.00"> </option>
<option value="2.25"> </option>
<option value="2.50"> </option>
<option value="2.75"> </option>
<option value="3.00"> </option>
<option value="3.25"> </option>
<option value="3.50"> </option>
<option value="3.75"> </option>
<option value="4.00"> </option>
<option value="4.25"> </option>
<option value="4.50"> </option>
<option value="4.75"> </option>
<option value="5.00"> </option>



</datalist>

<div id="VALORE_DI_INPUT"><q>err</q>VALORE_DI_INPUT</div>
<div id="WIDTH"><q>err</q>WIDTH</div>

`);



sonda_Width=(POSIZIONE)=>{
WIDTH = window.innerWidth;
WIDTH_REM=WIDTH/16;

document.getElementById("WIDTH").innerHTML=``
+``
+``
+`<style>`
+`input[type="range"]`
+`{`
	+``
	+`-webkit-appearance: none;`
	+`width:95%;` /* per evitare overflow */
	+``
	+``
	+`background-color: orange;`                /* per debugging */
	+`background-color: rgba(25,225,37,0.25);`  /* production    */
	+``

+`}`
+``
+`article#CONTENITORE_INPUT`
+`{`
	+`position: fixed;`
	+`bottom: `+POSIZIONE+`rem;`
	+`left: 5rem;`
	+`width: `+(WIDTH_REM-10)+`rem;`
	+``
	+`text-align:center;`
	+``
	+`border: solid 0.00rem green;`
	+``
+`}`
+``

+`</style>`
+``
+``

+``;
} ; setInterval(sonda_Width, 1, 1.5) ;






sonda_Input=()=>{
	
VALORE_DI_INPUT=document.getElementById("INPUT_SCELTO").value;

DIM_INPUT = VALORE_DI_INPUT; /* valore del resize element */
DIM_IMAGE = DIM_INPUT * 10;

document.getElementById("VALORE_DI_INPUT").innerHTML=``
/* +DIM_INPUT */ /* per debug */ 
/* +` `       */
/* +DIM_IMAGE */ /* per debug */ 

;

document.getElementById("TEST").innerHTML=``
+`<style>`
+`div#BUONGIORNO{font-size: `+(DIM_INPUT)+`rem!important;}`
+``
+`img{ width: `+DIM_IMAGE+`rem!important; }`
+``
+`</style> `
+``

+``
;


} ;  setInterval(sonda_Input, 1) ;





} ; delta(); 



/*

	gamma_hcjp_a00qa.js 20:22:12:21_16:00

*/



/* calcolo larghezza window */
testWH=()=>{

mis_W = window.innerWidth;
document.getElementById("mis_W").innerHTML = ``
/* mis_W */ /* only for debug */
;

}   ;
calc_Width=setInterval(testWH, 1 );

/* default */
DESKTOP = 1 ; 
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{ DESKTOP = 0 ; } else { DESKTOP = 1 ; }

/* margini body */
if(DESKTOP==0){
body_margin_top=    2.5;
body_margin_right=  5.0;
body_margin_bottom= 5.0;
body_margin_left=   5.0;
 
font_size=1.25;}
else{
body_margin_top    =  2.5;
body_margin_right  =  2.5;
body_margin_bottom =  5.0;
body_margin_left   =  2.5;

font_size=1.00;}


/* harlequin dimensioni */
if(DESKTOP ==  0){
dime_toggsi_toggno = body_margin_left * 0.50;
} 
else
{
dime_toggsi_toggno = body_margin_left * 0.50;
}

/* harlequin colore */
color_tog0menu_ok="rgba(23,82,0, 0.50);";
color_tog0menu_ko="rgba(252,78,5,0.50);";


/* harlequin toggle js */
menusimenu =()=> {
document.querySelector(".tog0menu").style.display="block";
document.querySelector(".tog1menu").style.display="none"; 
document.querySelector(".tog2menu").style.display="block" ; 

document.querySelector("#MAIN").style.display="none";

} ; 

menunomenu =()=> {
document.querySelector(".tog0menu").style.display="none" ;
document.querySelector(".tog1menu").style.display="block"; 
document.querySelector(".tog2menu").style.display="none" ; 

document.querySelector("#MAIN").style.display="block";

} ; 


/* utility copia testo in blocknote */
/* How to copy TEXT to Clipboard on Button-ClickA Pen By Shaik Maqsoodhttps://codepen.io/shaikmaqsood/pen/XmydxJ */
/* <button onclick="copyToClipboard('#commento')">Copy TEXT </button> */

function copyToClipboard(element) {var $temp = $("<input>");$("body").append($temp);$temp.val($(element).text()).select();document.execCommand("copy");$temp.remove();};


/* personalizzazioni */
if(DESKTOP ==  0){
font_size_goodbye = 1.25;
} 
else
{
font_size_goodbye = 0.75;
}



document.write(`
<meta charset="utf-8">
<meta name="generator" content="AlterVista - Editor HTML">

<link rel="icon" type="image/png" href="https://it.altervista.org/images/favicon/favicon-16x16.png" sizes="16x16">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" >

<style> 

html * {font-size:`+font_size+`rem;} 
html * {font-family:"PT Mono",monospace;} 

html{background-color:rgba(2,53,72,0.50);}

body{
margin-top:    `+body_margin_top    +`rem;  
margin-right:  `+body_margin_right  +`rem;
margin-bottom: `+body_margin_bottom +`rem;
margin-left:   `+body_margin_left   +`rem;

}

main{
margin-top:    `+body_margin_top    * 0.25 +`rem;  
margin-right:  `+body_margin_right  * 0.25 +`rem;
margin-bottom: `+body_margin_bottom * 0.25 +`rem;
margin-left:   `+body_margin_left   * 0.25 +`rem;

}


.toggsi{position:fixed;bottom:0rem;left:0rem ; cursor: pointer;
border-top:     solid `+dime_toggsi_toggno+`rem `+color_tog0menu_ok+`;
border-right:   solid `+dime_toggsi_toggno+`rem `+color_tog0menu_ok+`;
border-bottom:  solid `+dime_toggsi_toggno+`rem transparent;
border-left:    solid `+dime_toggsi_toggno+`rem transparent;

}

.toggno{position:fixed;bottom:0rem;left:0rem ; cursor: pointer;
border-top:     solid `+dime_toggsi_toggno+`rem transparent;
border-right:   solid `+dime_toggsi_toggno+`rem transparent;
border-bottom:  solid `+dime_toggsi_toggno+`rem `+color_tog0menu_ko+`;
border-left:    solid `+dime_toggsi_toggno+`rem `+color_tog0menu_ko+`;

}

.tog0menu{ position: fixed; }
.tog0menu{ top: 0rem; }
.tog0menu{ left: 0rem; }
.tog0menu{ padding: 0.5rem; }
.tog0menu{ height: 75%; }
.tog0menu{ background-color: rgba(252,253,72,0.3175); color: black; }
.tog0menu{ border-radius: 0.5rem; }
.tog0menu{ overflow: auto; }
.tog0menu{ z-index:  1000; }
.tog0menu{ display:  none; }


/* utilities */

.cursore {background: lime;line-height: 17px;margin-left: 3px;-webkit-animation: blink 0.8s infinite;width: 7px;height: 15px;}@-webkit-keyframes blink {0% {background: #222}50% {background: lime}100% {background: #222}}


img{ 

  display: block; 
  max-width:100%;   
  max-height:100%;
  width: auto;  
  height: auto;

}



/* goodbye good people */
q#GOODBYE{position:fixed;bottom:0rem;left:`+body_margin_left+`rem;font-size:`+font_size_goodbye+`rem;font-variant:small-caps;}


</style>


<section>
<article style="position:relative;">
<div style="position:absolute;top:0rem;left:0rem;"              id ="toggle1menu" class ="tog1menu" onclick="menusimenu()"><span class="toggsi"></span></div>
<div style="position:absolute;top:0rem;left:0rem;display:none;" id ="toggle2menu" class ="tog2menu" onclick="menunomenu()"><span class="toggno"></span></div>
</article>
</section>

<q id="GOODBYE"> gamma_hcjp_a00qa.js 20:22:12:21_16:00  :) </q>

`);



</script>

</html>
