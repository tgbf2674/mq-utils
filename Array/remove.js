import isFunction from '../Base/isFunction';
function removeArray(obj, iterate) {
    let res = [];
    if (isFunction(iterate)) {
        res = obj.filter(iterate);
    }
    else {
        res = obj.filter(item => item !== iterate);
    }
    return res;
}
export default removeArray;