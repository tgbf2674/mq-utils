import isArray from '../Base/isArray';
const help = (arr, deep) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res = res.concat(isArray(arr[i]) ? (deep ? help(arr[i], deep) : arr[i]) : [arr[i]]);
    }
    return res;
};
function flat(arr, deep) {
    if (arr && isArray(arr)) {
        return help(arr, deep);
    }
    return [];
}
export default flat;