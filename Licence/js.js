// let swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// const nextSlideButton = document.getElementsByClassName("swiper-button-next")[0];

//  setInterval(function() {
//     nextSlideButton.click();
//    }, 7000);

// const dropdowns = document.getElementsByClassName("dropdown")

//   console.log(dropdowns)

//   for(let i = 0; i < dropdowns.length; i++) {
//     const dropdown = dropdowns.item(i);
//       dropdown.addEventListener("mouseenter", () => {
//         const arrow = dropdown.getElementsByTagName("img").item(0);
//         arrow.style.rotate = "180deg";
//         arrow.style.transition = "all 0.55s ease";
//       });
// }


// function handleMouseEnter(e) {
//         console.log(e);
//         const arrow = e.target.getElementsByTagName("img").item(0);
//         arrow.style.rotate = "180deg";
//         arrow.style.transition = "all 0.55s ease";
// }


// for(let i = 0; i < dropdowns.length; i++) {
//   const dropdown = dropdowns.item(i);

// }
function changeLetterColor(textElement) {
  const letters = textElement.textContent.split('');
  let index = 0;

  return setInterval(() => {
    textElement.innerHTML = letters.map((letter, i) => {
      if (i === index) {
        return `<span class="white">${letter}</span>`;
      } else {
        return letter;
      }
    }).join('');

    index++;
    if (index >= letters.length) {
      index = 0;
    }
  }, 500);
}

changeLetterColor(document.getElementById('glowingText'));
changeLetterColor(document.getElementById('glowingText2'));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  var navbar = document.querySelector(".bar");
  
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("hidden");
    navbar.classList.remove("AnimationBarFadeOut");
    navbar.classList.add("AnimationBarFadeIn");
  } else {
    navbar.classList.remove("AnimationBarFadeIn");
    navbar.classList.add("AnimationBarFadeOut");
    setTimeout(function() {
      navbar.classList.add("hidden");
    }, 300);
  }
  prevScrollpos = currentScrollPos;
}


