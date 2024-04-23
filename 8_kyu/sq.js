function squareOrSquareRoot(array) {
    const res = [];
    for (let i=0; i< array.length; i++) {
     if (Math.sqrt(array[i])%1===0) {
        res.push(Math.sqrt(array[i]))
     }
      else res.push(array[i]*array[i]);
    }
    return res
  }
  console.log (squareOrSquareRoot([2,49,10]))

