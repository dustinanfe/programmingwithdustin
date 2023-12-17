//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      //active navbar links
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });

      //active sections for animation on scroll
      sec.classList.add('show-animate');
    }

    //if want to use animation that repeats on scroll use this
    else {
      sec.classList.remove('show-animate')
    }
  });
  
  //sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  //remove toggle icon and navbar when click navbar links (scroll)
  if(window.scrollY > 100) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
}

//review 

let rating = 0;
const stars = document.querySelectorAll('.star');
const reviewComment = document.getElementById('review-comment');
const submitReview = document.getElementById('submit-review');

stars.forEach(star => {
    star.addEventListener('click', function() {
        rating = this.getAttribute('data-value');
        stars.forEach(star => star.style.color = 'gray');
        for(let i = 0; i < rating; i++) {
            stars[i].style.color = 'gold';
        }
    });
});

submitReview.addEventListener('click', function() {
    const review = {
        rating: rating,
        comment: reviewComment.value
    };
    console.log(review);
    // Here you would send the review object to your server to be saved
});