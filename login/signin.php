<?php
include 'index.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from POST request
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Perform SQL query to check if the user exists
    $sql = "SELECT * FROM korisnic WHERE korisnickoIme='$username' AND password='$password'";
    $result = $conn->query($sql);

    // Check if the query returned a row
    if ($result->num_rows == 1) {
        // Login successful
        echo "Login successful";
    } else {
        // Invalid username or password
        echo "Invalid username or password";
    }
}
?>
