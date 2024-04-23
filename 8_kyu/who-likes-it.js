/*Вы, вероятно, знакомы с системой "лайков" Facebook и других страниц. Люди могут ставить "лайки" публикациям в блоге,
картинкам или другим элементам. Мы хотим создать текст, который должен отображаться рядом с таким элементом.
Реализуйте функцию, которая принимает массив, содержащий имена людей, которым нравится элемент. Она должна возвращать 
отображаемый текст, как показано в примерах:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Примечание: Для 4 или более имен количество в "and 2 others" просто увеличивается. */

function likes(names) {
    const l = names.length;
    if (!l) return "no one likes this";
    if (l===1) return names.join('') + ' likes this';
    if (l===2) return names.join(' and ') + ' like this';
    if (l===3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    if (l>=4) return `${names[0]}, ${names[1]} and ${l-2} others like this`;
  }

  console.log(likes (["Alex", "Jacob", "Mark", "Max"]))