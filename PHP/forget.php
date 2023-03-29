<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forget Password</title>
    <link rel="stylesheet" type="text/css" href="signup.css" />
</head>
<body>
    <div class="card">
        <form class="form" id="form" method="post" action="forget.php">
            <header>Did you forgot your password?</header>
            <hr class="underlin" />
            <div class="fields">
                <div id="phoneError"></div>
                <input
                    type="tel"
                    placeholder="Enter your contact number"
                    id="phone"
                    name="phone"
                />
                <div id="emailError"></div>
                <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                />
                <div id="passError"></div>
                <input
                    type="password"
                    placeholder="Enter new password"
                    id="pass"
                    name="pass"
                />
                <img
                    src="eyeclose.png"
                    id="icon1"
                    alt="show psw"
                    title="Click to show password"
                />
                <div id="conpassError"></div>
                <input
                    type="password"
                    placeholder="Confirm new password"
                    id="conpass"
                />
                <img
                    src="eyeclose.png"
                    id="icon2"
                    alt="show psw"
                    title="Click to show password"
                />
                <button type="submit" id="butt">Change Password</button>
            </div>
        </form>
    </div>
    <script type="text/javascript" src="forget.js"></script>
<?php
$conn =new mysqli('localhost', 'root', '', 'registration');
if($conn){
    $contact = $_POST['phone'];
    $email = $_POST['email'];

    $sql = "SELECT * FROM register WHERE contact='".$contact."' AND email='".$email."' ";
    
    $result = mysqli_query( $conn, $sql);

    if(mysqli_num_rows($result) == 1){
        $newpass = $_POST['pass'];
        "UPDATE register SET password='".$newpass."' WHERE contact='".$contact."'";
        echo "Record updated successfully";
    }else{
        echo "Information in the database could not be found.";
    }
    $conn->close();
}
?>
</body>
</html>