var wrapper = document.querySelector('.wrapper svg')


// We are only adding and removing the 'active' class,
// the entire animation is defined in the CSS code
function draw() {
  wrapper.classList.add('active')
}






// Play draw animation once
setTimeout(draw, 300)