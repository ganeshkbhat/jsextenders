function flattenDeep(n) {
    let a = [...n];
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            // console.log(a[i]);
            // a[i] = flattenDeep(a[i])
            // console.log(a[i]);
            console.log();
            a = [...a.splice(0, i-1), ...flattenDeep(...a.splice(0, 1)), ...a.splice(0, a.length - 1)];
        }
    }
    return a;
}
let d = [1,2,3,4,[1,2,3,[3,4,5],4,5],6,7,8,[1,2,[3,4,5,[6,7]]]];

console.log("d", d);
console.log("modify", flattenDeep(d));
