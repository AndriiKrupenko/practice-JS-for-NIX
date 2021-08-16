let Obj = {
    number: [],
    bigint: [],
    boolean: [],
    string: [],
    null: [],
    undefined: [],
    symbol: [],
    object: []
};

function keyObj(arr) {
    for (let key of arr) {
        switch (typeof key) {
        case "number":
        Obj.number.push(key);
        break;
        case "bigint":
        Obj.bigint.push(key);
        break;
        case "boolean":
        Obj.boolean.push(key);
        break;
        case "string":
        Obj.string.push(key);
        break;
        case "null":
        Obj.null.push(key);
        break;
        case "undefined":
        Obj.undefined.push(key);
        break;
        case "symbol":
        Obj.symbol.push(key);
        break;
        case "object":
        Obj.object.push(key);
        break;
        }    
    }
    return Obj;
}
