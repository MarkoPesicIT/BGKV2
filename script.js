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

document.addEventListener("DOMContentLoaded", function() {
  // creating an array and passing the number, questions, options, and answers
  const questions = [
      {
          numb: 1,
          question: "What challenge did codepen have in the month of March 2023?",
          answer: "Buttons",
          options: ["Shape", "Buttons", "Texture", "The typography of quotes"]
      },
      // {
      //     numb: 2,
      //     question: "What color shade is this hex #ffff00?",
      //     answer: "yellow",
      //     options: ["orange", "red", "yellow", "pink"]
      // },
      // {
      //     numb: 3,
      //     question: "How does a FOR loop start?",
      //     answer: "for (i = 0; i <= 5; i++)",
      //     options: [
      //         "for (i = 0; i <= 5; i++)",
      //         "for (i <= 5; i++)",
      //         "for i = 1 to 5",
      //         "for (i = 0; i <= 5)"
      //     ]
      // },
      // {
      //     numb: 4,
      //     question: "How do you round the number 7.25, to the nearest integer?",
      //     answer: "Math.round(7.25)",
      //     options: ["Math.rnd(7.25)", "rnd(7.25)", "round(7.25)", "Math.round(7.25)"]
      // },
      // {
      //     numb: 5,
      //     question: "What is the default value of the position property?",
      //     answer: "static",
      //     options: ["relative", "fixed", "static", "absolute"]
      // },
      // {
      //     numb: 6,
      //     question: "How do you make each word in a text start with a capital letter?",
      //     answer: "text-transform:capitalize",
      //     options: [
      //         "text-transform:capitalize",
      //         "text-style:capitalize",
      //         "transform:capitalize",
      //         "You can't do that with css"
      //     ]
      // },
      // {
      //     numb: 7,
      //     question: "How do you group selectors?",
      //     answer: "Separate each selector with a comma",
      //     options: [
      //         "Separate each selector with a slash",
      //         "Separate each selector with a plus sign",
      //         "Separate each selector with a space",
      //         "Separate each selector with a comma"
      //     ]
      // },
      // {
      //     numb: 8,
      //     question: "How to write an IF statement in JavaScript?",
      //     answer: "if (i == 5)",
      //     options: ["if (i == 5)", "if i = 5 then", "if i = 5", "if i == 5 then"]
      // },
      // {
      //     numb: 9,
      //     question: "How do you select all p elements inside a div element?",
      //     answer: "div p",
      //     options: ["p,div", "div.p", "div + p", "div p"]
      // },
      {
          numb: 10,
          question: "How can you detect the client's browser name?",
          answer: "navigator.appName",
          options: ["client.browserName", "client.navName", "navigator.appName", "browser.name"]
      }
  ];

  const start_btn = document.querySelector(".start_btn button");
  const info_box = document.querySelector(".info_box");
  const exit_btn = info_box.querySelector(".buttons .quit");
  const continue_btn = info_box.querySelector(".buttons .restart");
  const quiz_box = document.querySelector(".quiz_box");
  const result_box = document.querySelector(".result_box");
  const option_list = document.querySelector(".option_list");
  const time_line = document.querySelector(".kviz-header .time_line");
  const timeText = document.querySelector(".timer .time_left_txt");
  const timeCount = document.querySelector(".timer .timer_sec");
  const next_btn = document.querySelector(".kviz-footer .next_btn");
  const bottom_ques_counter = document.querySelector(".kviz-footer .total_que");

  let timeValue = 15;
  let que_count = 0;
  let que_numb = 1;
  let userScore = 0;
  let counter;
  let counterLine;
  let widthValue = 0;

  start_btn.addEventListener("click", () => {
        start_btn.style.display = "none"; // Hide the start button
        info_box.classList.add("activeInfo");
    });
    

    exit_btn.addEventListener("click", () => {
      info_box.classList.remove("activeInfo");
      result_box.classList.remove("activeResult");
      start_btn.style.display = "block";
      resetQuiz();
  });
  
  continue_btn.addEventListener("click", () => {
      info_box.style.display = "none";
      info_box.classList.remove("activeInfo");
      quiz_box.classList.add("activeQuiz");
      resetQuiz();
      showQuestions(0);
      queCounter(1);
      startTimerAndLine(timeValue); // Start both timer and time line
  });
  
  function resetQuiz() {
      que_count = 0;
      que_numb = 1;
      userScore = 0;
  }

  next_btn.addEventListener("click", () => {
      if (que_count < questions.length - 1) {
          que_count++;
          que_numb++;
          showQuestions(que_count);
          queCounter(que_numb);
          clearInterval(counter);
          clearInterval(counterLine);
          startTimerAndLine(timeValue); // Start both timer and time line
          timeText.textContent = "Time Left"; // Reset time text
          next_btn.classList.remove("show");
      } else {
          clearInterval(counter);
          clearInterval(counterLine);
          showResult();
      }
  });

  function showQuestions(index) {
      const que_text = document.querySelector(".que_text");
      let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
      let option_tag = questions[index].options.map(option =>
          '<div class="option"><span>' + option + '</span></div>'
      ).join("");
      que_text.innerHTML = que_tag;
      option_list.innerHTML = option_tag;
      const option = option_list.querySelectorAll(".option");
      option.forEach(opt => {
          opt.addEventListener("click", () => optionSelected(opt));
      });
  }

  function optionSelected(answer, isTimeOut = false) {
      clearInterval(counter);
      clearInterval(counterLine);
      const correctAns = questions[que_count].answer;
      const allOptions = option_list.children.length;
      if (isTimeOut) {
          setTimeout(() => {
              for (let i = 0; i < allOptions; i++) {
                  if (option_list.children[i].textContent === correctAns) {
                      option_list.children[i].classList.add("correct");
                  }
              }
          }, 1000); // Delay execution by 1 second
      } else {
          // Handle user-selected answer
          const selectedAns = answer.textContent;
          if (selectedAns === correctAns) {
              answer.classList.add("correct");
              userScore++;
          } else {
              answer.classList.add("incorrect");
          }
      }
      for (let i = 0; i < allOptions; i++) {
          option_list.children[i].classList.add("disabled");
      }
      next_btn.classList.add("show");
  }
  
  
  

  function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = "";
    if (userScore > 3) {
        scoreTag = '<span>Congrats!, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
    } else if (userScore > 1) {
        scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
    } else {
        scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
    }
    scoreText.innerHTML = scoreTag;
    quiz_box.style.display = "none";

    continue_btn.addEventListener("click", () => {
        result_box.classList.remove("activeResult");
        quiz_box.classList.add("activeQuiz");
        que_count = 0;
        que_numb = 1;
        userScore = 0;
        showQuestions(que_count);
        queCounter(que_numb);
        startTimerAndLine(timeValue);
    });

    exit_btn.addEventListener("click", () => {
        location.reload(); // Reload the page to quit the quiz
    });
}

  function queCounter(index) {
      const totalQueCountTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
      bottom_ques_counter.innerHTML = totalQueCountTag;
  }

  function startTimerAndLine(time) {
      let initialTime = time;
      let currentTime = time;
      let duration = time * 1000; // Duration in milliseconds
      let initialWidth = 0; // Initial width of the time line
      let targetWidth = 30; // Target width of the time line (30rem)
      let startTime = null;
  
      function animate(timeStamp) {
          if (!startTime) startTime = timeStamp;
          let elapsedTime = timeStamp - startTime;
          let width = (elapsedTime / duration) * targetWidth; // Calculate the width based on elapsed time
          time_line.style.width = width + "rem";
  
          if (elapsedTime < duration) {
              requestAnimationFrame(animate);
              
              // Calculate remaining time to ensure accurate countdown
              let remainingTime = Math.max(initialTime - Math.floor(elapsedTime / 1000), 0);
              timeCount.textContent = remainingTime < 10 ? "0" + remainingTime : remainingTime;
          } else {
              setTimeout(() => {
                  timeText.textContent = "Time Off";
                  optionSelected(null, true); // Call optionSelected with null answer to show correct answer
              }, 500); // Delay execution by 0.5 second to ensure animation completion
          }
      }
  
      counter = setInterval(() => {
          if (currentTime > 0) {
              currentTime--;
              // Update the time count text
              timeCount.textContent = currentTime < 10 ? "0" + currentTime : currentTime;
          } else {
              clearInterval(counter); // Stop the timer if currentTime reaches 0
              clearInterval(counterLine); // Stop the time line animation as well
          }
      }, 1000);
  
      requestAnimationFrame(animate);
  }
  
});
