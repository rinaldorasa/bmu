       <!DOCTYPE html>
       <html id="HTML" lang="it"> 
               <!-- -->
               <!-- -->
       <head>
               <!-- Required meta tags  -->
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
       <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
       <meta name="generator" content="AlterVista - Editor HTML"/>
       <meta name="description" content="framework">
       <meta name="keywords" content="HTML,CSS,JavaScript">
       <meta name="author" content="Rinaldo Rasa">
       <link rel="icon" type="image/png" href="https://it.altervista.org/images/favicon/favicon-16x16.png" sizes="16x16">

<TITLE> *# blocchetto.php </TITLE>

               <!-- Bootstrap CSS  -->
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
               <!-- -->
               <!-- bootstrap5 icons -->
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
               <!-- -->
       <link rel="preconnect" href="https://fonts.gstatic.com">
       <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet">
               <!-- -->
       <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
               <!-- -->
       <style>
               /*****definizioni di stile con tag specifici*****/
               /*****-----------*****/
               /***** | #HTML | *****/
               /***** | #BODY | *****/
               /***** | #MAIN | *****/
               /*****-----------*****/
       html#HTML * {
       BACKGROUND-COLOR:LIGHTGRAY; COLOR:BLACK;
       BACKGROUND-COLOR:var(--bs-gray-400); COLOR:BLACK;
       BACKGROUND-COLOR:var(--bs-gray-200); COLOR:BLACK;
   
               /**********/
       FONT-SIZE:1.2500REM; FONT-FAMILY:"PT Mono",MONOSPACE;
               /**********/
       LETTER-SPACING:0.075REM;
               /**********/
       }
               /**********/
       body#BODY{MARGIN:0 AUTO;BORDER:SOLID 0REM GREEN;}
       body#BODY{HEIGHT:800PX;OVERFLOW:AUTO;}
               /**********/
       main#MAIN{BORDER:DASHED 0.0REM MAGENTA;}
       main#MAIN{OVERFLOW:AUTO;}
               /**********/
       </style>   

       </head>

       <body id="BODY" class="m-0">
       <main id="MAIN" class="mx-1">

               <!-- -->
               <!-- qui occorre inserire un input che permetta -->
               <!-- di aggiornare il blocco notes              -->
               <!-- occorre fare riferimento al programma di -->
               <!-- trasferimento dati tra Js e Php -->
               <!--  -->
               <!--  -->
               <!--  -->
               <!--  -->
<!--

<form method="get" name="form" action="blocchetto_AREA_20211218_0845A.php" > 
		<input type="text" placeholder="Inserisci i dati" name="data">
		<input type="submit" value="INVIA">
</form>

-->



<!-- https://www.tutorialspoint.com/html/html_textarea_tag.htm -->

<!--      <form action = "/cgi-bin/hello_get.cgi" method = "get">  -->

<form  action="blocchetto.php" method = "get">
         Riempi in dettaglio: 
         <br />
         
<textarea rows = "5" cols = "50"  name="data"></textarea>
         
         <input type = "submit" value = "INVIA" />
      </form>



               <!--  -->
               <!-- qui lo switch con bocco notes -->
<div><A HREF="notes.php" class="bg-success text-light"> VEDI NOTES </A></div>


<!--
<div class="my-5"><A HREF="cancellanotes.php" class="bg-danger text-light"> CANCELLA CONTENUTO NOTES </A></div>
-->



<?php

//


//$myfile = fopen("notes.html", "w") or die("Unable to open file!");

// $myfile = fopen("notes.html", "a") or die("Unable to open file!");

$myfile = fopen("notes.php", "a") or die("Unable to open file!");

$result = $_GET['data'];


$adesso = '<div style="background-color:orange;color:white;font-size:0.5rem;font-family:monospace;font-family:"PT Mono";opacity:0.3;">&nbsp;</div> ';


 
$txt = '';

/*
$txt = $txt . '<!DOCTYPE html>'.'';

$txt = $txt ."\r\n"  . '<html id="HTML" lang="it"> ';
$txt = $txt ."\r\n"  . '<meta charset="utf-8">';
$txt = $txt ."\r\n"  . '<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"> ';
$txt = $txt ."\r\n"  . '<link rel="icon" type="image/png" href="https://it.altervista.org/images/favicon/favicon-16x16.png" sizes="16x16">';
$txt = $txt ."\r\n"  . '<title> 2021:12:17:09:19 </title>';

$txt = $txt ."\r\n"  . '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">';


$txt = $txt ."\r\n"  . '<body id="BODY" class="m-0">';
$txt = $txt ."\r\n"  . '<main id="MAIN" class="mx-1">';
$txt = $txt ."\r\n"  . '<A HREF="blocchetto.php">AGGIORNA IL NOTES</A><BR>';
// $txt = $txt ."\r\n"  . ' <i style="background-color:orange;color:navy;"> questo è un test di un codice scritto per inserire variabili </i> ';
$txt = $txt ."\r\n"  . ' <i class="bg-success text-light"> </i> ';
*/

$txt = $txt ."\r\n"  . '   ';
$txt = $txt ."\r\n"  . '<br>';
$txt = $txt ."\r\n"  . $adesso .'' .'  ' . ' ' .$result .''. '';





/*
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';
$txt = $txt ."\r\n"  . '';

 */


fwrite($myfile, $txt);

// $txt = "Jane Doe\n";
// fwrite($myfile, $txt);


fclose($myfile);
?>

               <!-- Bootstrap Bundle with Popper  -->
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
               <!-- -->
               <!-- -->
               <!-- -->
               <!-- -->
               <!-- -->


       <div id="fine"></div>
       </body>
       </html>
               <!-- -->
               <!-- commentario -->
               <!-- -->
    <!--

         < ?php session_start();
         if(!isset($_SESSION['UserData']['Username'])){
         header("location:sign-in.php");
         exit;
         }
         ? >

         < ?php session_start();
         if(isset($_POST['Submit'])){

         $logins = array('0' => '0','0' => '0', '0' => '0','0' => '0');

         $Username = isset($_POST['Username']) ? $_POST['Username'] : '';
         $Password = isset($_POST['Password']) ? $_POST['Password'] : '';

         if (isset($logins[$Username]) && $logins[$Username] == $Password){

         $_SESSION['UserData']['Username']=$logins[$Username];
         header("location:file.php");
         exit;
         } else {

         $msg="<span style='color:red'>Invalid Login Details</span>";

         }
         }
         ? >

        < ?php session_start(); /* Starts the session */
        session_destroy(); /* Destroy started session */
        header("location:sign-in.php"); /* Redirect to login page */
        exit;
        ? >

       -->
       <!--

           Host: ftp.avid3820725.altervista.org
           Porta: 21***************************
           Utente: avid3820725*****************
           Password: **************************
           Modalità: passiva (PASV)************
           Criptazione: Nessuna o TLS esplicito

       -->
       <!--
       &#8476;
       -->
