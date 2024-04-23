/* Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
Пример : n=5 --> [5,4,3,2,1] */

const reverseSeq = n => {
    let res=[];
    for (let i=n; i > 0; i--) {
        res.push(i)
    } 
    return res;
  };
  console.log (reverseSeq(5))