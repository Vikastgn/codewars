// Создайте метод each_cons,который принимает список и число n и возвращает каскадные подмножества списка размера n, вот так:
// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function eachCons(array, n) {
    const r =[];
    for(let i=0; i<=array.length-n; i++){
        const chunk = [];
        for (let j=i; j<i+n;j++) {
            chunk.push(array[j])
        }
        r.push(chunk)
    }
    return r;
}
console.log(eachCons([1,2,3,4], 3))