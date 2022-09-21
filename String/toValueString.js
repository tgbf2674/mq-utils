import isNumber from '../Base/isNumber';
import toNumberString from '../Number/toNumberString';
function toValueString(val) {
    if (isNumber(val)) {
        return toNumberString(val);
    }
    return val ? val.toString() : '';
}
export default toValueString;