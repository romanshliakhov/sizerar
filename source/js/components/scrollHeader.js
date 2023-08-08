window.onscroll = function showHeader() {
  const header = document.querySelector('header');
  let offsetHeight = 900;
  let breakpoint = 768;

  if(breakpoint > 768) {
    if(document.querySelector('.hero-section')) {
      offsetHeight = document.querySelector('.hero-section').offsetHeight;
    }
  } else {
    offsetHeight = 695;
  }

  if(window.pageYOffset > offsetHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}
