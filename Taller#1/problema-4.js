//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓    FUNCION TRADICIONAL    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  

/* let arr1 = [2,4,-8,5,-6];

console.log("la cantidad de sables defectuosos con energía negativa fue de:", negativeNumbers(arr1));


function negativeNumbers(arr) {
  let negativos = 0;
  arr.forEach(num => {
    if (num < 0) negativos++;
  });
  return negativos;
} */



//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓    FUNCION FLECHA    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  
let arr1 = [2, 4, -8, 5, -6];



const negativeNumbers = (arr) => {
  let negativos = 0;
  arr.forEach(num => {
    if (num < 0) negativos++;
  });
  return negativos;
}

console.log("la cantidad de sables defectuosos con energía negativa fue de:", negativeNumbers(arr1));

