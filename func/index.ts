import isNaN from './Base/isNaN';
import isFinite from './Base/isFinite';
import isUndefined from './Base/isUndefined';
import isArray from './Base/isArray';
import isFloat from './Base/isFloat';
import isInteger from './Base/isInteget';
import isFunction from './Base/isFunction';
import isBoolean from './Base/isBoolean';
import isString from './Base/isString';
import isNumber from './Base/isNumber';
import isRegExp from './Base/isRegExp';
import isObject from './Base/isObject';
import isRealObject from './Base/isRealObject';
import isDate from './Base/isDate';
import isValidDate from './Base/isValidDate';
import isError from './Base/isError';
import isTypeError from './Base/isTypeError';
import isEmpty from './Base/isEmpty';
import isNull from './Base/isNull';
import isSymbol from './Base/isSymbol';
import isElement from './Base/isElement';
import isDocument from './Base/isDocument';
import isWindow from './Base/isWindow';
import isFormData from './Base/isFormData';
import isMap from './Base/isMap'
import isWeakMap from './Base/isWeakMap';
import isSet from './Base/isSet';
import isWeakSet from './Base/isWeakSet';
import isLeapYear from './Base/isLeapYear';
import getType from './Base/getType';
import getSize from './Base/getSize';
import stringToJSON from './Base/stringToJSON';
import JSONtoString from './Base/JSONtoString';
import keys from './Base/keys';
import values from './Base/values';
import entries from './Base/entries';
import first from './Base/first';
import last from './Base/last';

import clear from './Object/clear';
import clone from './Object/clone';
import objectEach from './Object/objectEach';

import noop from './Function/noop';
import throttle from './Function/throttle';
import debounce from './Function/debounce';

import arrayEach from './Array/arrayEach';
import lastArrayEach from './Array/lastArrayEach';
import arrayIndexOf from './Array/arrayIndexOf';
import includeArrays from './Array/includeArrays'
import lastIndexOf from './Array/lastIndexOf';
import remove from './Array/remove';
import shuffle from './Array/shuffle';
import sample from './Array/sample';
import toArray from './Array/toArray';
import sum from './Array/sum';
import uniq from './Array/uniq';
import flat from './Array/flat';
import toArrayTree from './Array/toArrayTree';
import toTreeArray from './Array/toTreeArray';
import searchTree from './Array/searchTree';
import filterTree from './Array/filterTree';
import eachTree from './Array/eachTree';
import mapTree from './Array/mapTree';

import now from './Date/now';
import toStringDate from './Date/toStringDate';
import timestamp from './Date/timestamp';
import toDateString from './Date/toDateString';
import getWhatMonth from './Date/getWhatMonth';
import getWhatDay from './Date/getWhatDay';
import getWhatYear from './Date/getWhatYear';
import getDayOfYear from './Date/getDayOfYear';

import random from './Number/random';
import min from './Number/min';
import max from './Number/max';
import round from './Number/round';
import toNumberString from './Number/toNumberString';
import toNumber from './Number/toNumber';
import toInteger from './Number/toInteger';
import add from './Number/add';
import multiply from './Number/multiply';
import subtract from './Number/subtract';
import divide from './Number/divide';

import toValueString from './String/toValueString';
import trim from './String/trim';
import trimLeft from './String/trimLeft';
import trimRight from './String/trimRight';
import repeat from './String/repeat';
import padStart from './String/padStart';
import padEnd from './String/padEnd';
import startsWith from './String/startsWith';
import endsWith from './String/endsWith';

import unserialize from './Other/unserialize';
import serialize from './Other/serialize';
const mmqUtils = { isNaN: isNaN, isFinite, isUndefined, isArray, isFloat, isInteger, isFunction, isBoolean, isString, isNumber, isRegExp, isObject, isRealObject, isDate, isValidDate, isError, isTypeError, isEmpty, isNull, isSymbol, isElement, isDocument, isWindow, isFormData, isMap, isWeakMap, isSet, isWeakSet, isLeapYear, getType, getSize, stringToJSON, JSONtoString, keys, values,entries, first, last, noop, throttle, debounce, arrayEach, now, toStringDate, timestamp, clear, random, min, max, round, toNumberString,toValueString, trim, trimLeft, trimRight, repeat, padStart, padEnd, startsWith, endsWith, unserialize, serialize, toNumber, toInteger, add, multiply, subtract, divide, lastArrayEach, arrayIndexOf, includeArrays, lastIndexOf, remove, shuffle, sample, toArray, sum, uniq, flat, toArrayTree, toTreeArray, searchTree, filterTree, eachTree, mapTree, clone, objectEach, toDateString, getWhatMonth, getWhatDay, getWhatYear, getDayOfYear }

export default mmqUtils
