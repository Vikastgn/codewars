/* Учитывая число n, верните количество положительных нечетных чисел ниже n, ЛЕГКО!
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13]) */

// function oddCount(n){
//     let res=[];
//     for (let i=1; i<n; i++) {
//       if (i%2 !== 0) {
//         res.push(i);
//       }
//     }
//     return res;
//   }

function oddCount(n){
    return Math.floor(n/2);
   }
   
  console.log( oddCount(15))