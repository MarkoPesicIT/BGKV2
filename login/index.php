<?php
$servername = "localhost";
$username = "root";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from POST request
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Perform SQL query to check if the user exists
    $sql = "SELECT * FROM korisnic WHERE korisnickoIme='$username' AND password='$password'";
    $result = $conn->query($sql);

    // Check if the query returned a row
    if ($result->num_rows == 1) {
        // Login successfuls
        echo "Login successful";
    } else {
        // Invalid username or password
        echo "Invalid username or password";
    }
}

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
