let box = document.querySelector('#box');
let demo = document.querySelector('#demo');
let icon = document.querySelector('#path-modified');
let paragraph = document.querySelectorAll('.test');

function runAnimation() {
  box.classList.add('colorTransition');
  demo.classList.add('pargraph-active');
  icon.classList.add('path-modified');
  paragraph.forEach(function(p) {
    p.classList.add('paragraph-active');
  });

  console.log(`Animation started`);
}

function initialState() {
  box.classList.remove('colorTransition');
  demo.classList.remove('pargraph-active');
  icon.classList.remove('path-modified');
  paragraph.forEach(function(p) {
    p.classList.remove('paragraph-active');
  });
  console.log(`Initial State`);
}

function theLoop(i) {
  initialState();
  demo.innerHTML = i;

  setTimeout(function() {
    runAnimation();
  });

  setTimeout(function() {
    theLoop(++i);
  }, 3000); //<-- 3s
}
theLoop(23376);
