const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", () => { navbar.classList.add("showNav") });

navClose.addEventListener("click", () => { navbar.classList.remove("showNav") });


//new navigator
// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}



//assignment qa begin
function revealAnswer() {
    var answer = document.getElementById("answer");
    if (answer.style.display === "none") {
      answer.style.display = "block"; // Show answer
    } else {
      answer.style.display = "none"; // Hide answer
    }
  }

  function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    var correctAnswer = "A"; // Correct answer is option A
    var resultMessage = document.getElementById("result-message");
    if (selectedAnswer === correctAnswer) {
      resultMessage.innerText = "Correct!";
      resultMessage.classList.remove("incorrect");
      resultMessage.classList.add("correct");
    } else {
      resultMessage.innerText = "Incorrect!";
      resultMessage.classList.remove("correct");
      resultMessage.classList.add("incorrect");
    }
  }
  //assignment qa end