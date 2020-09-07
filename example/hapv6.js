document.getElementById("hapv6").innerHTML=
'<style> '+
'html * { font-family:monospace; }'+
'body  { background-color:oldlace; }'+
'</style>'+
''+
'<style>'+
'iframe, .m1t:target { width:80%;  height:80%;'+
'left:50%; margin-left:-40%; border:none ; }'+
'iframe{z-index:0; }'+
''+
'.m1t{pointer-events:none; opacity:0; }'+
''+
'.m1t:target '+
'{'+
' pointer-events:auto; opacity:1; '+
' background-color:rgba(253,245,230,0.5);'+
'}'+
''+
'.m1t:target{z-index:100;}'+
''+
'.help_center{visibility:visible; }'+
'.contenuto_help_center{display:none;}'+
'.help_center:hover .contenuto_help_center'+
'{'+
' display:block; left:0rem; width:40%; height:40%; '+
' background-color:orange; border-radius:0.4rem; '+
'}'+
''+
'.dissolvenza {'+
'  animation: fadeIn ease 2.5s;'+
'  -webkit-animation: fadeIn ease 2.5s;'+
'  -moz-animation: fadeIn ease 2.5s;'+
'  -o-animation: fadeIn ease 2.5s;'+
'  -ms-animation: fadeIn ease 2.5s;'+
'  }'+
'  @keyframes fadeIn {'+
'  0% {opacity:0;}'+
'  100% {opacity:1;}'+
'  }'+
''+
'.ico_announcement, .ico_spinner, .ico_close, '+
'.ico_help_center, iframe, '+
'.m1t:target, .contenuto_help_center {position:fixed; }'+
''+
'.ico_announcement, .ico_spinner, '+
'.ico_close, .ico_help_center {font-size:2rem; }'+
''+
'.ico_announcement, .ico_spinner, iframe, '+
'.m1t:target  {top:3rem; }'+
''+
'.ico_close, .ico_help_center, .contenuto_help_center'+
' {top:9rem; }'+
''+
''+
'.ico_announcement, .ico_close {right:0.5rem; }'+
''+
'.ico_spinner, .ico_help_center {left:0.5rem; }'+
''+
'</style>'+
''
;