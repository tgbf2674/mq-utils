import isUndefined from './isUndefined';
import isNaN from './isNaN';
function isInteger(val) {
    return typeof val === 'number' && !isUndefined(val) && !isNaN(val) && val % 1 === 0;
}
export default isInteger;