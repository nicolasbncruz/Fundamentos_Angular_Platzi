
const username:string = 'nicolascruz';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1,9);

class Person {

  constructor(public age: number, public lastname: string){ }
}

const nico = new Person(19,'Nicolas');
nico.age;
