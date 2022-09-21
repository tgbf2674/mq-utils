import isNull from './isNull';
import isUndefined from './isUndefined';
function JSONtoString(val) {
    if (isNull(val) || isUndefined(val))
        return '';
    return JSON.stringify(val);
}
export default JSONtoString;