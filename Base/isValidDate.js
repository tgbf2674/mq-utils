import isDate from './isDate';
function isValidDate(val) {
    return isDate(val) && !isNaN(val.valueOf());
}
export default isValidDate;