import isError from './isError';

function isTypeError (val?: any): boolean {
  return isError(val) && val instanceof TypeError
}

export default isTypeError
