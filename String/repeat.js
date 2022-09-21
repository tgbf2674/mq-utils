function repeat(str, count) {
    return typeof count === 'number' ? str.repeat(count) : '';
}
export default repeat;