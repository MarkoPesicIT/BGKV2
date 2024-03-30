document.addEventListener("DOMContentLoaded", function() {
      console.log("DOM content loaded");
  
      document.getElementById('signInDugme').addEventListener('click', login);
      document.getElementById('regstrujse').addEventListener('click', register);
  
      function login() {
          console.log("Login button clicked");
  
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;
  
          console.log("Username:", username);
          console.log("Password:", password);
  
          fetch('loginRegister.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
          })
          .then(response => response.text())
          .then(data => {
              console.log("Response from PHP:", data);
              alert(data); // Handle the response from PHP
          })
          .catch(error => console.error('Error:', error));
      }
      
      function register() {
          console.log("Register button clicked");
  
          const regemail = document.getElementById('regemail').value;
          const regusername = document.getElementById('regusername').value;
          const regpassword = document.getElementById('regpassword').value;
          const ponovipassword = document.getElementById('ponovipassword').value;
  
          console.log("Email:", regemail);
          console.log("Username:", regusername);
          console.log("Password:", regpassword);
          console.log("Confirm Password:", ponovipassword);
  
          fetch('loginRegister.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: `register=true&regemail=${encodeURIComponent(regemail)}&regusername=${encodeURIComponent(regusername)}&regpassword=${encodeURIComponent(regpassword)}&ponovipassword=${encodeURIComponent(ponovipassword)}`
          })
          .then(response => response.text())
          .then(data => {
              console.log("Response from PHP:", data);
              alert(data);
          })
          .catch(error => console.error('Error:', error));
      }
  });
  