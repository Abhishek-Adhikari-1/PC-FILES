<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page</title>
        <link rel="stylesheet" type="text/css" href="index.css" />
        <link rel="icon" href="icon-black.png" />
    </head>
    <body>
        <div class="card">
            <form class="form" id="form" method="post" action="index.php">
                <header>Login Here!</header>
                <hr class="underline" />
                <div class="fields">
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
                        placeholder="Enter your password"
                        id="pass"
                        name="pass"
                    />
                    <img
                        src="eyeclose.png"
                        id="icon"
                        alt="show psw"
                        title="Click to show password"
                    />
                    <button type="submit" class="butt">Sign In</button>
                </div>
                <hr />
                <p>
                    Not have an account <a href="signup.html">sign up</a> here.
                </p>
                <a id="forget" href="forget.php">Forget Password</a>
            </form>
        </div>
        <script type="text/javascript" src="index.js"></script>
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
        echo "Information in the database could not be found.";
    }
}

?>
    </body>
</html>
