import toValueString from './toValueString';

function trimLeft(str?: any): string {
  return str && str.trimLeft ? str.trimLeft() : toValueString(str).replace(/^[\s\uFEFF\xA0]+/g, '');
}

export default trimLeft
