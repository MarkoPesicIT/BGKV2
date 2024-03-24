<?php
// db_config.php
$servername = "localhost";
$username = "vscode";
$password = "odlican500";
$database = "beograd-koordinate"; // Change this to your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // Log successful connection
    error_log("Connected to database successfully");
}
?>
