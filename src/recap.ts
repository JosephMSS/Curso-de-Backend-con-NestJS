let sum = (a: number, b: number): number => a + b;
sum(1, 1);
class Person {
  constructor(private name: string, private age: number) {}
  getSummary(): string {
    return `my name is ${this.name}, ${this.age}`;
  }
}
const person = new Person('Joseph', 21);

console.log(
  '🚀 ~ file: recap.ts:17 ~ person.getSummary()',
  person.getSummary(),
);
