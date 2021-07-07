import { jest, describe, test, expect ,beforeEach} from '@jest/globals'
function a(cb:any,x:any) {
  cb(x)
}
const mockFn = jest.fn();

beforeEach(() => {
  jest.clearAllMocks() //running a jest.clearMocks() between each test
})
describe("Testing clearMocks", () => {
  
  
  
  test('Testing once', () => {
    
    a(mockFn,3)
    expect(mockFn).toHaveBeenCalledWith(3);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  test('Testing twice', () => {
    // mockFn.mockClear();
    a(mockFn, 4)
    console.log('mockFn', mockFn.mock)
    // {
    //   calls: [ [ 4 ] ],
    //   instances: [ undefined ],
    //   invocationCallOrder: [ 2 ],
    //   results: [ { type: 'return', value: undefined } ]
    expect(mockFn).toHaveBeenCalledWith(4);
    expect(mockFn).toHaveBeenCalledTimes(1); //error occurs when mockClear is not used
    // Expected number of calls: 1
    // Received number of calls: 2
  });
  test('Testing thrice', () => {
    // mockFn.mockClear();
    a(mockFn,3)   
    console.log('mockFn', mockFn.mock)
  //   {
  //   calls: [ [ 3 ] ],
  //   instances: [ undefined ],
  //   invocationCallOrder: [ 3 ],
  //   results: [ { type: 'return', value: undefined } ]
  // }
  expect(mockFn).toHaveBeenCalledWith(3);
    expect(mockFn).toHaveBeenCalledTimes(1); //error occurs when mockClear is not used
    // Expected number of calls: 1
    // Received number of calls: 2
});
})


//source 
// https://codewithhugo.com/jest-stub-mock-spy-set-clear/#clearing-jest-mocks-with-mockclear-jestclearallmocks-and-beforeeach
// https://codewithhugo.com/jest-stub-mock-spy-set-clear/