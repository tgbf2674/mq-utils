function random(min, max) {
    return min >= max ? min : (min = min >> 0) + Math.round(Math.random() * ((max || 9) - min));
}
export default random;