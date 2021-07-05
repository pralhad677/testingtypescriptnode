import { Fn } from '../app/function'

import {  jest,describe, test, expect } from '@jest/globals'

describe("Testing mockClear,mockReset,mockRestore",()=> {
  test("Testing mockClear", () => {
    // Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.
    let mockFn = jest.fn(Fn)
    
    mockFn()
    
    console.log(mockFn.mock.calls) // [ [] ]
    console.log(mockFn.mock.instances) //[ undefined ]
    console.log(mockFn.mock.invocationCallOrder) //[ 1 ]
    console.log(mockFn.mock.results) // [ { type: 'return', value: [ 2, 3, 4, 5, 6 ] } ]
    mockFn()
    console.log(mockFn.mock.calls) // [ [],[] ]
    console.log(mockFn.mock.instances) //[ undefined, undefined ]
    console.log(mockFn.mock.invocationCallOrder)   // [ 1, 2 ]
    console.log(mockFn.mock.results)
    // [
    //   { type: 'return', value: [ 3, 4, 5, 6, 7 ] },
    //   { type: 'return', value: [ 3, 4, 5, 6, 7 ] }
    // ]

    mockFn.mockClear()
    mockFn()
    console.log(mockFn.mock.calls)  // [ [] ]
    console.log(mockFn.mock.instances) //  [ undefined ]
    console.log(mockFn.mock.invocationCallOrder)   // [3]
    console.log(mockFn.mock.results) //[ { type: 'return', value: [ 4, 5, 6, 7, 8 ] } ]
    expect(5).toBe(5) 
  }) 

  test("Testing mockReset", () => {
  })

  test("Testing mockRestore", () => {
  })


})