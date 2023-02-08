
function upperCase() {
    console.log(this.toString().toUpperCase())
}

Object.defineProperty(String.prototype, 'upperCase', { value: upperCase, enumerable: true, });

let s = "testing new value"
s.upperCase();
console.log(s);
