import b from '../app/a'
import { jest as requiredJest, describe, test, expect } from '@jest/globals'
 
// let b =x=>x 

  
describe("first test", () => {
  test("hey", () => { 
    let mockFn = requiredJest.fn(b)
    mockFn(2)  
    expect(mockFn).toBeCalled() 
    expect(mockFn).toBeCalledWith(2)
    // console.log(mockFn.mock.calls) //[[2]]
    expect(mockFn.mock.calls[0]).toContain(2)
  })  
})