function min(val) {
    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < val.length; i++) {
        if (typeof val[i] === 'number') {
            res = Math.min(res, val[i]);
        }
    }
    return res === Number.MAX_SAFE_INTEGER ? NaN : res;
}
export default min;