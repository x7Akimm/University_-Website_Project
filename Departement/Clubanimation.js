var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    
});
document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
      window.scrollBy({
        top: 100,
        behavior: 'smooth'
      });
    } else if (event.key === 'w') {
      window.scrollBy({
        top: -100,
        behavior: 'smooth'
      });
    }
  });
  