/*Ваш Quark класс должен позволять вам создавать кварки любого допустимого цвета ("red", "blue", и "green") и любого допустимого аромата ('up', 'down', 'strange','charm', 'top', 'bottom',, и,,,). */

class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3;
  }

  interact(quark) {
    const quarkColor = quark.color;
    quark.setColor(this.color);
    this.color = quarkColor;
  }

  setColor(color) {
    this.color = color;
  }
}
