import { jest, describe, test, expect } from '@jest/globals'
// import Mock from 'ts-jest' 


class Person {
 public readonly  name:string
  constructor(name:string) {
    this.name = name
  }
  getName(): string {
    // console.log('this',this)
    return this.name
   }
}



describe('spy and stub', () => {
  let p = new Person('jacob')
  console.log(p.name)
  test("spy", () => {
    let spy1 = jest.spyOn(p, 'getName')
    p.getName()
    // Person {
    //   name: 'jacob',
    //   getName: [Function: mockConstructor] {
    //     _isMockFunction: true,
    //     getMockImplementation: [Function (anonymous)],
    //     mock: [Getter/Setter],
    //     mockClear: [Function (anonymous)],
    //     mockReset: [Function (anonymous)],
    //     mockRestore: [Function (anonymous)],
    //     mockReturnValueOnce: [Function (anonymous)],
    //     mockResolvedValueOnce: [Function (anonymous)],
    //     mockRejectedValueOnce: [Function (anonymous)],
    //     mockReturnValue: [Function (anonymous)],
    //     mockResolvedValue: [Function (anonymous)],
    //     mockRejectedValue: [Function (anonymous)],
    //     mockImplementationOnce: [Function (anonymous)],
    //     mockImplementation: [Function (anonymous)],
    //     mockReturnThis: [Function (anonymous)],
    //     mockName: [Function (anonymous)],
    //     getMockName: [Function (anonymous)]
    //   }
    // }
    expect(spy1).toBeCalled()
  })
  test("stub", () => {
    let p = new Person('jacob')
    let stub1 = jest.fn().mockImplementation(p.getName.bind({name:"jacob"})) //this { name: 'jacob' }
    // console.log('in stub',stub1()) //  in stub jacob
    expect(stub1).toBeCalled() 
  })

})

// https://www.pluralsight.com/guides/how-does-jest.fn()-work
// note

// use jest.fn for function
//use jest spyOn for class(Object) and its methods