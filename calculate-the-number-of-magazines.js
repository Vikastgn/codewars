/* В этом ката вы должны написать функцию, которая определяет количество магазинов, которые каждый солдат должен иметь 
в своей сумке.Вы получите оружие и количество улиц, которые им нужно пересечь. Учитывая, что на каждой улице солдат
 стреляет 3 раза. Ниже приведено соотношение видов оружия:

PT92 - 17 патронов
M4A1 - 30 пуль
M16A2 - 30 пуль
PSG1 - 5 пуль

Пример:

["PT92", 6] => 2 (6 улиц по 3 патрона в каждой)
["M4A1", 6] => 1

Возвращаемым значением всегда будет целое число, так же как и параметрами.*/

function magNumber(info){
    const load = {
      'PT92': 17,
      'M4A1': 30,
      'M16A2': 30,
      'PSG1': 5
    }
    return Math.ceil( info[1]*3 / load[info[0]])
  }
console.log (magNumber(["PT92", 6], 2))  