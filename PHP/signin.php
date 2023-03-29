<?php

$conn =new mysqli('localhost', 'root', '', 'registration');
if($conn){
    $email = $_POST['email'];
    $password = $_POST['pass'];

    $sql = "SELECT * FROM register WHERE email='".$email."' AND password='".$password."' ";
    
    $result = mysqli_query( $conn, $sql);

    if(mysqli_num_rows($result) == 1){
      header("Location: inbox.html");
    }else{
        echo "You have entered incorrect information";
    }
}

?>