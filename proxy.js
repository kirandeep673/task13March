var b = [1,2,3,4,5]
var a = new Proxy(b, {
    get(target, prop){
        prop = Number(prop);
        if(prop < 0){
            return target[target.length + prop];    
        }
        return target[prop];
    }
})
a[-1] = 7
console.log(a[-1]);
console.log(a[-1]);
console.log(a[-2]);
console.log(b);