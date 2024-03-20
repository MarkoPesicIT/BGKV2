<?php
include 'index.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["regemail"];
    $username = $_POST["regusername"];
    $password = $_POST["regpassword"];

    echo "Received user info in PHP: email=$email, username=$username, password=$password<br>";

    $stmt = $conn->prepare("INSERT INTO korisnici (email, password, korisnickoIme) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $password, $username);

    if ($stmt->execute()) {
        echo "Registration successful PHP";
    } else {
        echo "Error occurred during registration PHP: " . $stmt->error;
        error_log("Error: " . $stmt->error);
    }

    $stmt->close();
}
?>
