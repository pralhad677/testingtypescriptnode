import b from '../app/a'
 
// let b =x=>x 

  
describe("first test", () => {
  test("hey", () => { 
    let mockFn = jest.fn(b)
    mockFn(2)  
    expect(mockFn).toBeCalled() 
    expect(mockFn).toBeCalledWith(2)
    console.log(mockFn.mock.calls) //[[2]]
    expect(mockFn.mock.calls[0]).toContain(2)
  })  
})