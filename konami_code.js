const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;
document.body.addEventListener('keydown', onKeyDownHandler);
function init() {
  // your code here
  
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
  
  
    if (index === codes.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0
  }
}
