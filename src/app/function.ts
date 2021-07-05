interface MyFn {
    ():number[]
}

let arr = [1, 2, 3, 4, 5]
export let Fn: MyFn = () => {
    console.log('my array before loop',arr)
    for (let i in arr){
        let item = arr[i]
        arr[i] =++item
    } 
    console.log('my array after loop',arr)
    return arr
    
}
