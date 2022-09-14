import isDate from './isDate';

function isValidDate(val?: any): boolean {
  return isDate(val) && !isNaN(val.valueOf())
}

export default isValidDate
