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

function init() {
  // your code here
  
  document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  let index =0;
  
  if(keyName ===codes[index]){
    index++;
    
    if(index === codes.length){
      alert("Hurray!");
      
      index =0;
    }
    
  }else{
    index=0;
  }
  
});
}

