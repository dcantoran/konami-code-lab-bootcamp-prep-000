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

var index = 0;
function init() {
  // your code here
  document.body.addEventListener('keydown', onKeyDownHandler);
  const key = e.key;
  
  if (key === alphabet[index]) {
    index++;
  
  
    if (index === alphabet.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0
  }
}
