<?php session_start(); if(!isset($_SESSION['UserData']['Username'])){ header("location:./../../mobi/php/sign-in.php"); exit; } ?>

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

<TITLE> cancellanotes_20211218_2130B.php </TITLE>

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

<div class="m-3 bg-warning  text-center">
<div class="text-light"> Cancella file   </div>
</div>


<div class="m-3 p-3 bg-secondary text-center border border-1 border-danger">
<form method="get" name="form" action="cancellanotes_20211218_2130B.php" > 
		<input class="bg-warning border border-0 text-danger rounded" type="text" placeholder="?" name="data">
		<input class="btn bg-success text-light" type="submit" value="INVIA">
</form>
</div>

<?php
$vai = $_GET['data'];
$ok = $vai ;
if ($ok == '') {

$myfile = fopen("notesXXXXX.html", "w") or die("Unable to open file!");

$txt = ' <!DOCTYPE html> <html id="HTML" lang="it"> <!-- --> <!-- --> <head> <!-- Required meta tags --> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"> <meta name="generator" content="AlterVista - Editor HTML"/> <meta name="description" content="framework"> <meta name="keywords" content="HTML,CSS,JavaScript"> <meta name="author" content="Rinaldo Rasa"> <link rel="icon" type="image/png" href="https://it.altervista.org/images/favicon/favicon-16x16.png" sizes="16x16"> <!-- --> <title> {*notes*} ℜ avid3820725 rinaldo-rasa.it </title> <!-- 2021:12:18:08:47 --> <!-- &#8476; --> <!-- --> <!-- Bootstrap CSS --> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> <!-- --> <!-- bootstrap5 icons --> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"> <!-- --> <link rel="preconnect" href="https://fonts.gstatic.com"> <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet"> <!-- --> <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script> <!-- --> <!-- --> <style> :root { --bs-blue: #0d6efd; --bs-indigo: #6610f2; --bs-purple: #6f42c1; --bs-pink: #d63384; --bs-red: #dc3545; --bs-orange: #fd7e14; --bs-yellow: #ffc107; --bs-green: #198754; --bs-teal: #20c997; --bs-cyan: #0dcaf0; --bs-white: #fff; --bs-gray: #6c757d; --bs-gray-dark: #343a40; --bs-gray-100: #f8f9fa; --bs-gray-200: #e9ecef; --bs-gray-300: #dee2e6; --bs-gray-400: #ced4da; --bs-gray-500: #adb5bd; --bs-gray-600: #6c757d; --bs-gray-700: #495057; --bs-gray-800: #343a40; --bs-gray-900: #212529; --bs-primary: #0d6efd; --bs-secondary: #6c757d; --bs-success: #198754; --bs-info: #0dcaf0; --bs-warning: #ffc107; --bs-danger: #dc3545; --bs-light: #f8f9fa; --bs-dark: #212529; --bs-primary-rgb: 13, 110, 253; --bs-secondary-rgb: 108, 117, 125; --bs-success-rgb: 25, 135, 84; --bs-info-rgb: 13, 202, 240; --bs-warning-rgb: 255, 193, 7; --bs-danger-rgb: 220, 53, 69; --bs-light-rgb: 248, 249, 250; --bs-dark-rgb: 33, 37, 41; --bs-white-rgb: 255, 255, 255; --bs-black-rgb: 0, 0, 0; --bs-body-rgb: 33, 37, 41; --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)); --bs-body-font-family: var(--bs-font-sans-serif); --bs-body-font-size: 1rem; --bs-body-font-weight: 400; --bs-body-line-height: 1.5; --bs-body-color: #212529; --bs-body-bg: #fff; } /**********/ </style> <!-- --> <!-- --> <style> /*****definizioni di stile con tag specifici*****/ /*****-----------*****/ /***** | #HTML | *****/ /***** | #BODY | *****/ /***** | #MAIN | *****/ /*****-----------*****/ html#HTML * { BACKGROUND-COLOR:LIGHTGRAY; COLOR:BLACK; BACKGROUND-COLOR:var(--bs-gray-400); COLOR:BLACK; BACKGROUND-COLOR:var(--bs-gray-200); COLOR:BLACK; /**********/ FONT-SIZE:1.2500REM; FONT-FAMILY:"PT Mono",MONOSPACE; /**********/ LETTER-SPACING:0.075REM; /**********/ } /**********/ body#BODY{MARGIN:0 AUTO;BORDER:SOLID 0REM GREEN;} body#BODY{HEIGHT:800PX;OVERFLOW:AUTO;} /**********/ main#MAIN{BORDER:DASHED 0.0REM MAGENTA;} main#MAIN{OVERFLOW:AUTO;} /**********/ </style> <!-- --> <style></style> <script></script> <!-- --> <!-- --> </head> <body id="BODY" class="m-0"> ';

fwrite($myfile, $txt);

fclose($myfile);
}

?>


</main>

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
           ModalitÃ : passiva (PASV)************
           Criptazione: Nessuna o TLS esplicito

       -->
       <!--
       &#8476;
       -->
       
       


