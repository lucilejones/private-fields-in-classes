class Person {
  #id;

  constructor() {
    this.#id = Math.random();
  }

  getID() {
    return this.#id;
  }
}

const person1 = new Person();
// console.log(person1.id);
// the console.log will print undefined
person1.getID();

module.exports = Person;
