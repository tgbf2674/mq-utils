function max(val) {
    let res = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < val.length; i++) {
        if (typeof val[i] === 'number') {
            res = Math.max(res, val[i]);
        }
    }
    return res === Number.MIN_SAFE_INTEGER ? NaN : res;
}
export default max;