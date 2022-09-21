import isObject from './isObject';
function isEmpty(val) {
    if (isObject(val)) {
        for (const key in val) {
            return false;
        }
        return true;
    }
    else
        return false;
}
export default isEmpty;