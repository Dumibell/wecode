function isEven(num) {
    let arr = [];
    for(let i =0; i < num.length; i++) {
        if(num[i]%2 === 0) {
            arr.push(num[i])
        }
    }
    return arr;
}

num = [1, 2, 3, 4]
console.log(isEven(num))