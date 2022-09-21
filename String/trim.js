import isString from '../Base/isString';
import isNumber from '../Base/isNumber';
function trim(str) {
    return isString(str) ? str.trim() : isNumber(str) ? str.toString() : '';
}
export default trim;