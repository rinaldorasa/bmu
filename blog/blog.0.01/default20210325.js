
/*************************************\
 blog.0.0.1
 test copilato array id blog
 rinaldo.rasa@gmail.com
 2021-03-25

\**************************************/

var SORGE=["",
"https://rinaldorasablog.files.wordpress.com/2021/03/venice-20210325-1600anniversary-photographs-by-rinaldo-rasa-6.jpg",
"https://rinaldorasablog.files.wordpress.com/2021/03/venice-20210325-1600anniversary-photographs-by-rinaldo-rasa-5.jpg",
"https://rinaldorasablog.files.wordpress.com/2021/03/venice-20210325-1600anniversary-photographs-by-rinaldo-rasa-3.jpg",
"https://rinaldorasablog.files.wordpress.com/2021/03/venice-20210325-1600anniversary-photographs-by-rinaldo-rasa-4.jpg",
"https://rinaldorasablog.files.wordpress.com/2021/03/venice-20210325-1600anniversary-photographs-by-rinaldo-rasa-1.jpg",
"https://rinaldorasablog.files.wordpress.com/2021/03/venice-20210325-1600anniversary-photographs-by-rinaldo-rasa-9.jpg",
"https://rinaldorasablog.files.wordpress.com/2021/03/venice-20210325-1600anniversary-photographs-by-rinaldo-rasa-7.jpg",
"https://rinaldorasablog.files.wordpress.com/2021/03/venice-20210325-1600anniversary-photographs-by-rinaldo-rasa-2.jpg",
"https://rinaldorasablog.files.wordpress.com/2021/03/venice-20210325-1600anniversary-photographs-by-rinaldo-rasa-8.jpg"
]

var BLOG=[
"",
"<img id='00001' alt='ve-00001' title='ve-00001' class='blogimp' src='"+SORGE[1]+"' />",
"<img id='00002' alt='ve-00002' title='ve-00002' class='blogimp' src='"+SORGE[2]+"' />",
"<img id='00003' alt='ve-00003' title='ve-00003' class='blogimp' src='"+SORGE[3]+"' />",
"<img id='00004' alt='ve-00004' title='ve-00004' class='blogimp' src='"+SORGE[4]+"' />",
"<img id='00005' alt='ve-00005' title='ve-00005' class='blogimp' src='"+SORGE[5]+"' />",
"<img id='00006' alt='ve-00006' title='ve-00006' class='blogimp' src='"+SORGE[6]+"' />",
"<img id='00007' alt='ve-00007' title='ve-00007' class='blogimp' src='"+SORGE[7]+"' />",
"<img id='00008' alt='ve-00008' title='ve-00008' class='blogimp' src='"+SORGE[8]+"' />",
"<img id='00009' alt='ve-00009' title='ve-00009' class='blogimp' src='"+SORGE[9]+"' />"
]



var COMME=["",
"arsenale",
" san giorgio",
"la fenice",
"ordinary life",
"ordinary life",
"ordinary life",
"tintoretto",
"pescato",
"street art "
]

var BLOGcmt=["",
"<div id='c-00001' class='blog-c'>"+COMME[1]+"</div>",
"<div id='c-00002' class='blog-c'>"+COMME[2]+"</div>",
"<div id='c-00003' class='blog-c'>"+COMME[3]+"</div>",
"<div id='c-00004' class='blog-c'>"+COMME[4]+"</div>",
"<div id='c-00005' class='blog-c'>"+COMME[5]+"</div>",
"<div id='c-00006' class='blog-c'>"+COMME[6]+"</div>",
"<div id='c-00007' class='blog-c'>"+COMME[7]+"</div>",
"<div id='c-00008' class='blog-c'>"+COMME[8]+"</div>",
"<div id='c-00009' class='blog-c'>"+COMME[9]+"</div>"
]






/* */
document.getElementById("blog").innerHTML=
'<section style="background-color:gray;">'+
'<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inconsolata:wght@500&family=PT+Mono&family=Roboto+Mono&display=swap" rel="stylesheet">'+
''+
''+
'<style>'+
'table{  table-layout: fixed; width:100%;}'+
'td{vertical-align: middle!important;vertical-align: top!important;background-color:gray;color:white;font-family:"PT Mono",monospace;}'+
''+
'aside.immagine{padding:0.25rem;border-left:solid 0.5rem maroon;border-bottom:solid 0.5rem maroon;opacity:1;}'+
'div.blog-c, aside.immagine{margin-top:1.5rem;border-top:solid 0.10rem maroon;}'+
''+
'.blogimp{width:100%!important;vertical-align: top;background-color:gray;color:white;font-family:"PT Mono",monospace;}'+
'.blogimd{width:6rem!important;vertical-align: top;}'+
'.blog-c{background-color:gray;color:white!important;font-family:"PT Mono",monospace;}'+
'</style>'+
''+

' <table id="tablette" style="border:solid 0.25rem transparent;" class="table-borderless">'+
' <tbody>'+
' '+
'<tr><td><aside class="p-1 immagine">'+BLOG[1]+'</aside></td><td>'+BLOGcmt[1]+'</td>'+
'<tr><td><aside class="p-1 immagine">'+BLOG[2]+'</aside></td><td>'+BLOGcmt[2]+'</td>'+
'<tr><td><aside class="p-1 immagine">'+BLOG[3]+'</aside></td><td>'+BLOGcmt[3]+'</td>'+
'<tr><td><aside class="p-1 immagine">'+BLOG[4]+'</aside></td><td>'+BLOGcmt[4]+'</td>'+
'<tr><td><aside class="p-1 immagine">'+BLOG[5]+'</aside></td><td>'+BLOGcmt[5]+'</td>'+
'<tr><td><aside class="p-1 immagine">'+BLOG[6]+'</aside></td><td>'+BLOGcmt[6]+'</td>'+
'<tr><td><aside class="p-1 immagine">'+BLOG[7]+'</aside></td><td>'+BLOGcmt[7]+'</td>'+
'<tr><td><aside class="p-1 immagine">'+BLOG[8]+'</aside></td><td>'+BLOGcmt[8]+'</td>'+
'<tr><td><aside class="p-1 immagine">'+BLOG[9]+'</aside></td><td>'+BLOGcmt[9]+'</td>'+

' </tbody> </table>'+
' '+
'</section> '+
' '+

'';
