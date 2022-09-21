import isRealObject from './isRealObject';
import isArray from './isArray';
import isString from './isString';
function values(val) {
    const res = [];
    if (isRealObject(val)) {
        return Object.values(val);
    }
    else if (isArray(val)) {
        for (const item of val) {
            res.push(item);
        }
        return res;
    }
    else if (isString(val)) {
        for (const key in val) {
            res.push(val[key]);
        }
        return res;
    }
    else
        return [];
}
export default values;