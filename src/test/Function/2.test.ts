import { jest, describe, test, expect, beforeEach } from '@jest/globals'
// import mockConstructor from 'ts-jest'
function a(cb:any,x:any) {
  return cb(x)?true:false
}
const mockFn = jest.fn();

beforeEach(() => {
  jest.clearAllMocks() //running a jest.clearMocks() between each test
})
describe("Testing mockImplementation", () => {
  test('Testing first', () => {
    mockFn.mockImplementation(()=>true)
    let mf= a(mockFn, 3)
    // console.log(mf)
    // console.log('mockFn', mockFn.mock)
    expect(mf).toBe(true)
  })
  test('Testing twice', () => {
    mockFn.mockImplementation(()=>false) //3
    mockFn.mockImplementationOnce(()=>true) //1
    mockFn.mockImplementationOnce(()=>'asdk') //2
    let mf= a(mockFn, 3) //mockImplementation ko through override garirako x
    let mf1= a(mockFn, 3)
    let mf2= a(mockFn, 3)
    // console.log(mf) 
    // console.log('mockFn', mockFn.mock)
    expect(mf).toBe(true)
    expect(mf1).toBe(true)
    expect(mf2).toBe(false)
  })
   
  
  
})


//source 
// https://codewithhugo.com/jest-stub-mock-spy-set-clear/#clearing-jest-mocks-with-mockclear-jestclearallmocks-and-beforeeach
// https://codewithhugo.com/jest-stub-mock-spy-set-clear/