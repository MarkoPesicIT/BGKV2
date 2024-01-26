document.addEventListener("DOMContentLoaded", function() {
        fetch("Footer/footer.html")
            .then(response => response.text())
            .then(html => {
                document.querySelector("body").insertAdjacentHTML("beforeend", html);
            });
});