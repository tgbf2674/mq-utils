import isNaN from './isNaN';
import isUndefined from './isUndefined';
export function isNumberFloat(val) {
    return val !== null && typeof val === 'number' && !isUndefined(val) && !isNaN(val) && val.toString().indexOf('.') !== -1;
}
export default isNumberFloat;