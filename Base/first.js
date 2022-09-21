import isArray from './isArray';
import isRealObject from './isRealObject';
function first(val) {
    if (isArray(val)) {
        return val[0];
    }
    else if (isRealObject(val)) {
        return Object.values(val)[0];
    }
    else
        return val;
}
export default first;