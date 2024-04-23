/* Напишите функцию, которая возвращает строку, в которой имя заменено на фамилию.
Пример (Ввод -> Вывод)
"john McClane" --> "McClane john" */

// function nameShuffler(str){
//     return str.split(' ').reverse().join(' ');
//   }
// console.log (nameShuffler('John Brown'))

function nameShuffler(str){
    let fn='', ln='', mod='fn';
  
    for (let i = 0; i<str.length; i++){
    if (str[i] === ' ') {
        mod='ln';
        continue;
    }
      
    if (mod==='fn'){
        fn += str[i];
    }
       else{
        ln += str[i];
       }
    }
    return `${ln} ${fn}`
  }
console.log (nameShuffler('John Brown'))

