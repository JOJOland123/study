const obj = {
    [Symbol.toStringTag]:'Array'
}

function isArray(arr){
    return Object.prototype.toString.call(arr).slice(8,0)
}
console.log(isArray(obj));
