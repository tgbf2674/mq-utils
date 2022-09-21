import isError from './isError';
function isTypeError(val) {
    return isError(val) && val instanceof TypeError;
}
export default isTypeError;