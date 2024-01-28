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
      if (imageContainer !== null) {
          imageContainer.style.zIndex = (window.scrollY > 0) ? '-1' : '';
      }
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
      submenu.style.display = 'none';
  }
}


// footer

document.addEventListener("DOMContentLoaded", function() {
  fetch("footer.html")
      .then(response => response.text())
      .then(html => {
          document.querySelector("body").insertAdjacentHTML("beforeend", html);
      });
});

const mapa = {
  "index.html": 1,
  
  // o gradjevinama
  "o_gradjevinama.html": 2,

  "moderna_arhitektura.html": 2,
  "19vek.html": 2,
  "20vek.html": 2,
  "savremena_arhitektura.html": 2,
  "izmedju2rata.html": 2,
  
  // o licnostima
  "o_licnostima.html": 3,

  "miloje_milojevic.html": 3,
  "sima_markovic.html": 3,
  "kosta_hakman.html": 3,
  "marko_murat.html": 3,
  "vasa_cuprilovic.html": 3,
  "slavka_nastasijevic.html": 3,
  "stevan_jakovljevic.html": 3,
  "milos_crnjanski.html": 3,
  "sima_pandurovic.html": 3,
  "momclo_nastasijevic.html": 3,
  
  // duh metropole
  "duh_metropole.html": 4,

  "ulice.html": 4,
  "arhitektura.html": 4,
  "moda.html": 4,
  "film.html": 4,
  "festival.html": 4,

// fragemnti
  "fragmenti.html": 5,
  // kvizovi
  "kvizovi.html": 6,
  // oprojektu
  "oprojektu.html": 7,
};

document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop().trim();
  console.log("Trenutna strana:", currentPage);

  setTimeout(function() {
      const menuItems = document.querySelectorAll(".menu li");
      console.log("Meni Itemi:", menuItems);

      if (menuItems.length === 0) {
          fetch("header.html")
              .then(response => response.text())
              .then(html => {
                  document.querySelector("body").insertAdjacentHTML("afterbegin", html);
                  applyActiveMenuItem(currentPage);
              })
              .catch(error => {
                  console.error("Nema header.html:", error);
              });
      } else {
          applyActiveMenuItem(currentPage);
      }
  }, 100);
});

function applyActiveMenuItem(currentPage) {
  const menuItems = document.querySelectorAll(".menu li");
  console.log("Meni Itemi:", menuItems);

  menuItems.forEach(function(menuItem) {
      const menuItemAnchor = menuItem.querySelector("a");
      const menuItemHref = menuItemAnchor.getAttribute("href");
      
      if (menuItemHref === currentPage) {
          console.log("Ciljani meni item:", menuItem);
          menuItem.classList.add("meni-active");
      } else {
          const submenuItems = menuItem.querySelectorAll("ul.submenu li");
          submenuItems.forEach(function(submenuItem) {
              const submenuItemAnchor = submenuItem.querySelector("a"); 
              const submenuItemHref = submenuItemAnchor.getAttribute("href");
              if (submenuItemHref === currentPage) {
                  console.log("Ciljani submeni item:", submenuItem); 
                  menuItem.classList.add("meni-active"); 
                  submenuItem.classList.add("submeni-active"); 
              }
          });
      }
  });
}