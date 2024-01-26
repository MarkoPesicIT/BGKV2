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
      var imageContainer = document.querySelector('.image-container');
      if (sidemenu.style.right === '0%') {
          sidemenu.style.right = '-100%';
          
          setTimeout(function() {
              imageContainer.style.zIndex = '';
              document.body.style.  overflow = 'auto';
          }, 400);
      } else {
          sidemenu.style.right = '0%';
          imageContainer.style.zIndex = '-1';
          document.body.style.overflow = 'hidden';
      }
    }
    

  function updateZIndexOnScroll() {
    var imageContainer = document.querySelector('.image-container');

    imageContainer.style.zIndex = (window.scrollY > 0) ? '-1' : '';
}

function handleResize() {
    if (window.matchMedia('(min-width: 320px) and (max-width: 479px)').matches) {
        window.onscroll = updateZIndexOnScroll;
        updateZIndexOnScroll();
    } else {
        window.onscroll = null;
    }
} 
window.addEventListener('resize', handleResize);

handleResize();
function toggleSubMenu(strelica) {
  const menuItem = strelica.closest('.menu-item');
  const submenu = menuItem.querySelector('.sidesubmenu');
  const icon = menuItem.querySelector('.arrow-icon');

  menuItem.classList.toggle('active');
  icon.classList.toggle('rotated');

  if (menuItem.classList.contains('active')) {
    submenu.style.display = 'flex';
    setTimeout(() => {
      submenu.style.maxHeight = '1000px';
    }, 0);
  } else {
    submenu.style.maxHeight = '0';
    setTimeout(() => {
      submenu.style.display = 'none';
    }, 800);
  }
}
