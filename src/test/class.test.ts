
import { jest, describe, test, expect } from '@jest/globals'
// import mockConstructor from 'ts-jest'
import {Person} from '../app/class'
// jest.mock('../app/class')

let a=(a:any)=>a


describe('Testing class', () => {
  test("first test", () => {
    let p = new Person('jacob')
    console.log(p) 
    expect(p.name).toBe('jacob')
  }) 

  test('mockName', () => {
    let mockFn = jest.fn(a).mockName('MyMock')
    console.log('MockName',mockFn.getMockName())
  })

  test('mockFn.mock.calls', () => {
    let mockFn = jest.fn(a)
    mockFn(3)
    // let mf: typeof mockConstructor = new mockFn(1) //
   
    // console.log('mf',mf) //mf mockConstructor {}
    // console.log(mockFn.mock) // below
    // {
    //   calls: [ [ 3 ], [ 1 ] ],
    //   instances: [ undefined, mockConstructor {} ],
    //   invocationCallOrder: [ 1, 2 ],
    //   results: [ { type: 'return', value: 3 }, { type: 'return', value: 1 } ]
    // }

    // console.log(mockFn.mock.calls) // [[3]] 
    
    expect(mockFn.mock.calls[0]).toContain(3)
  })
})  