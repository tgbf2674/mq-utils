import isRealObject from './isRealObject';
import isArray from './isArray';
function entries(val) {
    if (isRealObject(val)) {
        return Object.entries(val);
    }
    else if (isArray(val)) {
        return val.map((item, index) => {
            return [index, item];
        });
    }
    else
        return {};
}
export default entries;