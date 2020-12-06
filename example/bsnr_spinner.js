/* spinner generico */  

document.getElementById("bsnr_spinner").innerHTML='  <div  id="spinner"  class="spinner-border text-primary" role="status">   <span class="visually-hidden">Loading...</span> </div> ';  

/* funzione per lo spinner */    function attesa(){    if (document.all){}    else if (document.getElementById){    document.getElementById("spinner").style.visibility="hidden";    }        }   