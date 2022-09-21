import isString from '../Base/isString';
import isNull from '../Base/isNull';
import isUndefined from '../Base/isUndefined';
function startsWith(str, target, index) {
    if (!target || !isString(target))
        return false;
    return (isNull(index) && isUndefined(index)) ? str.startsWith(target) : str.startsWith(target, index);
}
export default startsWith;