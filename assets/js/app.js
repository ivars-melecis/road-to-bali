mainMenu();
activeMenu();
lazyImgSrc();
scrollTop();

/**
 * Function that controls responsive menu.
 * @returns {null};
 */
function mainMenu(){
  const trigger = document.getElementById('menu-trigger');
  const container = document.documentElement;
  const menu = document.getElementById('menu');
  const activeClass = 'menu-on';

  trigger.addEventListener('click', (e) => {
    trigger.setAttribute('aria-expanded', !JSON.parse(trigger.getAttribute('aria-expanded')))
    container.classList.toggle(activeClass);
    document.addEventListener('click', offClick, false);
  }, false);

  function offClick(e){
    if(!menu.contains(e.target) && !trigger.contains(e.target)){
      container.classList.remove(activeClass);
       document.removeEventListener('click', offClick, false);
    }
  }
}
/**
 * Sets active state to menu item
 */
function activeMenu(){
  const menu = document.getElementById('menu');
  const currentPage = window.location.pathname.replace('/','');
  const pages = Array.from(menu.getElementsByTagName('a'));
  pages.forEach((link) => {
    let current = link.href.split('/');
    if(currentPage === current[current.length - 1]){
      link.classList.add('active');
    }
  });
}

/**
 *  Lazy load images - site speed optimisation
 * 
 */
function lazyImgSrc(){
 const items = Array.from(document.getElementsByClassName('img-lazy-load'));
 const options =  {
  root: null,
  thresholds: [0.1]
};

 if ("IntersectionObserver" in window) {
  let observer = new IntersectionObserver(handleObserver, options);
  items.forEach(item => observer.observe(item));
 } else {
  swapImages(element);
 }

}

function handleObserver(items,observer){
  items.forEach(item => {
      if(item.isIntersecting) {
        let element = item.target;
        swapImages(element);
        observer.unobserve(element);
      }
  });
}

function swapImages(item){
  let src = item.hasAttribute('data-src') ? item.dataset.src : null;
  if(!src) return;
  item.src = src;
  item.classList.remove('img-lazy-load');
}

/**
 *  Scroll to top - accessibility purpose
 * 
 */

function scrollTop(){
  const btn = document.getElementById('to-top');

  if(!btn) return;
  
  btn.addEventListener('click', () =>  {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
}, false);
}