/*Бобу нужен быстрый способ вычислить объем кубоида с тремя значениями: length, width и height кубоида. 
Напишите функцию, которая поможет Бобу с этим вычислением.*/

class Kata {
    static getVolumeOfCuboid(l, w, h) {
      return l * w * h;
    }
  };

  const volume = Kata.getVolumeOfCuboid(6.3, 5, 2);
  console.log("Объем кубоида:", volume);