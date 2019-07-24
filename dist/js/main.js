// Select DOM items for menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');
const box2 = document.querySelector('.box2');

// Dom items for gallerie1
const currentImg = document.querySelector('#current-img');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// Set initial State of box2 
let showBox2 = false;

// Set Initial State Of Menu 
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu); 

function toggleMenu(){
  console.log("salut");
    if(!showMenu){
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItem.forEach(item => item.classList.add('show'));

      // Set Menu State 
      showMenu = true;
      
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
  
           // Set Menu State 
      showMenu = false;

    }
}

const navWork = document.querySelector('.current');
navWork.addEventListener('click', toggleBox2); 

function toggleBox2(){
    if(!showBox2){
      
      box2.classList.add('.show');

      // Set Menu State 
      showBox2 = true;
      
    } else {
        
        box2.classList.remove('.show');
  
           // Set Menu State 
      showBox2 = false;

    }
}

// get image come from sides for section work 

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


// Section work image gallerie
imgs.forEach(img => img.addEventListener('click', 
imgClick));
  
function imgClick(e){
  // Reset the opacity 
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  currentImg.src = e.target.src;
  
  //Add fade in class
  currentImg.classList.add('fade-in');

  // Remove fade-in class after .5 seconds
  setTimeout(()=> currentImg.classList.remove('fade-in'),500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
