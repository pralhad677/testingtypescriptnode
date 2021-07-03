interface MyFn< K> {
    ():K
}

export let Fn: MyFn<string[]> = () => {
    let arr = [1,2,3,4,5]
   return arr.map(item => {
        return item.toString()
    }
    )
} 