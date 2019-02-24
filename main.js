let box = document.querySelector('#box');
let demo = document.querySelector('#demo');
let icon = document.querySelector('#path-modified');

function runAnimation() {
  box.classList.add('colorTransition');
  demo.classList.add('pargraph-active');
  icon.classList.add('path-modified');
  console.log(`Animation started`);
}

function initialState() {
  box.classList.remove('colorTransition');
  demo.classList.remove('pargraph-active');
  icon.classList.remove('path-modified');
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
