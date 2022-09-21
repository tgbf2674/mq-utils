import now from './now';
import mmqUtils from '../index';
function timestamp(str, format) {
    if (str) {
        const date = mmqUtils.toStringDate(str, format);
        return date.getTime();
    }
    return now();
}
export default timestamp;