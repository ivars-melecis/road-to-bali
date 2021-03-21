function gallery() {
  const slides = Array.from(document.getElementsByClassName("gallery-item"));
  const descriptions = Array.from(document.getElementsByClassName("gallery-descr"));
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const totalSlides = slides.length;
  let currentSlide = 0;
  
  // Set buttons
  next.addEventListener("click", goForward, false);
  prev.addEventListener("click", goBack, false);

  function goForward() {
    if (currentSlide === totalSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    setActive(currentSlide);
  }

  function goBack() {
    if (currentSlide === 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide--;
    }
    setActive(currentSlide);
  }

  function setActive(slide) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[slide].classList.add("active");
    
    descriptions.forEach((descr) => descr.classList.remove("active"));
    descriptions[slide].classList.add("active");
  }
}

gallery();
