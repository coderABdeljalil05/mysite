<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Abdeldjalil</title>
    <link rel="stylesheet" type="text/css" href="login.css">   
</head>
<body>


<div class="container" style="margin-top:20px;" >
  <!-- Content here -->
  <?php 
$username = "souakria";
$password = "12345";


if(isset($_POST['login'])){
$getUserName = $_POST['username'];
$getPassword = $_POST['password'];

if($username === $getUserName && $password === $getPassword){
    session_start();
    $_SESSION['USER'] = $getUserName;
    $_SESSION['PASSWORD'] = $getPassword;
    $_SESSION['LOGIN'] = true;
    echo "<script> location.replace('audio_player/audio_player.html') </script>";

}else{
  echo "<script> alert('كلمة سر خاطئة') </script>";
 
}

}

?>
 <div class="login-box">
        <img src="call.jpg" class="avatar">
        <h1>Login Here</h1>

  <form method="POST">

<p>Uesername:</p>  <input type="text" name="username" required  placeholder="Enter Username "class="form-control"/>
<br>
<p>Password :</p> <input type="password" name="password" required  placeholder="Enter Password" class="form-control" />
<br>
<input class="btn btn-warning" name="login" type="submit" value="login">
</form>



</div>

</body>
</html>


