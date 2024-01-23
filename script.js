document.addEventListener("DOMContentLoaded", function () {
      const images = document.querySelectorAll(".img");
    
      function clearActiveImage() {
        images.forEach(function (image) {
          image.classList.remove("active");
        });
      }
    
      images.forEach(function (image, index) {
        image.onclick = function (event) {
          event.stopPropagation();
          if (images[index].classList.contains("active")) {
            images[index].classList.remove("active");
          } else {
            clearActiveImage();
            images[index].classList.add("active");
          }
        };
      });
    
      document.addEventListener("click", function (event) {
        clearActiveImage();
      });
    });
  function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    var sidemenu = document.getElementById('sidemenu');
  if (sidemenu.style.right === '0%') {
    sidemenu.style.right = '-100%';
  } else {
    sidemenu.style.right = '0%';
  }
}
let isRotated = false;

  function toggleArrow() {
    const arrowIcon = document.getElementById('arrow');
    const submenu = document.getElementById('submenu');

    if (isRotated) {
      arrowIcon.classList.remove('rotate-90');
      submenu.classList.remove('visible');
    } else {
      arrowIcon.classList.add('rotate-90');
      submenu.classList.add('visible');
    }

    isRotated = !isRotated;
  }