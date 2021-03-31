const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', function() {
  if (window.scrollY > 1) {
  	navbar.classList.add('navbar-fixed')
  }else if (window.scrollY <= 0) {
  	navbar.classList.remove('navbar-fixed')
  }
});