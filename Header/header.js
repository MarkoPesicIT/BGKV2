// header.js
document.addEventListener("DOMContentLoaded", function() {
      fetch("Header/header.html")
          .then(response => response.text())
          .then(html => {
              document.querySelector("body").insertAdjacentHTML("afterbegin", html);
          });
  });
  