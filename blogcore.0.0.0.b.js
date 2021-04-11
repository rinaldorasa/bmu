/*************************************
 blogcore.0.0.0.a
 
 RINALDO.RASA@GMAIL.COM
 
 APRIL 11, 2021 18:15
 
*************************************/

document.getElementById("blogcore").innerHTML=
 ' <span id="blogve599"><span class="bi bi-bug-fill bugbug">bug blogve599</span> </span>'+
 ' <span id="rsrord599_ve"><span class="bi bi-bug-fill bugbug">bug rsrord599_ve</span></span>'+

 '';

  
  /* settablette599.js */
  /* rinaldo.rasa@gmail.com  20210331 11:00 */
  
  var TABLE_WIDTH="100%";
  
  var TD1W="75%"; /* width effettivo */
  
  
  
  var raimma001="http://beatsupernovarasa.com/blogve/immave001/";
  
  // 
  var SORGE=[ /*0~~~=>*/"", /*1~~~=>*/raimma001+"1001_ve-accademia-e040223_00027.jpg", /*2~~~=>*/raimma001+"1002_ve-accademia-e040223_00028.jpg", /*3~~~=>*/raimma001+"1003_ve-accademia-e040223_00029.jpg", /*4~~~=>*/raimma001+"1004_ve-accademia-e060221_00047.jpg"]
  
  
  
  
  var BLOG=[
  "",
  "<img id='000001' alt='ve-00001' title='ve-00001' class='blogimp' src='"+SORGE[1 ]+"' />",
  "<img id='000002' alt='ve-00002' title='ve-00002' class='blogimp' src='"+SORGE[2 ]+"' />",
  "<img id='000003' alt='ve-00003' title='ve-00003' class='blogimp' src='"+SORGE[3 ]+"' />",
  "<img id='000004' alt='ve-00004' title='ve-00004' class='blogimp' src='"+SORGE[4 ]+"' />"
  
  ]
  
  
  
  /* !!!RIDOTTO!!! */
  var COMME=[
  "Venezia - Archivio Storico delle fotografie. Â© Rinaldo Rasa  ",
  "1", /* 1   */
  "2", /* 2   */
  "3", /* 3   */
  "4"  /* 4   */
  ]
  
  
  
  var BLOGcmt=[
  "<div id='c-00000' class='blog-c'>"+COMME[0 ]+"</div>",
  "<div id='c-00001' class='blog-c'>"+COMME[1 ]+"</div>",
  "<div id='c-00002' class='blog-c'>"+COMME[2 ]+"</div>",
  "<div id='c-00003' class='blog-c'>"+COMME[3 ]+"</div>",
  "<div id='c-00004' class='blog-c'>"+COMME[4 ]+"</div>"
  ]
  
  
   
  
  document.getElementById("blogve599").innerHTML=
  '<section>'+
  '<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inconsolata:wght@500&family=PT+Mono&family=Roboto+Mono&display=swap" rel="stylesheet">'+
  ''+
  ''+
  '<style>'+
  'table{  table-layout: fixed; width:'+TABLE_WIDTH+';}'+
  'td{vertical-align: top!important;font-size:x-small!important;font-family:"PT Mono",monospace;}'+
  ''+
  'aside.immagine{border-top:solid 0.15rem maroon!important;margin-bottom:2.5rem;padding:0.025rem;opacity:1;}'+
  'div.blog-c, aside.immagine{margin-top:0.05rem;}'+
  ''+
  '.blogimp{width:100%!important;vertical-align: top;font-family:"PT Mono",monospace;}'+
  '.blogimd{width:6rem!important;vertical-align: top;}'+
  '.blog-c{font-family:"PT Mono",monospace;}'+
  '</style>'+
  ''+
  
  ' <table id="tablette" class="table-borderless">'+
  ' <tbody>'+
  ' '+
  '<tr id="trid0001"><td style="width:'+TD1W+';"><aside class="p-1 immagine">'+BLOG[1  ]+BLOGcmt[1  ]+'</aside></td><td>[1  ]<span class="rota"><span id="000001rs" class="rota" ><</span><span id="000001ro" class="rota" >|</span><span id="000001rd" class="rota" >></span></span>'+BLOGcmt[0  ]+SORGE[1 ]+'</td>'+
  '<tr id="trid0002"><td style="width:'+TD1W+';"><aside class="p-1 immagine">'+BLOG[2  ]+BLOGcmt[2  ]+'</aside></td><td>[2  ]<span class="rota"><span id="000002rs" class="rota" ><</span><span id="000002ro" class="rota" >|</span><span id="000002rd" class="rota" >></span></span>'+BLOGcmt[0  ]+'</td>'+
  '<tr id="trid0003"><td style="width:'+TD1W+';"><aside class="p-1 immagine">'+BLOG[3  ]+BLOGcmt[3  ]+'</aside></td><td>[3  ]<span class="rota"><span id="000003rs" class="rota" ><</span><span id="000003ro" class="rota" >|</span><span id="000003rd" class="rota" >></span></span>'+BLOGcmt[0  ]+'</td>'+
  '<tr id="trid0004"><td style="width:'+TD1W+';"><aside class="p-1 immagine">'+BLOG[4  ]+BLOGcmt[4  ]+'</aside></td><td>[4  ]<span class="rota"><span id="000004rs" class="rota" ><</span><span id="000004ro" class="rota" >|</span><span id="000004rd" class="rota" >></span></span>'+BLOGcmt[0  ]+'</td>'+
  
  ' </tbody> </table>'+
  ' '+
  '</section> '+
  ' '+
  
  '';
  
   
  
  
  
  document.getElementById("rsrord599_ve").innerHTML=
  '<style> '+
  
  '.rota{font-size:small!important;}'+ /* definisce lo stile delle pseudo icone */
  
  ' .ruota_img000, .ruota_img90x, .ruota_img90d, .ruota_img90s, .ruota_img180, .RUOTA_S, .RUOTA_D, .RUOTA_O { margin:2.5rem; width:100%!important; overflow:auto!important; } '+
  
  ' .ruota_img000, .RUOTA_O { -webkit-transform:rotate(5deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); } '+
  
  ' .ruota_img90d, .RUOTA_D { -webkit-transform:rotate(90deg); -moz-transform: rotate(90deg); -ms-transform: rotate(90deg); -o-transform: rotate(90deg); transform: rotate(90deg); } '+
  
  ' .ruota_img90s, .RUOTA_S { -webkit-transform:rotate(-90deg); -moz-transform: rotate(-90deg); -ms-transform: rotate(-90deg); -o-transform: rotate(-90deg); transform: rotate(90-deg); } '+
  
  
  ' .ruota_img90x{ -webkit-transform:rotate(90deg); -moz-transform: rotate(90deg); -ms-transform: rotate(90deg); -o-transform: rotate(90deg); transform: rotate(90deg); } '+
  ' .ruota_img180 { -webkit-transform:rotate(180deg); -moz-transform: rotate(180deg); -ms-transform: rotate(180deg); -o-transform: rotate(180deg); transform: rotate(180deg); } '+
  
  '</style> '+
  '';
  
  
  /* comandi per la rotazione immagine richiede jquery */
  
  $(document).ready(function(){ $("#000001rs").click(function(){ $("#000001").removeClass("RUOTA_D"); $("#000001").removeClass("RUOTA_O"); $("#000001").addClass("RUOTA_S"); }); });
  $(document).ready(function(){ $("#000002rs").click(function(){ $("#000002").removeClass("RUOTA_D"); $("#000002").removeClass("RUOTA_O"); $("#000002").addClass("RUOTA_S"); }); });
  $(document).ready(function(){ $("#000003rs").click(function(){ $("#000003").removeClass("RUOTA_D"); $("#000003").removeClass("RUOTA_O"); $("#000003").addClass("RUOTA_S"); }); });
  $(document).ready(function(){ $("#000004rs").click(function(){ $("#000004").removeClass("RUOTA_D"); $("#000004").removeClass("RUOTA_O"); $("#000004").addClass("RUOTA_S"); }); });
  
  
  $(document).ready(function(){ $("#000001ro").click(function(){ $("#000001").removeClass("RUOTA_D"); $("#000001").removeClass("RUOTA_S"); $("#000001").addClass("RUOTA_O"); }); });
  $(document).ready(function(){ $("#000002ro").click(function(){ $("#000002").removeClass("RUOTA_D"); $("#000002").removeClass("RUOTA_S"); $("#000002").addClass("RUOTA_O"); }); });
  $(document).ready(function(){ $("#000003ro").click(function(){ $("#000003").removeClass("RUOTA_D"); $("#000003").removeClass("RUOTA_S"); $("#000003").addClass("RUOTA_O"); }); });
  $(document).ready(function(){ $("#000004ro").click(function(){ $("#000004").removeClass("RUOTA_D"); $("#000004").removeClass("RUOTA_S"); $("#000004").addClass("RUOTA_O"); }); });
  
  
  $(document).ready(function(){ $("#000001rd").click(function(){ $("#000001").removeClass("RUOTA_O"); $("#000001").removeClass("RUOTA_S"); $("#000001").addClass("RUOTA_D"); }); });
  $(document).ready(function(){ $("#000002rd").click(function(){ $("#000002").removeClass("RUOTA_O"); $("#000002").removeClass("RUOTA_S"); $("#000002").addClass("RUOTA_D"); }); });
  $(document).ready(function(){ $("#000003rd").click(function(){ $("#000003").removeClass("RUOTA_O"); $("#000003").removeClass("RUOTA_S"); $("#000003").addClass("RUOTA_D"); }); });
  $(document).ready(function(){ $("#000004rd").click(function(){ $("#000004").removeClass("RUOTA_O"); $("#000004").removeClass("RUOTA_S"); $("#000004").addClass("RUOTA_D"); }); });
  
  
  
