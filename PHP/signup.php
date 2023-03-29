<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = $_POST['pass'];

$conn = new mysqli('localhost', 'root', '', 'registration');
if($conn->connect_error){
    die('Connection Failed : '.mysqli_connect_error());
}else{
    $inf = "INSERT INTO register(name, contact, email, password)
    VALUES( '$name', '$phone', '$email', '$password');";
    if($conn->query($inf) === TRUE){
        echo "New record created successfully";
    }else{
        echo "Error : ".$inf."<br>".$conn->error;
    }
    $conn->close();
}

?>