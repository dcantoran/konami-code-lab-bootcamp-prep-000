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

function init(e) {
  // your code here
  document.body.addEventListener('keydown', init);
  const key = e.key;
  
  if (key === codes[index]) {
    index++;
  
  
    if (index === 9) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}

// document.body.addEventListener("keydown", (init) => {
//   const key = init.key 
  
  
//   if (codes[index] === key) {
//     ++index 
//   } 
  
//   else {
//     idx = 0 
//   }
  
  
//   if (index === 10) {
//     alert("Hurray!");
//     index = 0 
//   }
// }); 
