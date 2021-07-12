


export class Person {
 
  constructor(public age: number) {
    
    this.age = age
  }
  getAge() {
    console.log('this',this)
    return this.age
  }
}