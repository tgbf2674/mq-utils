import isArray from '../Base/isArray';
import isRealObject from '../Base/isRealObject';
import isNull from '../Base/isNull';
import isUndefined from '../Base/isUndefined';
function stringifyParams(resultVal, resultKey, isArr) {
    let _arr;
    let result = [];
    if (resultVal instanceof Array) {
        resultVal.forEach((item, key) => {
            _arr = isArray(item);
            if (isRealObject(item) || _arr) {
                result = result.concat(stringifyParams(item, resultKey + '[' + key + ']', _arr));
            }
            else {
                result.push(encodeURIComponent(resultKey + '[' + (isArr ? '' : key) + ']') + '=' + encodeURIComponent(isNull(item) ? '' : item));
            }
        });
    }
    else {
        for (const key in resultVal) {
            _arr = isArray(resultVal[key]);
            if (isRealObject(resultVal[key]) || _arr) {
                result = result.concat(stringifyParams(resultVal[key], resultKey + '[' + key + ']', _arr));
            }
            else {
                result.push(encodeURIComponent(resultKey + '[' + (isArr ? '' : key) + ']') + '=' + encodeURIComponent(isNull(resultVal[key]) ? '' : resultVal[key]));
            }
        }
    }
    return result;
}
function serialize(obj) {
    let _arr;
    let params = [];
    for (const key in obj) {
        if (!isUndefined(obj[key])) {
            _arr = isArray(obj[key]);
            if (isRealObject(obj[key]) || _arr) {
                params = params.concat(stringifyParams(obj[key], key, _arr));
            }
            else {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(isNull(obj[key]) ? '' : obj[key]));
            }
        }
    }
    return params.join('&').replace(/%20/g, '+');
}
export default serialize;