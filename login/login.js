document.addEventListener('DOMContentLoaded', function () {

      document.getElementById("signInDugme").addEventListener('click', function () {
            const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "C:\Users\marko\Desktop\bgv2\BGKV2\login\signin.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  alert(xhr.responseText);
              } else {
                  alert("Error occurred during login");
              }
          }
      };
      xhr.send(`username=${username}&password=${password}`);
  });
  
  document.getElementById("regstrujse").addEventListener('click', function () {
      const regemail = document.getElementById("regemail").value;
      const regusername = document.getElementById("regusername").value;
      const regpassword = document.getElementById("regpassword").value;
      const ponovipassword = document.getElementById("ponovipassword").value;
  
      console.log("User info collected:", regemail, regusername, regpassword, ponovipassword);
  
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "C:\Users\marko\Desktop\bgv2\BGKV2\login\register.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
            console.log('Ready state:', xhr.readyState);
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log("Response from server:", xhr.responseText);
                    alert(xhr.responseText);
                } else {
                    console.error("Error occurred during registration JS:", xhr.status);
                    console.log("Error response from server:", xhr.responseText); // Log the response for debugging
                    alert("Error occurred during registration JS");
                }
            }
        };
        
        
      console.log(`Sending registration data: regemail=${regemail}, regusername=${regusername}, regpassword=${regpassword}, ponovipassword=${ponovipassword}`);

xhr.send(`regemail=${regemail}&regusername=${regusername}&regpassword=${regpassword}&ponovipassword=${ponovipassword}`);

  });
});