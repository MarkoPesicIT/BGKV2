<?php
include 'index.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // If registration form is submitted
    if (isset($_POST['register'])) {
        $email = $_POST['regemail'];
        $username = $_POST['regusername'];
        $password = $_POST['regpassword'];
        $confirm_password = $_POST['ponovipassword'];

        // Check if passwords match
        if ($password !== $confirm_password) {
            echo "Passwords do not match.";
            exit();
        }

        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Prepare and bind statement
        $stmt = $conn->prepare("INSERT INTO korisnici (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $hashed_password);

        // Execute the statement
        if ($stmt->execute()) {
            echo "Registration successful";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    }

    // If login form is submitted
    elseif (isset($_POST['login'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Prepare and bind statement
        $stmt = $conn->prepare("SELECT password FROM korisnici WHERE username=?");
        $stmt->bind_param("s", $username);

        // Execute the statement
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows == 1) {
            // Bind the result
            $stmt->bind_result($hashed_password);
            $stmt->fetch();

            // Verify password
            if (password_verify($password, $hashed_password)) {
                echo "Login successful";
            } else {
                echo "Incorrect password";
            }
        } else {
            echo "User not found";
        }

        $stmt->close();
    }
}

$conn->close();
?>