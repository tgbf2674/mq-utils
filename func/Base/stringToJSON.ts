import isString from './isString';

function stringToJSON (val?: string): any {
  if (isString(val) && val) {
    return JSON.parse(val)
  } else {
    return {}
  }
}

export default stringToJSON
